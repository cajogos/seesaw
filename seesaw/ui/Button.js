/**
 * @class SEESAW.Button
 * @param {string} [id]
 * @constructor
 * @extends SEESAW.Component
 */
SEESAW.Button = function (id)
{
    SEESAW.Component.call(this, id);
};

SEESAW.Button.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.Button.prototype.constructor = SEESAW.Button;

SEESAW.Button.prototype.create = function ()
{
    SEESAW.Component.prototype.create.call(this);

    var btnId = this._id + '-btn';
    var html = '<button class="seesaw-btn default" id="' + btnId + '">Hi</button>';
    this._div.html(html);

    this._btn = $('#' + btnId);

    this._btn.width(this._width);
    this._btn.height(this._height);

    var self = this;

    this._btn.on('click', function ()
    {
        self._handleClick();
    });
};

/**
 * The click() function must be called where the button is created
 *
 * @private
 */
SEESAW.Button.prototype._handleClick = function ()
{
    if (this.click)
    {
        this.click();
    }
};