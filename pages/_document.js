import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html:
                                `window.intercomSettings = {
                                    app_id: "rtpe3sxm"
                                };`
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html:
                                `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/rtpe3sxm';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`
                        }}
                    />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" async>  </script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                    <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="style.css" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                    <link rel="stylesheet" href="/js/lightslider.css" />
                    <script src="js/Jquery.js" async></script>
                    <script src="/js/lightslider.js" async></script>
                    <script src="js/jquery-3.6.0.min.js" async></script>
                    <script src="js/slick.min.js" async></script>
                    <script src="js/script.js" async></script>
                    <script
  type="text/javascript"
  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
  async
/>
                </Head>
                <>
                    <Main />
                    <NextScript />
                </>


            </Html>
        )
    }
}