/**
 * @class Component
 * @constructor
 * @param {string} [id]
 */
function Component(id) {
    this._id = id;
    this._width = 0;
    this._height = 0;
}

/**
 * @param {number} width
 */
Component.prototype.setWidth = function(width) {
    this._width = width;
};

/**
 * @param {number} height
 */
Component.prototype.setHeight = function(height) {
    this._height = height;
};