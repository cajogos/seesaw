/**
 * @class SEESAW.Button
 * @param {string} [id]
 * @param {string} [text]
 * @constructor
 * @extends SEESAW.Component
 */
SEESAW.Button = function (id, text)
{
    SEESAW.Component.call(this, id);

    this._text = (text !== undefined) ? text : this._id;
};

SEESAW.Button.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.Button.prototype.constructor = SEESAW.Button;

SEESAW.Button.prototype.create = function ()
{
    SEESAW.Component.prototype.create.call(this);

    var btnId = this._id + '_ss_btn';
    var html = '<button class="seesaw-btn seesaw-btn-default" id="' + btnId + '"></button>';
    this._div.html(html);

    this._btn = $('#' + btnId);
    this._btn.css({
        boxSizing: 'border-box',
        width:     '100%',
        height:    '100%'
    });

    this._drawText = true;

    var self = this;
    this._btn.on('click', function ()
    {
        self._handleClick();
    });
};

SEESAW.Button.prototype.draw = function ()
{
    SEESAW.Component.prototype.draw.call(this);

    if (this._drawText)
    {
        this._btn.html(this._text);
        this._drawText = false;
    }
};

/**
 * @param {string} text
 */
SEESAW.Button.prototype.setText = function (text)
{
    if (this._text !== text)
    {
        if (text === undefined)
        {
            text = '';
        }
        this._text = text;
        this._drawText = true;
    }
};

/**
 * @returns {string}
 */
SEESAW.Button.prototype.getText = function ()
{
    return this._text;
};

/**
 * The click() function must be called where the button is created
 *
 * @private
 */
SEESAW.Button.prototype._handleClick = function ()
{
    // If function exists, then execute the click
    if (this.click)
    {
        this.click();
    }
};