/**
 * @class Paragraph
 * @constructor
 * @extends Component
 * @param {string} id
 */
function Paragraph(id) {
    Component.call(this, id);
    
    this._text = undefined;
    this._fontSize = undefined;
}

Paragraph.prototype = Object.create(Component.prototype);
Paragraph.prototype.constructor = Paragraph;

Paragraph.prototype.create = function() {
    this._html = '<p id="' + this._id + '"></p>';
};

Paragraph.prototype.setText = function(text) {
    this._text = text;
    $('#' + this._id).html(this._text);
};

Paragraph.prototype.setFontSize = function(fontSize) {
    if (this._fontSize !== fontSize) {
        this._fontSize = fontSize;
        $('#' + this._id).css('font-size', this._fontSize);
    }
};