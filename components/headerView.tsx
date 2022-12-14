import styles from '../styles/components/Header.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/img/mohaemookgi_logo.png';

const Header = () => {
  // transform 으로 내려오는 작업 해주기
  const [headerList, setHeaderList] = useState(['Home', 'Video', 'Recipe', 'About']);
  const [urlLink, setUrlLink] = useState(['/', '/video/all', '/recipe/all', '/about']);
  const [menuState, setMenuState] = useState(false);
  const hamburger = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const headerMove = () => {
    setMenuState(!menuState);
    console.log(overlay.current);
    if (menuState === true) {
      overlay.current!.style.transform = 'translateY(100%)';
      document.getElementById('toggle')?.classList.remove('active');
    } else {
      overlay.current!.style.transform = 'translateY(0%)';
      document.getElementById('toggle')?.classList.add('active');
    }
  }

  // url pathname이 바뀌면 header class remove 시켜주기
  useEffect(() => {
    overlay.current!.style.transform = 'translateY(100%)';
    document.getElementById('toggle')?.classList.remove('active');
    console.log(logo)
  }, [router.pathname]);
  return (
      <>
        <header className={styles.container} ref={ hamburger }>
          <div className={styles.header}>
            <Link href="/">
            <img className={styles.logo}
              src="/img/mohaemookgi_logo.png"
              width="100"
              height="100"
            />
            </Link>
            <div className={styles.button_container} id="toggle" onClick={() => {headerMove()}}>
              <span className={styles.top}></span>
              <span className={styles.middle}></span>
              <span className={styles.bottom}></span>
            </div>
          </div>
        <div className={styles.overlay} ref={overlay} id="overlay">
          <nav className={styles.overlayMenu}>
            <ul>
            {
              headerList && headerList.map((item, index) => {
                return (
                  <li key={index}><Link href={urlLink[index]}>{item}</Link></li>
                )
              })
            }    
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;