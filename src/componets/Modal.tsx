import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const VARIANT = {
  left: "justify-end max-h-screen ",
  center: "justify-center items-center",
};

const HEIGHT = {
  left: "h-screen",
  center: "h-auto",
};

interface ModalProps {
  showModal: boolean;
  setShowModal: () => void;
  children: ReactNode;
}

export default function Modal({
  children,
  showModal,
  setShowModal,
}: ModalProps) {
  const divRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (divRef?.current && !divRef?.current?.contains(event.target)) {
        setShowModal && setShowModal();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setShowModal]);

  const animationVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex w-full  overflow-hidden bg-gray-100/50 justify-end  bg-opacity-10"
            // onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "ease", duration: 0.5 }}
              className="absolute right-0 bg-white pb-8 w-full lg:w-[60%]"
            >
              <div className="relative h-screen px-3 py-2" ref={divRef}>
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
