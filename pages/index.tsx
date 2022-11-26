import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import MainText from './components/logic/mainText';

// export async function getServerSideProps() {
//   const message: any = await axios
//     .request({
//       url: 'http://localhost:16261/cooking-channel/getData',
//       method: "GET"
//     }).then(res => {
//       console.log(res);
//     }).catch(err => {
//       console.log(err);
//     })
//     return {
//       props: {message}
//     }
// }

export default function Home() {
  useEffect(() => {
    axios.get('http://localhost:16261/cooking-channel/getData').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }, []);
  return (
    <>
      <MainText/>
    </>
  )
}
