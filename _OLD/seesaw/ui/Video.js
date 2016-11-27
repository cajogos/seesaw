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

    this._source = src;
};

SEESAW.Video.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.Video.prototype.constructor = SEESAW.Video;

SEESAW.Video.prototype.create = function ()
{
    SEESAW.Component.prototype.create.call(this);

    var videoId = this._id + '_ss_video';
    var html = '<video id="' + videoId + '" src="" controls></video>';
    this._div.html(html);

    this._video = $('#' + videoId);
    this._video.css({
        width:  '100%',
        height: '100%'
    });

    this._videoDOM = document.getElementById(videoId);
};

SEESAW.Video.prototype.draw = function ()
{
    SEESAW.Component.prototype.draw.call(this);

    if (this._drawSource)
    {
        this._video.attr('src', this._source);
        this._drawSource = false;
    }
    if (this._drawSeekTime)
    {
        this._videoDOM.currentTime = this._currentTime;
        this._drawSeekTime = false;
    }
};

/**
 * @param {number} time
 */
SEESAW.Video.prototype.setCurrentTime = function (time)
{
    this._currentTime = time;
    this._drawSeekTime = true;
};

/**
 * @param {string} source
 */
SEESAW.Video.prototype.setSource = function (source)
{
    if (this._source !== source)
    {
        this._source = source;
        this._drawSource = true;
    }
};

/**
 * @returns {string}
 */
SEESAW.Video.prototype.getSource = function ()
{
    return this._source;
};

SEESAW.Video.prototype.play = function ()
{
    if (this._source !== undefined)
    {
        this._videoDOM.play();
    }
};

SEESAW.Video.prototype.pause = function ()
{
    if (this._source !== undefined)
    {
        this._videoDOM.pause();
    }
};

SEESAW.Video.prototype.stop = function ()
{
    if (this._source !== undefined)
    {
        this.setCurrentTime(0);
        this._videoDOM.pause();
    }
};