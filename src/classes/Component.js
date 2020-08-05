import { NumberUtils } from './NumberUtils';

export class Component
{
    constructor(id, element)
    {
        this._id = id;
        this._element = element;
        this._element.id = this._id;

        this._children = [];

        this._initColors();
        this._initDimensions();
        this._initSize();
    }

    _initColors()
    {
        this._background = this._element.style.background || '#000000';
        this._foreground = this._element.style.color || '#FFFFFF';
        this._dirtyColors = true;
    }

    _initDimensions()
    {
        this._position = this._element.style.position || 'absolute';
        this._x = 0;
        this._y = 0;
        this._z = NumberUtils.toInt(this._element.style.zIndex);
        this._dirtyDimensions = true;
    }

    _initSize()
    {
        this._height = NumberUtils.toInt(this._element.style.height);
        this._width = NumberUtils.toInt(this._element.style.width);
        this._dirtySize = true;
    }

    getElement()
    {
        return this._element;
    }

    setForeground(foreground)
    {
        this._foreground = foreground;
        this._dirtyColors = true;
    }

    setBackground(background)
    {
        this._background = background;
        this._dirtyColors = true;
    }

    getX()
    {
        return this._x;
    }

    setX(x)
    {
        x = NumberUtils.toInt(x);
        if (x !== this._x)
        {
            this._x = x;
            this._dirtyDimensions = true;
        }
    }

    getY()
    {
        return this._y;
    }

    setY(y)
    {
        y = NumberUtils.toInt(y);
        if (y !== this._y)
        {
            this._y = y;
            this._dirtyDimensions = true;
        }
    }

    getZ()
    {
        return this._z;
    }

    setZ(z)
    {
        z = NumberUtils.toInt(z);
        if (z !== this._z)
        {
            this._z = z;
            this._dirtyDimensions = true;
        }
    }

    setPosition(x, y)
    {
        this.setX(x);
        this.setY(y);
    }

    getWidth()
    {
        return this._width;
    }

    setWidth(width)
    {
        width = NumberUtils.toInt(width);
        if (width !== this._width)
        {
            this._width = width;
            this._dirtySize = true;
        }
    }

    getHeight()
    {
        return this._height;
    }

    setHeight(height)
    {
        height = NumberUtils.toInt(height);
        if (height !== this._height)
        {
            this._height = height;
            this._dirtySize = true;
        }
    }

    setSize(width, height)
    {
        this.setWidth(width);
        this.setHeight(height);
    }

    append(component)
    {
        component.setZ((this._z + 1));
        this._children.push(component);
        this._element.append(component.getElement());
    }

    draw()
    {
        if (this._dirtyColors)
        {
            this._element.style.background = this._background;
            this._element.style.color = this._foreground;
            this._dirtyColors = false;
        }

        if (this._dirtyDimensions)
        {
            this._element.style.position = this._position;
            this._element.style.left = NumberUtils.toPx(this._x);
            this._element.style.top = NumberUtils.toPx(this._y);
            this._element.style.zIndex = this._z;
            this._dirtyDimensions = false;
        }

        if (this._dirtySize)
        {
            this._element.style.width = NumberUtils.toPx(this._width);
            this._element.style.height = NumberUtils.toPx(this._height);
            this._dirtySize = false;
        }

        this._children.forEach((child) => child.draw());
    }
};