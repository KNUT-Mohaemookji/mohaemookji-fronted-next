import React, { useState, useEffect } from 'react';

const RecipeListView = ({ recipeData, count }) => {
    const [getRecipeData, setRecipeData] = useState([]);
    useEffect(() => {
        setRecipeData(recipeData.COOKRCP01.row)
        console.log(getRecipeData);
        console.log(count);
        
    }, [getRecipeData, count]);
    return (
        <>
            <div className="recipelist_contain">
                <div className="inner">
                {
                    getRecipeData.map((data, index) => {
                        return (
                            <div className="recipelist" key={index} style={{backgroundImage: `url(${data.ATT_FILE_NO_MK})`}}>
                                <div className="black_image"/>
                                <div className="list_content">
                                    <div className="inner">
                                        <p className="food_name">{data.RCP_NM}</p>
                                        { data.HASH_TAG && <p className="hash_tag">#{data.HASH_TAG}</p> }
                                        {/* <br/> */}
                                        <p className="ingredient">{data.RCP_PARTS_DTLS}</p>
                                        <ul className="cooking_imgs">
                                        {
                                            [data.MANUAL_IMG01, data.MANUAL_IMG02, data.MANUAL_IMG03].map((item, index) => {
                                                return (
                                                    <li>
                                                        <img 
                                                        className="cooking_img"
                                                        src={item}
                                                        width="100"/>
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button className="more_button" onClick={() => {}}>더 보기</button>
                </div>
            </div>
            <style jsx>{`
                *{
                    list-style: none;
                }
                .recipelist_contain{
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    .inner{
                        display: flex;
                        margin: auto;
                        flex-wrap: wrap;
                        gap: 20px;
                        width: 80vw;
                        .recipelist{
                            position: relative;
                            width: 400px;
                            height: 250px;
                            border-radius: 20px;
                            background-repeat: no-repeat;
                            background-size: cover;
                            overflow: hidden;
                            cursor: pointer;
                            .black_image{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                background: rgba(0, 0, 0, .5);
                                border-radius: 20px;
                            }
                            .list_content{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                // border-radius: 20px;
                                background-color: #ECE8DD;
                                transition: .3s;
                                transform: translateY(190px);
                                .inner{
                                    width: 100%;
                                    height: 100%;
                                    padding: 0px 20px;
                                    .food_name{
                                        font-size: 20px;
                                        color: #333;
                                        font-weight: 700;
                                    }
                                    .hash_tag{
                                        font-size: 20px;
                                        font-weight: 700;
                                        color: #AD8E70;
                                    }
                                    .ingredient{
                                        height: 40px;
                                        font-size: 16px;
                                        font-weight: 600;
                                        color: #333;
                                        margin-top: -30px;
                                        padding-right: 30px;
                                        white-space: normal;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 2;
                                        -webkit-box-orient: vertical;
                                    }
                                    .cooking_imgs{
                                        margin-left: -60px;
                                        width: 100%;
                                        display: flex;
                                        justify-content: center;
                                        gap: 10px;
                                        margin-top: -30px;
                                        .cooking_img{
                                            border-radius: 10px;
                                        }
                                    }
                                }
                            }
                        }
                        .recipelist:hover {
                            .list_content {
                                transform: translateY(0);
                            }
                        }
                    }
                    .more_button{
                        width: 300px;
                        height: 50px;
                        color: #fff;
                        background-color: #A6BB8D;
                        border: 0;
                        border-radius: 10px;
                        margin: auto;
                        font-size: 18px;
                        font-weight: 700;
                    }
                }
            `}</style>
        </>
    );
};

export default RecipeListView;