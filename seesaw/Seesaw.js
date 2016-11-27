/**
 * @namespace SEESAW
 */
var SEESAW = {
    rootComponent: undefined,
    components: [],
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
 * @returns {undefined|SEESAW.RootComponent}
 */
SEESAW.getRoot = function()
{
    if (typeof SEESAW.rootComponent === 'undefined')
    {
        SEESAW.rootComponent = new SEESAW.RootComponent(SEESAW.userConfig);
    }
    return SEESAW.rootComponent;
};

/**
 * @param {Object} userConfig
 */
SEESAW.setUserConfig = function(userConfig)
{
    SEESAW.userConfig = userConfig;
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

/**
 * @param {SEESAW.Component} component
 */
SEESAW.addComponent = function (component)
{
    if (component instanceof SEESAW.Component)
    {
        SEESAW.components.push(component);
    }
};