import Card from "@/componets/Card";

const data_cards = [
  {
    title: "Button",
    description:
      "Our custom button component is designed to put you in control of your button's style. With the ability to set your own variants.",
    slug: "custom-button",
  },
  {
    title: "Title",
    description:
      "Our custom title component offers a simple yet powerful feature to cater to your design needs",
    slug: "custom-title",
  },
  {
    title: "Paragraph",
    description:
      "Custom Paraghraph with the `isPrimary` prop, you now have the flexibility to tailor each paragraph's style to suit your specific design requirements.",
    slug: "custom-paragraph",
  },
  {
    title: "Input",
    description: "Try the Input and add your own style",
    slug: "custom-input",
  },
  {
    title: "Image",
    description: "Custom Image with the Loading style",
    slug: "custom-image",
  },
];

export default function Home() {
  return (
    <section className="max-w-[1000px] py-20 h-screen w-full mx-auto flex flex-col space-y-6">
      {data_cards.map((card, index: number) => (
        <Card index={index} key={index} {...card} />
      ))}
    </section>
  );
}
