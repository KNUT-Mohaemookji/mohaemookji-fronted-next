import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/recipe';
import { FiX } from 'react-icons/fi';
import { IRecipeData } from './types/interface';
import Image from 'next/image';
import Mart from './mart';
import { useRecipeModalData } from './hooks/useRecipeModalData';
import { useRecipeVideoData } from './hooks/useRecipeVideoData';
import * as S from './style/recipeModal';

// ㅠㅜ 결국.. any
const RecipeModal = ({ clickRecipeData }: IRecipeData | any) => {
    const dispatch = useDispatch();
    const { menualImg, menual, recipeModalData } = useRecipeModalData(clickRecipeData);
    const { videoData } = useRecipeVideoData();
    useEffect(() => {
        menualImg.sort();
        menual.sort();
    }, [menual, menualImg, recipeModalData]);
    return (
        <>
            <S.ModalContent>
                <S.ModalInner>
                    <S.Close onClick={() => { dispatch(actions.recipe_modal()) }}><FiX/></S.Close>
                    <S.RecipeName>{ clickRecipeData.RCP_NM} ({clickRecipeData.RCP_PAT2})</S.RecipeName>
                    <div className="recipe_details">
                        <S.RecipeDetailsTitle>요리에 필요한 재료</S.RecipeDetailsTitle>
                        <S.RecipeDetailsContent>{ clickRecipeData.RCP_PARTS_DTLS } </S.RecipeDetailsContent>
                    </div>

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
                    <S.RecommendationVideoTitle>추천 영상</S.RecommendationVideoTitle>
                    <S.RecommendationVideoContain>
                        <S.RecommendationVideos>
                        {
                            ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((video, index) => {
                                return (
                                    <S.RecommendationVideo key={index}>{video}</S.RecommendationVideo>
                                )
                            })
                        }
                        </S.RecommendationVideos>
                    </S.RecommendationVideoContain>
                    {/* <S.MartContain>
                        <Mart/>
                    </S.MartContain> */}
                </S.ModalInner>
            </S.ModalContent>
        </>
    );
};

export default RecipeModal;