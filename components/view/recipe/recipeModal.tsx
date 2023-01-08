import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, RECIPE_MODAL } from '../../../store/reducers/recipe';
import { FiX } from 'react-icons/fi';

interface RecipeModalProps {
    clickRecipeData: React.SetStateAction<{}>
}

const RecipeModal = ({ clickRecipeData }: RecipeModalProps) => {
    const state =  useSelector((state: RootState) => state.recipe);
    const dispatch = useDispatch();
    const [menual, setMenual] = useState([]);
    const [menualImg, setMenualImg] = useState([]);
    useEffect(() => {   
        // 작업 할 부분
        // for (let i = 0; i < 20; i++){

        // }
        console.log(state.recipeState);
        
    }, [clickRecipeData]);
    return (
        <>
            <div className="modal_content" style={{display: 'none'}}>
                <div className="modal_inner">
                    <p className="close" onClick={() => { dispatch(actions.recipe_modal()) }}><FiX/></p>
                    <p className="recipe_name">요리이름</p>
                    <p className="recipe_dtls">재료</p>
                    <ul className="menuals">
                    {
                        [1, 2, 3].map((item, index) => {
                            return (
                                <li className="menual" key={index}>
                                    <div className="menual_img">{item} 메뉴얼 img</div>
                                    <p className="menual_content">{item} 메뉴얼 text</p>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <div>
                        지도 컴포넌트 넣기
                    </div>
                </div>
            </div>
            <style jsx>{`
            *{
                list-style: none;
            }
            .modal_content {
                position: relative;
                width: 80vw;
                height: 80vh;
                background-color: #333;
                border: 0;
                border-radius: 20px;
                .modal_inner{
                    position: absolute;
                    width: 80%;
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
                }
            }
            `}</style>
        </>
    );
};

export default RecipeModal;