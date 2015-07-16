/**
 * @class Heading
 * @constructor
 * @extends TextComponent
 * @param {string} id
 * @param {number} headerLevel
 */
function Heading(id, headerLevel) {
    TextComponent.call(this, id);
    this._headerLevel = headerLevel;
}

Heading.prototype = Object.create(TextComponent.prototype);
Heading.prototype.constructor = Heading;

Heading.prototype.create = function() {
    this._html = '<h' + this._headerLevel
            + ' id="' + this._id + '"></h'
            + this._headerLevel + '>';
};