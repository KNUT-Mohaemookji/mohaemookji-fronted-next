import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <><Html>
                <Head>
                <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&libraries=services,clusterer&autoload=false`} async></script>
            </Head><body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
            </>
        )
    }
}

export default MyDocument;