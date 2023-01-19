import Image from "next/image";
import styles from "@styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.main} aria-label="Navbar">
      <Link href="/">
        <a tabIndex={0} title="Go to the Homepage">
          <Image
            objectFit="contain"
            src="/logos.svg"
            width={80}
            height={24}
            alt="Fylo Logo"
            priority
          />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="#">
            <a>О нас</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Контакты</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>NFT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
