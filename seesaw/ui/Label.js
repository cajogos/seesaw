/**
 * @class SEESAW.Label
 * @param {string} [id]
 * @param {string} [text]
 * @constructor
 */
SEESAW.Label = function (id, text)
{
    SEESAW.Component.call(this, id);

    this._text = (text !== undefined) ? text : this._id;
};

SEESAW.Label.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.Label.prototype.constructor = SEESAW.Label;

SEESAW.Label.prototype.create = function ()
{
    SEESAW.Component.prototype.create.call(this);

    var spanId = this._id + '_ss_span';
    var html = '<span class="seesaw-label" id="' + spanId + '"></span>';
    this._div.html(html);

    this._span = $('#' + spanId);
    this._drawText = true;
};

SEESAW.Label.prototype.draw = function ()
{
    SEESAW.Component.prototype.draw.call(this);

    if (this._drawText)
    {
        this._span.html(this._text);
        this._drawText = false;
    }
};

/**
 * @param {string} text
 */
SEESAW.Label.prototype.setText = function (text)
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
SEESAW.Label.prototype.getText = function ()
{
    return this._text;
};