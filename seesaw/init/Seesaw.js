var SEESAW = {}; // Global variable for SEESAW
SEESAW.createdAt = Date.now();
SEESAW.client = {
    cookiesEnabled: navigator.cookieEnabled,
    language:       navigator.language,
    platform:       navigator.platform,
    product:        navigator.product,
    userAgent:      navigator.userAgent,
    vendor:         navigator.vendor
};

SEESAW.DEVELOPMENT = true; // Turn true to enable debugging features

SEESAW.DEFAULT_CONFIG = {
    fontSize: '12px',
    background: 'black'
};