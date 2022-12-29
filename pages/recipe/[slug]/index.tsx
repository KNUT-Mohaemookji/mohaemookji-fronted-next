import React, { useEffect } from 'react';

export async function getServerSideProps() {
    // const router = useRouter();
    // const {slug} = router.query;

    const recipeData: unknown = await(
        await fetch('https://openapi.foodsafetykorea.go.kr/api/360e29b086e142e4856b/COOKRCP01/json/1/10')
    ).json();

    return {
        props: {
            recipeData,
        }
    }
}
const Resipe = ({recipeData}) => {
    useEffect(() => {
        console.log(recipeData.COOKRCP01.row);
        
    }, []);
    return (
        <>
            레시피  
        </>
    );
};

export default Resipe;