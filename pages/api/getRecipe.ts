// api이름 https://openapi.foodsafetykorea.go.kr/api/360e29b086e142e4856b/COOKRCP01/json/1/10
import type { NextApiRequest, NextApiResponse } from 'next';
import { RecipeApiUrl } from "../../utils/constants";
import {getRecipeData} from '../../lib/api/getRecipe';

const recipeData = getRecipeData();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json(recipeData)
}