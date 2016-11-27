/**
 * @namespace SEESAW
 * @class SEESAW.RootComponent
 * @constructor
 * @extends SEESAW.Component
 */
SEESAW.RootComponent = function ()
{
    SEESAW.Component.call(this, 'seesaw-root');

    // Find the Seesaw zone
    var zone = $('#seesaw-zone');
    zone.html('<div id="' + this.getID() + '"></div>');
    this._div = $('#' + this.getID());

    this._div.css('width', zone.width());
    this._div.css('height', zone.height());
    this._div.css('position', 'relative');

    this._div.css('font-size', SEESAW.getConfig('fontSize'));
    this._div.css('background', SEESAW.getConfig('background'));

    this._div.css('box-sizing', 'border-box');

    if (SEESAW.DEVELOPMENT)
    {
        this._stats = new Stats();

        this._stats.setMode(0);
        this._stats.domElement.style.left = 'initial';
        this._stats.domElement.style.right = '0';
        this._stats.domElement.style.position = 'fixed';
        this._stats.domElement.style.zIndex = '1000';
        document.body.appendChild(this._stats.domElement);
    }

    this.setZ(0);

    this._run();
};

SEESAW.RootComponent.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.RootComponent.prototype.constructor = SEESAW.RootComponent;

SEESAW.RootComponent.prototype._run = function ()
{
    var root = this;
    window.requestAnimationFrame(function ()
    {
        if (SEESAW.DEVELOPMENT)
        {
            root._stats.begin();
        }
        root.draw();
        if (SEESAW.DEVELOPMENT)
        {
            root._stats.end();
        }
        root._run();
    });
};

