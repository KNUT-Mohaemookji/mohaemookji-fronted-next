import { recipeItemProps } from './types/recipe/interface';
import * as S from './style/recipeItem';

const recipeItem = ({data, clickModal}: recipeItemProps) => {
    
    return (
        <>
            <S.RecipeItemContain>
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
            </S.RecipeItemContain>
        </>
    );
};

export default recipeItem;