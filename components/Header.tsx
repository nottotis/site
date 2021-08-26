import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  function showNav() {
    setOpen(!open);
  }
  return (
    <header>
      <div className="logo-small">
        <Link href="/">
          <a>
            <Image
              src="/fraktal-logo-small.svg"
              width={75}
              height={50}
              alt=""
            />
          </a>
        </Link>
      </div>
      <div onClick={showNav} className="hamburger">
        <Image src="/hamburger.svg" width={45} height={30} alt="" />
      </div>
      <nav className="main-nav">
        <Link href="https://blog.fraktal.io/dao/home">
          <a className="link-text">DAO</a>
        </Link>
        <Link href="">
          <a className="link-text">Marketplace</a>
        </Link>
        <Link href="https://medium.com/fraktalnft">
          <a className="link-text">Blog</a>
        </Link>
        <Link href="https://twitter.com/FraktalNFT">
          <a>
            <Image src="/Twitter/Original.svg" width={25} height={25} alt="" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/fraktal.io/">
          <a>
            <Image
              src="/Instagram/Original.svg"
              width={25}
              height={25}
              alt=""
            />
          </a>
        </Link>
        <Link href="https://discord.gg/2378rAGuAX">
          <a>
            <Image src="/Discord/Original.svg" width={25} height={25} alt="" />
          </a>
        </Link>

        {/*    <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><button>Enter Fraktal</button></Link> */}
      </nav>
      <nav className={`hamburger-nav ${open ? "" : "hide"}`}>
        <Link href="https://medium.com/fraktalnft">
          <a className="link-text">BLOG</a>
        </Link>
        <Link href="https://blog.fraktal.io/dao/home">
          <a className="link-text">DAO</a>
        </Link>
        {/*      <Link href='https://fraktal-front-git-web3-integration-sunguru98.vercel.app/'><a className='link-text'>Enter Fraktal</a></Link>*/}
        <div>
          <Link href="https://twitter.com/FraktalNFT">
            <a>
              <Image
                src="/Twitter/Original.svg"
                width={25}
                height={25}
                alt=""
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/fraktal.io/">
            <a>
              <Image
                src="/Instagram/Original.svg"
                width={25}
                height={25}
                alt=""
              />
            </a>
          </Link>
          <Link href="https://https://discord.gg/2378rAGuAX">
            <a>
              <Image
                src="/Discord/Original.svg"
                width={25}
                height={25}
                alt=""
              />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
