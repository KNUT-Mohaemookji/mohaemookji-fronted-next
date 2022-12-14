// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const getVideoData = await(await axios.get(`${process.env.NEXT_PUBLIC_API_PATH}/cooking-video`)).data;
  res.status(200).json({
    data: getVideoData
  })
}