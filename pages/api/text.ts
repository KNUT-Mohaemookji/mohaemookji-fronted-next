import type { NextApiRequest, NextApiResponse } from 'next';
const comments = [
	{id: 1, text: 'comment 1'},
	{id: 2, text: 'comment 2'},
	{id: 3, text: 'comment 3'}
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(comments)
}