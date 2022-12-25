import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    data?: string[],
    message: string
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    try{
        let categoryList = ['All', '간식', '운동식', '건강식', '일반식'];
        res.status(200).json({
            item: categoryList,
            message: 'Success'
        })
    } catch (error) {
        res.status(400).json({mesage: 'Failed'})
    }
}