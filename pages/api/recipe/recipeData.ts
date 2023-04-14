import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    let response = await (await axios.get('https://openapi.foodsafetykorea.go.kr/api/sample/COOKRCP01/json/1/5')).data;
    
    res.status(200).json({response});
}