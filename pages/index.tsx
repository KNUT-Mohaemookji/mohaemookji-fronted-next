import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import MainText from '../components/logic/main/mainText';
import MainButton from '../components/view/main/mainButtonView';
import MainCarousel from '../components/view/main/mainCarousel';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="inner">
          <div className="main_left">
            <div className="text_contain">
              <MainText/>
            </div>
            <div className="button_contain">
              <MainButton/>
            </div>
            <span className="main_img"><Image
                src='/img/food1.png'
                alt="!"
                width="400"
                height="400"
            /></span>
          </div>
          <div className="main_right">
            <MainCarousel/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          .inner {
            width: 80%;
            margin: auto;  
            .text_contain{
              margin-top: 5%;              
            }
            .button_contain{
              margin-top: 5%;
            }
            .main_img{
              animation: main_img_animation 1s;
            }
          }
        }
        @keyframes main_img_animation{
          from {
            margin-left: -20%;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
