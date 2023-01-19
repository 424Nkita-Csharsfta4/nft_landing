import Image from "next/image";
import { createElement, FC } from "react";
import styles from "@styles/Sections/Features.module.scss";

const Features: FC = () => {
  return (
    <section aria-label="Features" className={styles.main}>
      {elements.map(({ image, text, title }, id) => {
        return (
          <div key={`Feature-${id}`}>
            <Image
              width={75}
              height={75}
              src={image}
              objectFit="contain"
              priority
              alt=""
            />
            {createElement(`h${1 + id}`, null, title)}
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;

const elements = [
  {
    image: "/icon-access-anywhere.svg",
    title: "Наши привелегии при покупке.",
    text: `В течение 1 часа скидываем тебе все.`,
  },
  {
    image: "/icon-security.svg",
    title: "Наши привелегии при покупке.",
    text: `В течение 1 часа скидываем тебе все.`,
  },
  {
    image: "/icon-collaboration.svg",
    title: "Наши привелегии при покупке.",
    text: `В течение 1 часа скидываем тебе все.`,
  },
  {
    image: "/icon-any-file.svg",
    title: "Наши привелегии при покупке.",
    text: `В течение 1 часа скидываем тебе все.`,
  },
];
