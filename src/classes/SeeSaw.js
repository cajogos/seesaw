import { Component } from './Component';

export class SeeSaw
{
    constructor()
    {
        this._rootComponent = new Component('seesaw', document.getElementById('seesaw'));

        // Interval that performs the drawing of components
        this._drawInterval = setInterval(() => {
            this._performDrawing();
        }, 1000);
    }

    static Component(id)
    {
        return new Component(id, document.createElement('div'));
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