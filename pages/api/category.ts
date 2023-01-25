import type { NextApiRequest, NextApiResponse } from 'next';
import { categoryData } from '../../components/video/types/interface';

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<categoryData>
) {
    try{
        let categoryList = ['all', '간식', '운동식', '건강식', '일반식'];
        res.status(200).json({
            item: categoryList,
            message: 'Success'
        })
    } catch (error) {
        res.status(400).json({
            message: 'Failed',
            item: []
        })
    }
}