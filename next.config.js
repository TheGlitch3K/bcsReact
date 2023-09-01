module.exports = {
  publicRuntimeConfig: {
    staticFolder: '/public',
    apiPath: process.env.API_PATH,
    apiVersion: process.env.API_VERSION,
    lamdaAPIPath: process.env.LAMDA_API_PATH,
    utilitiesLambdaApiPath: process.env.UTILITIES_LAMDA_API_PATH,
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    shopifyPublicKey: process.env.SHOPIFY_PUBLIC_API_KEY,
    wcCallbackURL: process.env.WC_CALLBACK_URL,
    env: process.env.ENV,
    googlePlacesAPI: process.env.GOOGLE_PLACES_API,
    gaKey: process.env.GOOGLE_ANALYTICS,
    intercomKey: process.env.INTERCOM_KEY
  },
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  }
}