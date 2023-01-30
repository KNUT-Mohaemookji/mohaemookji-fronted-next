import useKakaomapConnect from './hooks/useKakaomapConnect';

const Mart = () => {
    useKakaomapConnect();
    return (
        <>
            <div className="kakaomap_contain">
                <h2>마트위치 가져오기</h2>
                <div id="map" style={{ width:"600px", height:"350px"}}></div>
            </div>
            <style jsx>{`
                .kakaomap_contain{
                    height: 500px;
                    #map{
                        margin: 50px auto;
                        border-radius: 20px;
                    }
                }
            `}</style>
        </>
    );
};

export default Mart;