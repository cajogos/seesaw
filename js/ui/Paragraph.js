/**
 * @class Paragraph
 * @constructor
 * @extends TextComponent
 * @param {string} id
 */
function Paragraph(id) {
    TextComponent.call(this, id);
    
    this._text = undefined;
    this._fontSize = undefined;
}

Paragraph.prototype = Object.create(TextComponent.prototype);
Paragraph.prototype.constructor = Paragraph;

Paragraph.prototype.create = function() {
    this._html = '<p id="' + this._id + '"></p>';
};