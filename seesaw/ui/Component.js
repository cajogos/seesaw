/**
 * @class SEESAW.Component
 * @param {string} [id]
 * @constructor
 */
SEESAW.Component = function (id)
{
    this._id = (id === undefined) ? 'comp-' + SEESAW.COMPONENT_COUNT++ : id;

    // Dimension variables
    this._x = this._y = this._width = this._height = 0;
    this._z = undefined;

    // Style variables
    this._background = ''; // Transparent by default
    this._foreground = '#000000';

    this._fontFace = 'inherit';
    this._fontSize = 'inherit';
    this._fontWeight = 'inherit';

    this._parent = undefined;
    this._childComponents = [];
};

SEESAW.Component.prototype.constructor = SEESAW.Component;

SEESAW.COMPONENT_COUNT = 0;

/**
 * @returns {string}
 */
SEESAW.Component.prototype.getId = function ()
{
    return this._id;
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
SEESAW.Component.prototype.setBounds = function (x, y, width, height)
{
    if (this._x !== x)
    {
        this._x = x;
        this._drawPosition = true;
    }
    if (this._y !== y)
    {
        this._y = y;
        this._drawPosition = true;
    }
    if (this._width !== width)
    {
        this._width = width;
        this._drawSize = true;
    }
    if (this._height !== height)
    {
        this._height = height;
        this._drawSize = true;
    }
};

/**
 * @param {number} x
 */
SEESAW.Component.prototype.setX = function (x)
{
    this.setPosition(x, this._y);
};

/**
 * @returns {number}
 */
SEESAW.Component.prototype.getX = function ()
{
    return this._x;
};

/**
 * @param {number} y
 */
SEESAW.Component.prototype.setY = function (y)
{
    this.setPosition(this._x, y);
};

/**
 * @returns {number}
 */
SEESAW.Component.prototype.getY = function ()
{
    return this._y;
};

/**
 * @param {number} z
 */
SEESAW.Component.prototype.setZ = function (z)
{
    if (this._z !== z)
    {
        this._z = z;
        this._drawPosition = true;
    }
};

/**
 * @returns {undefined|number}
 */
SEESAW.Component.prototype.getZ = function ()
{
    return this._z;
};

/**
 * @param {number} x
 * @param {number} y
 */
SEESAW.Component.prototype.setPosition = function (x, y)
{
    this.setBounds(x, y, this._width, this._height);
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
SEESAW.Component.prototype.set3DPosition = function (x, y, z)
{
    this.setX(x);
    this.setY(y);
    this.setZ(z);
};

/**
 * @param {number} width
 */
SEESAW.Component.prototype.setWidth = function (width)
{
    this.setSize(width, this._height);
};

/**
 * @returns {number}
 */
SEESAW.Component.prototype.getWidth = function ()
{
    return this._width;
};

/**
 * @param {number} height
 */
SEESAW.Component.prototype.setHeight = function (height)
{
    this.setSize(this._width, height);
};

/**
 * @returns {number}
 */
SEESAW.Component.prototype.getHeight = function ()
{
    return this._height;
};

/**
 * @param {number} width
 * @param {number} height
 */
SEESAW.Component.prototype.setSize = function (width, height)
{
    this.setBounds(this._x, this._y, width, height);
};

/**
 * @param {string} background
 */
SEESAW.Component.prototype.setBackground = function (background)
{
    if (this._background !== background)
    {
        this._background = background;
        this._drawColors = true;
    }
};

/**
 * @returns {string}
 */
SEESAW.Component.prototype.getBackground = function ()
{
    return this._background;
};

/**
 * @param {string} foreground
 */
SEESAW.Component.prototype.setForeground = function (foreground)
{
    if (this._foreground !== foreground)
    {
        this._foreground = foreground;
        this._drawColors = true;
    }
};

/**
 * @returns {string}
 */
SEESAW.Component.prototype.getForeground = function ()
{
    return this._foreground;
};

// Font weight helper variables
SEESAW.Component.FONT_WEIGHT_THINNEST = 100;
SEESAW.Component.FONT_WEIGHT_THIN = 300;
SEESAW.Component.FONT_WEIGHT_NORMAL = 400;
SEESAW.Component.FONT_WEIGHT_BOLD = 700;
SEESAW.Component.FONT_WEIGHT_BOLDER = 900;

/**
 * @param {string} fontFace
 * @param {string|number} fontSize
 * @param {string|number} fontWeight
 */
SEESAW.Component.prototype.setFont = function (fontFace, fontSize, fontWeight)
{
    if (this._fontFace !== fontFace)
    {
        this._fontFace = fontFace;
        this._drawFont = true;
    }
    if (typeof fontSize === 'number')
    {
        fontSize += 'px';
    }
    if (this._fontSize !== fontSize)
    {
        this._fontSize = fontSize;
        this._drawFont = true;
    }
    if (this._fontWeight !== fontWeight)
    {
        this._fontWeight = fontWeight;
        this._drawFont = true;
    }
};

/**
 * @param {string} fontFace
 */
SEESAW.Component.prototype.setFontFace = function (fontFace)
{
    this.setFont(fontFace, this._fontSize, this._fontWeight);
};

/**
 * @returns {string}
 */
SEESAW.Component.prototype.getFontFace = function ()
{
    return this._fontFace;
};

/**
 * @param {string|number} fontSize
 */
SEESAW.Component.prototype.setFontSize = function (fontSize)
{
    this.setFont(this._fontFace, fontSize, this._fontWeight);
};

/**
 * @returns {string|number}
 */
SEESAW.Component.prototype.getFontSize = function ()
{
    return this._fontSize;
};

/**
 * @param {string|number} fontWeight
 */
SEESAW.Component.prototype.setFontWeight = function (fontWeight)
{
    this.setFont(this._fontFace, this._fontSize, fontWeight);
};

/**
 * @returns {string|number}
 */
SEESAW.Component.prototype.getFontWeight = function ()
{
    return this._fontWeight;
};

/**
 * @param {SEESAW.Component} child
 */
SEESAW.Component.prototype.addChild = function (child)
{
    this._childComponents.push(child);
    child.setParent(this);
    child._drawCreate = true;
};

/**
 * @param {SEESAW.Component} parent
 */
SEESAW.Component.prototype.setParent = function (parent)
{
    this._parent = parent;
};

/**
 * @returns {undefined|SEESAW.Component}
 */
SEESAW.Component.prototype.getParent = function ()
{
    if (this._parent !== undefined)
    {
        return this._parent;
    }
    throw Error('This component has no parent!');
};

/**
 * @returns {jQuery|HTMLElement}
 */
SEESAW.Component.prototype.getDiv = function ()
{
    return this._div;
};

SEESAW.Component.prototype.create = function ()
{
    var div = '<div id="' + this._id + '"></div>';
    this.getParent().getDiv().append(div);

    this._div = $('#' + this._id);
    this._div.css('position', 'relative');
    this._div.css('display', 'block');

    // If z-index has not yet been defined, then set it to be one above its parent
    if (this._z === undefined)
    {
        var zIndex = this.getParent().getZ() + 1;
        this.setZ(zIndex);
    }

    // Draw its colours
    this._drawColors = true;
};

SEESAW.Component.prototype.draw = function ()
{

    if (this._drawCreate)
    {
        this.create();
        this._drawCreate = false;
    }

    if (this._drawSize)
    {
        this._div.css('width', this._width);
        this._div.css('height', this._height);
        this._drawSize = false;
    }
    if (this._drawPosition)
    {
        this._div.css('top', this._y);
        this._div.css('left', this._x);
        this._div.css('z-index', this._z);
        this._drawPosition = false;
    }
    if (this._drawColors)
    {
        this._div.css('background', this._background);
        this._div.css('color', this._foreground);
        this._drawColors = false;
    }
    if (this._drawFont)
    {
        this._div.css('font-family', this._fontFace);
        this._div.css('font-size', this._fontSize);
        this._div.css('font-weight', this._fontWeight);
        this._drawFont = false;
    }

    // Loop through the children
    for (var i = 0; i < this._childComponents.length; i++)
    {
        this._childComponents[i].draw();
    }
};