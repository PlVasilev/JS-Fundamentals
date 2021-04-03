let prodavachnikConstants = (function () {

    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_HkRygNDVX';
    const APP_SECRET = 'a85e18a768f84a888bc1088c656d34b0';
    const BASIC_AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
    const ADS_PER_PAGE = 10;
    const PADDING = 10;

    return {
        BASE_URL,
        APP_KEY,
        APP_SECRET,
        BASIC_AUTH_HEADERS,
        ADS_PER_PAGE,
        PADDING,
    }
})();
