import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import MainText from '../components/logic/main/mainText';
import MainButton from '../components/view/main/mainButtonView';
import MainCarousel from '../components/view/main/mainCarousel';
import MainNotice from '../components/view/main/mainNotice';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="innner_line"/>
        <div className="inner">
          <div className="main_left">
            <div className="text_contain">
              <MainText/>
            </div>
            <div className="button_contain">
              <MainButton/>
            </div>
            <MainNotice/>
          </div>
          <div className="main_right">
            <MainCarousel/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background-color: #f8f9fa;
          overflow: hidden;
          .innner_line{
            height: 1px;
          }
          .inner {
            width: 80%;
            margin: 5% auto;  
            display: flex;
            justify-content: space-between;
            .text_contain{
              margin-top: 5%;              
            }
            .button_contain{
              margin-top: 15%;
            }
            .img_contain{
              position: absolute;
              left: 0;
              top: 50%;
              animation: main_img_animation 1s;
            }
          }
        }
      `}</style>
    </>
  )
}
