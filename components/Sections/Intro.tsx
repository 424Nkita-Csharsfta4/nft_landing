import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const Intro = () => (
  <section aria-labelledby="section1-title" className={styles.main}>
    <Image
      width={920}
      height={734}
      src="/nft.svg"
      alt="babe"
      objectFit="contain"
      priority
    />
    <h1 id="section1-title">
      NFT только для твоего крипто кошелька
    </h1>
    <p>
     Покупай у нас NFT по самым низким ценам.
    </p>
    <button type="button">Перейти к NFT</button>
  </section>
);

export default Intro;
