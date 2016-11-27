/**
 * @namespace SEESAW
 */
var SEESAW = {
    userConfig: {}
};

SEESAW.createdAt = Date.now();

// True for enable debugging features
SEESAW.DEVELOPMENT = true;

SEESAW.DEFAULT_CONFIG = {
    fontSize:   '12px',
    background: '#CCC'
};

/**
 * @param {string} key
 */
SEESAW.getConfig = function (key)
{
    if (typeof SEESAW.userConfig[key] === 'undefined')
    {
        return SEESAW.DEFAULT_CONFIG[key];
    }
    return SEESAW.userConfig[key];
};