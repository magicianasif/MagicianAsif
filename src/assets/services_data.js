import web from "../assets/web.png";
import mob from "../assets/app-development_10950217.png";
import seo from "../assets/optimization_4926830.png";
import magic from "../assets/magic-hat_11591777.png";

const Services_Data = [
  {
    s_no: "01",
    s_name: "Web Development",
    s_desc: "Creating modern, fast, and scalable web applications.",
    s_long_desc:
      "I specialize in developing high-performance web applications using technologies like React, Node.js, and Next.js. Whether it's a portfolio website, an e-commerce platform, or a SaaS product, I ensure a seamless and engaging user experience.",
    s_image: web,
  },
//   {
//     s_no: "02",
//     s_name: "Mobile Development",
//     s_desc: "Building user-friendly and engaging mobile applications.",
//     s_long_desc:
//       "I design and develop mobile applications that prioritize usability and performance. Using frameworks like React Native and Flutter, I create cross-platform apps that offer a seamless experience on both iOS and Android devices.",
//     s_image: mob,
//   },
  {
    s_no: "02",
    s_name: "SEO Optimization",
    s_desc: "Boosting website visibility and organic traffic.",
    s_long_desc:
      "I provide SEO services that improve search engine rankings through keyword research, on-page and technical SEO, link-building strategies, and content optimization. My approach ensures your website reaches a wider audience and drives more organic traffic.",
    s_image: seo,
  },
  {
    s_no: "03",
    s_name: "Magic Shows",
    s_desc: "Engaging and mesmerizing close-up magic performances.",
    s_long_desc:
      "As a professional close-up magician, I specialize in interactive and mind-blowing magic performances. Whether it's a corporate event, private party, or a casual gathering, I bring a unique blend of illusions and entertainment to leave audiences amazed.",
    s_image: magic,
  },
];

export default Services_Data;
