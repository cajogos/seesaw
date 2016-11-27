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

    this.setZ(0);
};

SEESAW.RootComponent.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.RootComponent.prototype.constructor = SEESAW.RootComponent;

