import useKakaomapConnect from './hooks/useKakaomapConnect';

const Mart = () => {
    useKakaomapConnect();
    return (
        <>
            <div>
                <h2>마트위치 가져오기</h2>
                <div id="map" style={{ width:"600px", height:"350px"}}></div>
            </div>
        </>
    );
};

export default Mart;