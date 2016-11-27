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
     * @type {string}
     * @private
     */
    this._fontWeight = 'inherit';

    // Inheritance tree
    this._parent = undefined;
    this._childComponents = [];

    // Drawing flags
    this._drawCreate = false;
    this._drawPosition = false;
    this._drawSize = false;
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
SEESAW.Component.prototype.getDiv = function()
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
};

/**
 * The drawing function.
 */
SEESAW.Component.prototype.draw = function ()
{
    if (this._drawPosition)
    {
        this._drawPosition = false;
    }
    if (this._drawSize)
    {
        this._drawSize = false;
    }

    // Loop through its children
    for (var key in this._childComponents)
    {
        if (this.hasOwnProperty(key))
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
SEESAW.Component.prototype.getZ = function()
{
    return this._z;
};