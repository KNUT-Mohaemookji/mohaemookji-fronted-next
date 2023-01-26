import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/recipe';
import { FiX } from 'react-icons/fi';
import { IRecipeData } from './types/interface';
import Image from 'next/image';
import Mark from './mart';
import { useRecipeModalState } from './hooks/useRecipeModalData';

const RecipeModal = ({ clickRecipeData }: IRecipeData) => {
    const dispatch = useDispatch();
    const {menualImg, menual, recipeModalData} = useRecipeModalState(clickRecipeData);
    return (
        <>
            <div className="modal_content" >
                <div className="modal_inner">
                    <p className="close" onClick={() => { dispatch(actions.recipe_modal()) }}><FiX/></p>
                    <p className="recipe_name">{ recipeModalData.RCP_NM} ({recipeModalData.RCP_PAT2})</p>
                    <div className="recipe_details">
                        <p className="recipe_details_title">요리에 필요한 재료</p>
                        <p className="recipe_dtails_content">{ recipeModalData.RCP_PARTS_DTLS } </p>
                    </div>

                    <ul className="menuals">
                    {
                        menualImg.map((item, index) => {
                            return (
                                <li className="menual" key={index}>
                                    <Image className="menual_img" src={ item }
                                        width="250"
                                        height="150"
                                    alt="요리"/>
                                    <p className="menual_content">{menual[index]}</p>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <div className="mart_contain">
                        <Mark/>
                    </div>
                </div>
            </div>
            <style jsx>{`
            *{
                list-style: none;
            }
            .modal_content {
                position: relative;
                text-align: center;
                overflow-y: scroll;
                width: 80vw;
                height: 80vh;
                background-color: rgb(249, 249, 249);
                box-shadow: 2px 3px 3px 1px rgb(203, 209, 209);
                border: 0;
                border-radius: 20px;
                .modal_inner{
                    position: absolute;
                    width: 50%;
                    margin: auto;
                    right: 0;
                    left: 0;
                    .close {
                        position: absolute;
                        cursor: pointer;
                        right: 0;
                        font-size: 30px;
                        font-weight: 700;
                    }
                    .recipe_name{
                        font-size: 30px;
                        font-weight: 700;
                        color: #333;
                    }
                    .recipe_details{
                        .recipe_details_title{
                            font-size: 25px;
                            font-weight: 700;
                            color: #333;
                        }
                        .recipe_dtails_content{
                            font-size: 18px;
                            font-weight: 600;
                            color: grey;
                        }
                    }
                    .menuals{
                            .menual{
                                .menual_img{
                                    image-rendering: -webkit-optimize-contrast;
                                    backface-visibility: hidden;
                                    transform: translateZ(0);
                                    border-radius: 20px;
                                }
                                .menual_content{
                                    font-size: 18px;
                                    font-weight: 600;
                                    color: #333;
                                }
                            }
                        }
                }
            }
            `}</style>
        </>
    );
};

export default RecipeModal;