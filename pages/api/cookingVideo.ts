// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const getData = await(await axios.get('http://127.0.0.1:16261/cooking-video')).data;
  res.status(200).json({
    data: getData
  })
}