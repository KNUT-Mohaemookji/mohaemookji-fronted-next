import test from '../../../components/test';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    const responseData = await test();
    res.status(200).json({responseData});
}