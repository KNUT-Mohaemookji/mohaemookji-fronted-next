import MainText from '../components/logic/main/section1/mainText';
import MainButton from '../components/view/main/section1/mainButtonView';
import MainCarousel from '../components/view/main/section1/mainCarousel';
import MainNotice from '../components/view/main/section1/mainNotice';
import RoundExplanation from '../components/view/main/section2/roundExplanation';

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="section1">
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
        </section>
        <section className="section2">
          <div className="inner">
            <RoundExplanation/>
          </div>
        </section>
      </div>
      <style jsx>{`
        .inner {
          width: 80%;
          margin: 5% auto;  
          display: flex;
          justify-content: space-between;
        }
        .container {
          position: relative;
          width: 100vw;
          // height: 200vh;
          background-color: #f8f9fa;
          overflow: hidden;
          .section1{
            height: 100vh;
            overflow: hidden;
            .innner_line{
              height: 1px;
            }
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
          .section2 {
            position: relative;
            width: 100vw;
            height: 200vh;
          }
        }
      `}</style>
    </>
  )
}
