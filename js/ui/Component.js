/**
 * @class Component
 * @constructor
 * @param {string} id
 */
function Component(id) {
    if (id === undefined) {
        throw new Error('Components must have an ID.');
    }
    this._id = id;
    this._width = 0;
    this._height = 0;
    this._background = '';
    this._foregroundColor = '';
    this._html = '';
}

Component.prototype.getID = function() {
    return this._id;
};

/**
 * @param {number} width
 */
Component.prototype.setWidth = function(width) {
    if (this._width !== width) {
        this._width = width;
        $('#' + this._id).width(this._width);
    }
};

/**
 * @param {number} height
 */
Component.prototype.setHeight = function(height) {
    if (this._height !== height) {
        this._height = height;
        $('#' + this._id).height(this._height);
    }
};

Component.prototype.setBackground = function(background) {
    if (this._background !== background) {
        this._background = background;
        $('#' + this._id).css('background', this._background);
    }
}

Component.prototype.setForegroundColor = function(color) {
    if (this._foregroundColor !== color) {
        this._foregroundColor = color;
        $('#' + this._id).css('color', this._foregroundColor);
    }
};

/**
 * @returns {string}
 */
Component.prototype.getHTML = function() {
    return this._html;
};

/**
 * @param {string} html
 */
Component.prototype.setHTML = function(html) {
    this._html = html;
    $('#' + this._id).html(this._width);
};

Component.prototype.create = function() {
};