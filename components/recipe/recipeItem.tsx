import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { recipeItemProps } from './types/recipe/interface';
import * as S from './style/recipeItem';
import { useRecipeModalData as RecipeModalDataHook } from './hooks/useRecipeModalData';

const recipeItem = ({data, clickModal}: recipeItemProps) => {
    return (
        <>
            <S.RecipeList>
                <S.RecipeMainImage src={data.ATT_FILE_NO_MK} alt="메인 이미지" />
                <S.RecipeContentContainer>
                    <S.RecipeTitle>{data.RCP_NM}</S.RecipeTitle>
                    { data.HASH_TAG && <S.HashTag>#{data.HASH_TAG}</S.HashTag> }
                    <S.IngredientTitle>요리에 필요한 재료</S.IngredientTitle>
                    <S.Ingredient>{data.RCP_PARTS_DTLS}</S.Ingredient>
                    <S.DetailButton
                        onClick={() => {clickModal(data)}}
                    >상세 정보를 보려면 클릭해주세요!</S.DetailButton>
                </S.RecipeContentContainer>
            </S.RecipeList>
            {/* <S.RecipeList key={index} style={{ backgroundImage: `url(${data.ATT_FILE_NO_MK})` }}
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
            </S.RecipeList> */}
            {/* <S.RecipeList key={index} style={{ backgroundImage: `url(${data.ATT_FILE_NO_MK})` }}
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
            </S.RecipeList> */}
        </>
    );
};

export default recipeItem;