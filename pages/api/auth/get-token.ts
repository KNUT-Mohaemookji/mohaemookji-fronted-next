import type { NextApiRequest, NextApiResponse } from 'next';
import jwtDecode from 'jwt-decode';

async function getToken(credential: string){
    const decoded = jwtDecode(credential)
    try {
        console.log(decoded);
        return decoded;
    }catch (error) {
        console.error(error);
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const {credential} = req.query;
    try{
        const products = await getToken(String(credential));
        res.status(200).json({items: products, message: 'Success'})
    }catch (error) {
        res.status(400).json({message: 'Failed'});
    }
}