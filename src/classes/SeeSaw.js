import { Component } from './Component';

let componentsCreated = 0;

export class SeeSaw
{
    constructor()
    {
        let rootElement = document.getElementById('seesaw');
        rootElement.style.position = 'relative';

        this._rootComponent = new Component('seesaw', rootElement);
        componentsCreated++;

        // Interval that performs the drawing of components
        this._drawInterval = setInterval(() => {
            this._performDrawing();
        }, 16);
    }

    static component({ id = null, type = 'div' } = {})
    {
        componentsCreated++;
        if (id === null) id = `ssc-${componentsCreated}`;
        return new Component(id, document.createElement(type));
    }

    append(component)
    {
        this._rootComponent.append(component);
    }

    _performDrawing()
    {
        this._rootComponent.draw();
    }
};