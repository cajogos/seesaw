function Element(id) {
    this.__id = id;
    // Location
    this._x = 0;
    this._y = 0;
    this._z = 0;
    // Dimensions
    this._width = 0;
    this._height = 0;
    this._minWidth = 0;
    this._minHeight = 0;
    // TODO: this._maxWidth = 0;  *COMMENT: WHAT COULD BE THE MAX?
    // TODO: this._maxHeight = 0;
    // Styling
    this._padding = 10;
    this._margin = 5;
    this._fontSize = 12;
    this._fontFamily = 'sans-serif';


    console.log('*** Element ***', this);
}

/* GLOBAL VARIABLES */


// Set bounds of an element
Element.prototype.setBounds = function (x, y, width, height) {
    // Make values whole numbers
    x = Math.floor(x);
    y = Math.floor(y);
    width = Math.floor(width);
    height = Math.floor(height);

    if (width < this._minWidth) width = this._minWidth;
    // TODO: if (width > this._maxWidth) width = this._maxWidth;

    if (height < this._minHeight) height = this._minHeight;
    // TODO: if (height > this._maxHeight) height = this._maxHeight;

    // Only apply changes if needed
    if (x !== this._x || y !== this._y || width !== this._width || height !== this._height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        // TODO: Draw bounds (this._drawBounds = true)
        console.log('*** Bounds Changed ***', this, x, y, width, height);
        return true;
    }
    return false;
};
Element.prototype.setLocation = function (x, y) {
    this.setBounds(x, y, this._width, this._height);
};

Element.prototype.setSize = function (width, height) {
    this.setBounds(this._x, this._y, width, height);
};
