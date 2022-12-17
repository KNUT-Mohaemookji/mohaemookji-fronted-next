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
        <div className="innner_line"/>
        <div className="inner">
          <div className="main_left">
            <div className="text_contain">
              <MainText/>
            </div>
            <div className="button_contain">
              <MainButton/>
            </div>
            {/* <div className="img_contain">
              <span style={{borderRadius: '50%'}} className="main_img"><Image
                  src='/img/cooking.jpeg'
                  alt="!"
                  width="400"
                  height="400"
                  // layout="fill"
                   objectFit="cover"
              /></span>
            </div> */}
            <div className="img_contain" style={{ borderRadius: '50%', overflow: 'hidden', width: '500px', height: '500px' }}>
              <Image
                src="..."
                objectFit="cover"
                width="500"
                height="500"
                placeholder="blur"
                blurDataURL='/img/cooking.jpeg'
                src='/img/cooking.jpeg'
              />
            </div>
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
          margin-top: 100px;
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
