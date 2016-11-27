/**
 * @namespace SEESAW
 * @class SEESAW.Component
 * @param {string} [id]
 * @constructor
 */
SEESAW.Component = function (id)
{
    /**
     * The ID of the component which matches its ID in the DOM tree.
     * @type {string}
     * @private
     */
    this._id = id;

    /**
     * The X position of the component.
     * @type {number}
     * @private
     */
    this._x = 0;

    /**
     * The Y position of the component.
     * @type {number}
     * @private
     */
    this._y = 0;

    /**
     * The Z position of the component. It starts at undefined as, if not defined, the parent will provide its z-index value.
     * @type {number|undefined}
     * @private
     */
    this._z = undefined;

    /**
     * The width of the component.
     * @type {number}
     * @private
     */
    this._width = 0;

    /**
     * The height of the component.
     * @type {number}
     * @private
     */
    this._height = 0;

    /**
     * The background colour of the component. It support all kinds of backgrounds.
     * @type {string}
     * @private
     */
    this._background = 'transparent';

    /**
     * The colour of the foreground, this matches the CSS property color.
     * @type {string}
     * @private
     */
    this._foreground = 'inherit';

    /**
     * The font face of the Component. This matches the font-family CSS property.
     * @type {string}
     * @private
     */
    this._fontFace = 'inherit';

    /**
     * The size of the font for the Component. This matches the font-size CSS property.
     * @type {string}
     * @private
     */
    this._fontSize = 'inherit';

    /**
     * The font weight of the Component. This matches the font-weight CSS property.
     * @type {string|number}
     * @private
     */
    this._fontWeight = 'inherit';

    /**
     * This component's parent.
     * @type {SEESAW.Component|undefined}
     * @private
     */
    this._parent = undefined;

    /**
     * This component's children.
     * @type {Array}
     * @private
     */
    this._childComponents = [];

    /**
     * This drawing flag handles the change of the component's position.
     * @type {boolean}
     * @private
     */
    this._drawPosition = false;

    /**
     * This drawing flag handles the change of the component's size.
     * @type {boolean}
     * @private
     */
    this._drawSize = false;

    /**
     * This drawing flag handles the change of colours in the object.
     * @type {boolean}
     * @private
     */
    this._drawColors = false;

    /**
     * This drawing flag handle the change of fonts.
     * @type {boolean}
     * @private
     */
    this._drawFont = false;

    // Add the component to the global SEESAW object
    SEESAW.addComponent(this);
};

SEESAW.Component.prototype.constructor = SEESAW.Component;

/**
 * @param {SEESAW.Component} parent
 */
SEESAW.Component.prototype.setParent = function (parent)
{
    this._parent = parent;
};

/**
 * @returns {SEESAW.Component|*}
 */
SEESAW.Component.prototype.getParent = function ()
{
    if (typeof this._parent === 'undefined')
    {
        throw Error('This Component has no parent!');
    }
    return this._parent;
};

/**
 * @param {SEESAW.Component} child
 */
SEESAW.Component.prototype.addChild = function (child)
{
    this._childComponents[child.getID()] = child;
    child.setParent(this);
    child.create();
};

/**
 * @returns {*|jQuery|HTMLElement}
 */
SEESAW.Component.prototype.getDiv = function ()
{
    if (typeof this._div === 'undefined')
    {
        throw Error('This Component has not yet been created!');
    }
    return this._div;
};

/**
 * The create function which will make the DOM of the component.
 */
SEESAW.Component.prototype.create = function ()
{
    var div = '<div id="' + this._id + '"></div>';
    this.getParent().getDiv().append(div);

    this._div = $('#' + this._id);
    this._div.css('position', 'absolute');
    this._div.css('box-sizing', 'border-box');

    if (typeof this._z === 'undefined')
    {
        var zIndex = this.getParent().getZ() + 1;
        this.setZ(zIndex);
    }

    // Set all first draw parameters to loop
    this._drawPosition = true;
    this._drawSize = true;
    this._drawColors = true;
    this._drawFont = true;
};

/**
 * The drawing function.
 */
SEESAW.Component.prototype.draw = function ()
{
    if (this._drawPosition)
    {
        this._div.css('top', this._y);
        this._div.css('left', this._x);
        this._div.css('z-index', this._z);
        this._drawPosition = false;
    }
    if (this._drawSize)
    {
        this._div.css('width', this._width);
        this._div.css('height', this._height);
        this._drawSize = false;
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
    // Loop through its children
    for (var key in this._childComponents)
    {
        if (this._childComponents.hasOwnProperty(key))
        {
            this._childComponents[key].draw();
        }
    }
};

/**
 * @returns {string}
 */
SEESAW.Component.prototype.getID = function ()
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
    // Position
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
    // Size
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
 * @param {number} y
 */
SEESAW.Component.prototype.setPosition = function (x, y)
{
    this.setBounds(x, y, this._width, this._height);
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
 * @returns {number|undefined}
 */
SEESAW.Component.prototype.getZ = function ()
{
    return this._z;
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
 * @param {string} color
 */
SEESAW.Component.prototype.setForeground = function (color)
{
    if (this._foreground !== color)
    {
        this._foreground = color;
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

/**
 * @param {string} fontFace
 */
SEESAW.Component.prototype.setFontFace = function (fontFace)
{
    if (this._fontFace !== fontFace)
    {
        this._fontFace = fontFace;
        this._drawFont = true;
    }
};

/**
 * @returns {string}
 */
SEESAW.Component.prototype.getFontFace = function ()
{
    return this._fontFace;
};

/**
 * @param {string|number} size
 */
SEESAW.Component.prototype.setFontSize = function (size)
{
    if (typeof size === 'number')
    {
        size = size + 'px';
    }
    if (this._fontSize !== size)
    {
        this._fontSize = size;
        this._drawFont = true;
    }
};

/**
 * @returns {string}
 */
SEESAW.Component.prototype.getFontSize = function ()
{
    return this._fontSize;
};

/**
 * @param {number|string} weight
 */
SEESAW.Component.prototype.setFontWeight = function (weight)
{
    if (this._fontWeight !== weight)
    {
        this._fontWeight = weight;
        this._drawFont = true;
    }
};

/**
 * @returns {number|string}
 */
SEESAW.Component.prototype.getFontWeight = function ()
{
    return this._fontWeight;
};