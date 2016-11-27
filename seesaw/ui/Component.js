/*
 * @class SEESAW.Component
 * @param {string} [id]
 * @constructor
 */
SEESAW.Component = function (id)
{
    this._id = id;
};

SEESAW.Component.prototype.constructor = SEESAW.Component;

SEESAW.Component.prototype.create = function() {};

SEESAW.Component.prototype.draw = function() {};