/**
 * @class TextComponent
 * @constructor
 * @extends Component
 * @param {string} id
 */
function TextComponent(id) {
    Component.call(this, id);
    
    this._text = undefined;
    this._fontSize = undefined;
    this._fontFamily = undefined;
    this._fontWeight = undefined;
    this._textDecoration = undefined;
}

TextComponent.prototype = Object.create(Component.prototype);
TextComponent.prototype.constructor = TextComponent;

/**
 * @param {string} text
 */
TextComponent.prototype.setText = function(text) {
    this._text = text;
    $('#' + this._id).html(this._text);
};

/**
 * @param {number} fontSize
 */
TextComponent.prototype.setFontSize = function(fontSize) {
    if (this._fontSize !== fontSize) {
        this._fontSize = fontSize;
        $('#' + this._id).css('font-size', this._fontSize);
    }
};