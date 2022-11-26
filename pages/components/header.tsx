import styles from '../../styles/components/Header.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Header = () => {
  // transform 으로 내려오는 작업 해주기
  // const [headerState, setHeaderState] = useState(false);
  const [headerList, setHeaderList] = useState(['Home', 'About', 'Work', 'Contact']);
  const [menuState, setMenuState] = useState(false);
  const hamburger = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);

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
  return (
      <>
        <div className={styles.container} ref={ hamburger }>
          <div className={styles.button_container} id="toggle" onClick={() => {headerMove()}}>
            <span className={styles.top}></span>
            <span className={styles.middle}></span>
            <span className={styles.bottom}></span>
        </div>

        {/* {
          headerState === false
          ? null
          :  */}
          <div className={styles.overlay} ref={overlay} id="overlay">
            <nav className={styles.overlayMenu}>
              <ul>
              {
                headerList.map((item, index) => {
                  return (
                    <li key={index}><Link href={'#'}>{item}</Link></li>
                  )
                })
              }    
              </ul>
            </nav>
          </div>
        {/* } */}
        </div>
      </>
  );
};

export default Header;