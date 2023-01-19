import { FC } from "react";
import Image from "next/image";
import styles from "@styles/Sections/Reviews.module.scss";

const Reviews: FC = () => {
  return (
    <section title="Reviews" className={styles.main}>
      {reviews.map(({ text, author, image, authorStatus }, id) => {
        return (
          <article key={`review-${id}`} aria-label="User Review ">
            <blockquote>
              <p>{text}</p>
              <figcaption>
                <div className={styles.imageContainer}>
                  <Image
                    src={image}
                    style={{ borderRadius: "50%" }}
                    alt={`A picture of ${author}`}
                    layout="fill"
                  />
                </div>
                <div>
                  {author}
                  <span className={styles.authorStatus}>{authorStatus}</span>
                </div>
              </figcaption>
            </blockquote>
          </article>
        );
      })}
    </section>
  );
};

export default Reviews;

const reviews = [
  {
    text: `Создал сайт для продажи. На технологии Next.js и React.js`,
    author: "Frontend Developer",
    authorStatus: "Admin",
    image: "/fro.jpg",
  },
  {
    text: `Создает NFT для колекции Babe Графический дизайнер.`,
    author: "NFT Creator",
    authorStatus: "Admin",
    image: "/art.jpg",
  },
  {
    text: `Менеджер по продажам NFT на маркетплейсах.`,
    author: "SEO",
    authorStatus: "Admin",
    image: "/men.jpg",
  },
];
