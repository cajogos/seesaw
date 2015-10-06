/**
 * @class SEESAW.Video
 * @param {string} [id]
 * @param {string} [src]
 * @constructor
 * @extends SEESAW.Component
 */
SEESAW.Video = function (id, src)
{
    SEESAW.Component.call(this, id);

    this._src = src;
};

SEESAW.Video.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.Video.prototype.constructor = SEESAW.Video;

SEESAW.Video.prototype.create = function ()
{
    SEESAW.Component.prototype.create.call(this);

    var videoId = this._id + '_ss_video';
    var html = '<video id="' + videoId + '"></video>';
    this._div.html(html);

    this._video = $('#' + videoId);
    this._drawDimensions = true;

};

SEESAW.Video.prototype.draw = function ()
{
    SEESAW.Component.prototype.draw.call(this);

    if (this._drawDimensions)
    {
        this._video.width(this._width);
        this._video.height(this._height);
        this._drawDimensions = false;
    }
};