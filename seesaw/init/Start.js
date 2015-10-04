/**
 * This is the start component, the component where all the SEESAW web app will run.
 *
 * @class SEESAW.Start
 * @constructor
 * @config {Object} [config]
 * @extends SEESAW.Component
 */
SEESAW.Start = function (config)
{
    SEESAW.Component.call(this, 'seesaw-start');

    if (config === undefined)
    {
        config = SEESAW.DEFAULT_CONFIG;
    }
    this._config = config;

    var zone = $('#seesaw-zone'); // Fetch the div ZONE
    zone.html('<div id="' + this._id + '"></div>');
    this._div = $('#' + this._id);
    this._div.css('width', zone.width());
    this._div.css('height', zone.height());

    // Set configuration
    this._div.css('font-size', this._getConfig('fontSize'));
    this._div.css('background', this._getConfig('background'));

    this.setZ(0);

    if (SEESAW.DEVELOPMENT)
    {
        this._stats = new Stats();

        this._stats.setMode(0);
        this._stats.domElement.style.top = '0';
        this._stats.domElement.style.position = 'absolute';
        this._stats.domElement.style.zIndex = '1000';
        document.body.appendChild(this._stats.domElement);
    }

    this._run();
};

SEESAW.Start.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.Start.prototype.constructor = SEESAW.Start;

/**
 * @private
 */
SEESAW.Start.prototype._run = function ()
{
    var self = this;
    window.requestAnimationFrame(function ()
    {
        if (SEESAW.DEVELOPMENT)
        {
            self._stats.begin();
        }

        self.draw();
        if (SEESAW.DEVELOPMENT)
        {
            self._stats.end();
        }
        self._run();
    });
};

/**
 * @param {string} configItem
 * @returns {*}
 * @private
 */
SEESAW.Start.prototype._getConfig = function (configItem)
{
    try
    {
        return this._config[configItem];
    }
    catch (error)
    {
        return SEESAW.DEFAULT_CONFIG[configItem];
    }
};