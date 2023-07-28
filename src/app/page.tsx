import Card from "@/componets/Card";

const data_cards = [
  {
    title: "Button",
    description: "Custom button",
    slug: "hello-world",
  },
  {
    title: "Button",
    description: "Custom button",
    slug: "hello-world",
  },
  {
    title: "Button",
    description: "Custom button",
    slug: "hello-world",
  },
  {
    title: "Button",
    description: "Custom button",
    slug: "hello-world",
  },
  {
    title: "Button",
    description: "Custom button",
    slug: "hello-world",
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
