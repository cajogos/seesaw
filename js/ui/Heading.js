/**
 * @class Heading
 * @constructor
 * @extends Component
 * @param {string} id
 * @param {number} headerLevel
 */
function Heading(id, headerLevel) {
    Component.call(this, id);
    this._id = id;
    this._headerLevel = headerLevel;
}

Heading.prototype = Object.create(Component.prototype);
Heading.prototype.constructor = Heading;

Heading.prototype.create = function() {
    this._html = '<h' + this._headerLevel
            + ' id="' + this._id + '"></h'
            + this._headerLevel + '>';
};

Heading.prototype.setText = function(text) {
    this._text = text;
    $('#' + this._id).html(this._text);
};