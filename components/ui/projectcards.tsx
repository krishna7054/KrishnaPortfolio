import { HoverEffect } from "@/components/ui/hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl  mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Blog Likho",
    description:
      "This project is a blogging platform that allows users to read and publish blog posts. It features an AI-powered summary generation for blog content using Gemini AI, enhancing user experience by providing quick insights into the articles.",
    link: "https://blog-likho.vercel.app/",
    github: "https://github.com/krishna7054/Blog-Likho",
    img:"https://drive.google.com/file/d/1xytT0J-rdfnWM1XPlwhKFdW8XJOIJDlX/view?usp=drive_link",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    github: "",
    img:"",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    github: "",
    img:"",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    github: "",
    img:"",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    github: "",
    img:"",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    github: "",
    img:"",
  },
];
