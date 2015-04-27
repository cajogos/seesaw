// TODO: Draw functions
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
    this._padding = [0, 0, 0, 0];
    this._margin = [0, 0, 0, 0];
    this._font = Font(10, 'Arial');

    console.log('*** Element ***', this); // TODO: Remove before production
}

Element.prototype.setFont = function (font) {
    if (font instanceof Font) {
        this._font = font;
    }
};

Element.prototype.getFont = function () {
    return this._font;
};

Element.prototype.setPadding = function (padding) {
    // Global padding
    if (padding.length === 1) this.padding = [padding[0], padding[0], padding[0], padding[0]];
    // Top-Bottom, Left-Right padding
    if (padding.length === 2) this.padding = [padding[0], padding[1], padding[0], padding[1]];
    // Specific padding
    if (padding.length === 4) this.padding = [padding[0], padding[1], padding[2], padding[3]];
};

Element.prototype.getPadding = function () {
    return this._padding;
};

Element.prototype.setMargin = function (margin) {
    // Global margin
    if (margin.length === 1) this.margin = [margin[0], margin[0], margin[0], margin[0]];
    // Top-Bottom, Left-Right margin
    if (margin.length === 2) this.margin = [margin[0], margin[1], margin[0], margin[1]];
    // Specific margin
    if (margin.length === 4) this.margin = [margin[0], margin[1], margin[2], margin[3]];
};

Element.prototype.getMargin = function () {
    return this._margin;
};


Element.prototype.getMinWidth = function () {
    return this._minWidth;
};
Element.prototype.setMinWidth = function (minWidth) {
    if (minWidth !== this._minWidth) {
        if (minWidth < 0) minWidth = 0;
        // TODO: if (minWidth > this._maxWidth) minWidth = this._maxWidth - 1;
        this._minWidth = minWidth;
    }
};
// TODO: Element.prototype.getMaxWidth = function () {return this._maxWidth;};
// TODO: Element.prototype.setMaxWidth = function() {};
Element.prototype.getMinHeight = function () {
    return this._minHeight;
};
Element.prototype.setMinHeight = function (minHeight) {
    if (minHeight !== this._minHeight) {
        if (minHeight < 0) minHeight = 0;
        // TODO: if (minHeight > this._maxHeight) minHeight = this._maxHeight - 1;
        this._minHeight = minHeight;
    }
};
// TODO: Element.prototype.getMaxHeight = function () {return this._maxHeight;};
// TODO: Element.prototype.setMaxHeight = function() {};

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
    }
};

Element.prototype.getX = function () {
    return this._x;
};
Element.prototype.setX = function (x) {
    if (this._x !== x) {
        this._x = x;
    }
};
Element.prototype.getY = function () {
    return this._y;
};
Element.prototype.setY = function (y) {
    if (this._y !== y) {
        this._y = y;
    }
};
Element.prototype.getZ = function () {
    return this._z;
};
Element.prototype.setZ = function (z) {
    if (this._z !== z) {
        this._z = z;
    }
};
Element.prototype.setLocation = function (x, y) {
    this.setBounds(x, y, this._width, this._height);
};
Element.prototype.setSize = function (width, height) {
    this.setBounds(this._x, this._y, width, height);
};

// Element.prototype.setFont = function() { };
Element.prototype.setSize = function (width, height) {
    this.setBounds(this._x, this._y, width, height);
};
