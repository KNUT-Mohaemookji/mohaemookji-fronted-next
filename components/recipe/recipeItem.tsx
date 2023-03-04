import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { recipeItemProps } from './types/interface';
import * as S from './style/recipeItem';
import { useRecipeModalState } from './hooks/useRecipeModalData';

const recipeItem = ({data, index, clickModal}: recipeItemProps) => {
    const { menualImg } = useRecipeModalState(data);
    return (
        <>
            <S.RecipeList key={index} style={{ backgroundImage: `url(${data.ATT_FILE_NO_MK})` }}
                onClick={() => {clickModal(data)}}>
                <S.BlackImage/>
                <S.ListContent>
                    <S.ContentInner>
                        <S.FoodName>{data.RCP_NM}</S.FoodName>
                        { data.HASH_TAG && <S.HashTag>#{data.HASH_TAG}</S.HashTag> }
                        <S.Ingredient>{data.RCP_PARTS_DTLS}</S.Ingredient>
                        <S.CookingImgs>
                        {
                            menualImg.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <S.CookingImg>
                                            <Image 
                                            src={item}
                                            width="100"
                                            height="70"
                                            alt="요리 순서 이미지"/>
                                        </S.CookingImg>
                                    </li>
                                )
                            })
                        }
                        </S.CookingImgs>
                    </S.ContentInner>
                </S.ListContent>
            </S.RecipeList>
        </>
    );
};

export default recipeItem;