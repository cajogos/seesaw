/**
 * @class Button
 * @constructor
 * @extends Component
 * @param {string} id
 */
function Button(id, type, size) {
    Component.call(this, id);
    
    this._text = undefined;
    this._type = (type === undefined) ? Button.STYLES.DEFAULT : type;
    this._size = (size === undefined) ? '' : size;
}

Button.prototype = Object.create(Component.prototype);
Button.prototype.constructor = Button;

Button.STYLES = {
    DEFAULT : 'btn-default',
    PRIMARY : 'btn-primary',
    SUCCESS : 'btn-success',
    INFO : 'btn-info',
    WARNING : 'btn-warning',
    DANGER : 'btn-danger'
};

Button.SIZES = {
    LARGE : 'btn-lg',
    SMALL : 'btn-sm',
    EXTRA_SMALL : 'btn-xs'
};

Button.prototype.create = function() {
    this._html = '<button class="btn '+ this._type 
            + ' ' + this._size + '" id="' + this._id + '"></button>';
};

Button.prototype.setText = function(text) {
    if (this._text !== text) {
        this._text = text;
        $('#' + this._id).html(this._text);
    }
};