export class Component
{
    constructor(id, element)
    {
        this._id = id;
        this._element = element;
        this._element.id = this._id;

        this._children = [];

        // Initial State
        this._background = 'black';
        this._foreground = 'white';
        this._dirtyColors = true;

        this._height = 0;
        this._width = 0;
        this._dirtyBounds = true;
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

    append(component)
    {
        this._children.push(component);
        this._element.append(component.getElement());
    }

    draw()
    {
        if (this._dirtyColors)
        {
            console.log('updating colours of ', this._id);
            this._element.style.background = this._background;
            this._element.style.color = this._foreground;
            this._dirtyColors = false;
        }

        this._children.forEach((child) => child.draw());
    }
};