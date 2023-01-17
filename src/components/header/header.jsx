import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt="logo"
            src={"/images/amzbuyersguide.png"}
            width={150}
            height={10}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a> Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs" passHref>
                  <a> Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <a> About us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">
          Your friend in helping you navigate AMZ's wide selection!
        </p>
      </div>
    </header>
  );
};
