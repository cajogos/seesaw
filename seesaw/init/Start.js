/**
 * This is the start component, the component where all the SEESAW web app will run.
 *
 * @class SEESAW.Start
 * @extends SEESAW.Component
 */
SEESAW.Start = function ()
{

    SEESAW.Component.call(this, 'seesaw-start');

    var zone = $('#seesaw-zone'); // Fetch the div ZONE
    zone.html('<div id="' + this._id + '"></div>');
    this._div = $('#' + this._id);
    this._div.css('width', zone.width());
    this._div.css('height', zone.height());

    this.setZ(0);

    this.setBackground('#EEE');

    this._stats = new Stats();
    this._stats.setMode(0);
    this._stats.domElement.style.top = '0';
    this._stats.domElement.style.position = 'absolute';
    this._stats.domElement.style.zIndex = '1000';
    document.body.appendChild(this._stats.domElement);

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
        self._stats.begin();

        self.draw();

        self._stats.end();
        self._run();
    });
};