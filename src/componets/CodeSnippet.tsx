import React, { useRef, useState } from "react";
import ClipboardJS from "clipboard";
import { allCodes } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import CopyIcon from "@/icons/CopyIcon";

type TCode = {
  slug: string;
};
function CodeSnippet({ slug }: TCode) {
  const codeRef = useRef(null);
  const [message, setMessage] = useState<string>("Copy code");

  const code = allCodes.filter((code) => code.slug === slug);

  const MDXContent = useMDXComponent(code[0]?.body.code);

  const handleCopy = () => {
    //@ts-ignore
    const codeSnippet = codeRef?.current?.innerText;
    const clipboard = new ClipboardJS(".copy-btn", {
      text: () => codeSnippet,
    }).on("success", () => {
      setMessage("Coppied !");
      setTimeout(() => {
        setMessage("Copy code");
      }, 1000);
    });
    clipboard.on("error", () => {
      console.error("Failed to copy code snippet.");
    });
  };

  return (
    <div
      className="prose mx-auto max-h-screen overflow-scroll mb-10 flex max-w-[1250px] flex-col justify-between"
      style={{ wordBreak: "break-word" }}
    >
      <div className="w-full flex justify-end mb-5">
        <button
          className="copy-btn bg-gray-300 px-3 py-1.5 text-sm rounded-md flex items-center space-x-2"
          onClick={handleCopy}
        >
          <CopyIcon />
          <span>{message}</span>
        </button>
      </div>
      <div
        ref={codeRef}
        className="w-full justify-between"
        style={{ wordBreak: "break-word" }}
      >
        <MDXContent />
      </div>
    </div>
  );
}

export default CodeSnippet;
