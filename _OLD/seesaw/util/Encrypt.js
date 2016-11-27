/**
 * @class SEESAW.Encrypt
 * @param encryptionKey
 * @constructor
 */
SEESAW.Encrypt = function (encryptionKey)
{
    this._key = encryptionKey;
};

// Type of encryption/cypher algorithms
SEESAW.Encrypt.XORCypher = 0;

/**
 * @param {string} value
 * @param {number} type
 */
SEESAW.Encrypt.prototype.encrypt = function (value, type)
{
    switch (type)
    {
        case SEESAW.Encrypt.XORCypher:
            break;
    }
};

/**
 * @param {string} value
 * @param {number} type
 */
SEESAW.Encrypt.prototype.decrypt = function (value, type)
{
    switch (type)
    {
        case SEESAW.Encrypt.XORCypher:
            break;
    }
};