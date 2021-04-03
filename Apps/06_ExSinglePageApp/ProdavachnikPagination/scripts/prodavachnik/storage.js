let storageFunctions = (function () {

    // Save Auth Locally
    function saveAuthLocally(userInfo) {
        localStorage.setItem('userId', userInfo._id);
        localStorage.setItem('username', userInfo.username);
        localStorage.setItem('authToken', userInfo._kmd.authtoken);
    }

    // Clear Auth Locally
    function clearAuthLocally() {
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('authToken');
    }

    // Get items...
    function userId() {
        return localStorage.getItem('userId');
    }

    function username() {
        return localStorage.getItem('username');
    }

    function authToken() {
        return localStorage.getItem('authToken');
    }

    function userAuthHeaders() {
        return {Authorization: 'Kinvey ' + authToken()};
    }

    return {
        saveAuthLocally,
        clearAuthLocally,
        userId,
        username,
        authToken,
        userAuthHeaders,
    }
})();
