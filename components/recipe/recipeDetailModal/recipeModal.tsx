import React, { useEffect } from 'react';
import Image from 'next/image';
import * as S from '../style/recipeAndVideoModal';
import { IRecipeDataList } from '../types/recipe/interface';
import { useRecipeModalData } from '../hooks/useRecipeModalData';

const RecipeModal = ({clickRecipeData}: IRecipeDataList) => {
    const { menualImg, menual, recipeModalData } = useRecipeModalData(clickRecipeData);
    useEffect(() => {
        menualImg.sort();
        menual.sort();
    }, [menual, menualImg, recipeModalData]);
    return (
        <>
            <S.RecipeName>{ clickRecipeData.RCP_NM} ({clickRecipeData.RCP_PAT2})</S.RecipeName>
            <S.Recipe_details>
                <S.RecipeDetailsTitle>요리에 필요한 재료</S.RecipeDetailsTitle>
                <S.RecipeDetailsContent>{ clickRecipeData.RCP_PARTS_DTLS } </S.RecipeDetailsContent>
            </S.Recipe_details>

            <S.Menuals>
            {
                menualImg && menualImg.sort().map((item, index) => {
                    return (
                        <S.Menual key={index}>
                            <S.MenualImg>
                                <Image src={ item }
                                    width="250"
                                    height="150"
                                alt="레시피"/>
                            </S.MenualImg>
                            <S.MenualContent>{menual[index]}</S.MenualContent>
                        </S.Menual>
                    )
                })
            }
            </S.Menuals>   
        </>
    );
};

export default RecipeModal;