/**
 * @class SEESAW.Button
 * @param id
 * @constructor
 * @extends SEESAW.Component
 */
SEESAW.Button = function (id)
{
    SEESAW.Component.call(this, id);
};

SEESAW.Button.prototype = Object.create(SEESAW.Component.prototype);
SEESAW.Button.prototype.constructor = SEESAW.Button;