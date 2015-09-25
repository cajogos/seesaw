/**
 * @class SEESAW.Number
 * @constructor
 */
SEESAW.Number = function ()
{

};

/**
 * This function will be used to return a string based on the number of zeros
 *
 * @param {number} noOfZeros
 * @returns {string}
 */
SEESAW.Number.prototype.getNumberNameBasedOnZeros = function (noOfZeros)
{
    var mappings = {
        0:   'zero',
        3:   'thousand',
        6:   'million',
        9:   'billion',
        12:  'trillion',
        15:  'quadrillion',
        18:  'quintillion',
        21:  'sextillion',
        24:  'septillion',
        27:  'octillion',
        30:  'nonillion',
        33:  'decillion',
        36:  'undecillion',
        39:  'duodecillion',
        42:  'tredecillion',
        45:  'quattuordecillion',
        48:  'quindecillion',
        51:  'sexdecillion',
        54:  'septendecillion',
        57:  'octodecillion',
        60:  'novemdecillion',
        63:  'vigintillion',
        66:  'unvigintillion',
        69:  'duovigintillion',
        72:  'trevigintillion',
        75:  'quattuorvigintillion',
        78:  'quinvigintillion',
        81:  'sexvigintillion',
        84:  'septenvigintillion',
        87:  'octovigintillion',
        90:  'novemvigintillion',
        93:  'trigintillion',
        96:  'untrigintillion',
        99:  'duotrigintillion',
        100: 'googol',
        102: 'tretrigintillion',
        105: 'quattuortrigintillion',
        108: 'quintrigintillion',
        111: 'sextrigintillion',
        114: 'septentrigintillion',
        117: 'octotrigintillion',
        120: 'novemtrigintillion',
        123: 'quadragintillion',
        126: 'unquadragintillion',
        129: 'duoquadragintillion',
        132: 'trequadragintillion',
        135: 'quattuorquadragintillion',
        138: 'quinquadragintillion',
        141: 'sexquadragintillion',
        144: 'septenquadragintillion',
        147: 'octoquadragintillion',
        150: 'novemquadragintillion',
        153: 'quinquagintillion',
        156: 'unquinquagintillion',
        159: 'duoquinquagintillion',
        162: 'trequinquagintillion',
        165: 'quattuorquinquagintillion',
        168: 'quinquinquagintillion',
        171: 'sexquinquagintillion',
        174: 'septenquinquagintillion',
        177: 'octoquinquagintillion',
        180: 'novemquinquagintillion',
        183: 'sexagintillion',
        186: 'unsexagintillion',
        189: 'duosexagintillion',
        192: 'tresexagintillion',
        195: 'quattuorsexagintillion',
        198: 'quinsexagintillion',
        201: 'sexsexagintillion',
        204: 'septensexagintillion',
        207: 'octosexagintillion',
        210: 'novemsexagintillion',
        213: 'septuagintillion',
        216: 'unseptuagintillion',
        219: 'duoseptuagintillion',
        222: 'treseptuagintillion',
        225: 'quattuorseptuagintillion',
        228: 'quinseptuagintillion',
        231: 'sexseptuagintillion',
        234: 'septenseptuagintillion',
        237: 'octoseptuagintillion',
        240: 'novemseptuagintillion',
        243: 'octogintillion',
        246: 'unoctogintillion',
        249: 'duooctogintillion',
        252: 'treoctogintillion',
        255: 'quattuoroctogintillion',
        258: 'quinoctogintillion',
        261: 'sexoctogintillion',
        264: 'septoctogintillion',
        267: 'octooctogintillion',
        270: 'novemoctogintillion',
        273: 'nonagintillion',
        276: 'unnonagintillion',
        279: 'duononagintillion',
        282: 'trenonagintillion',
        285: 'quattuornonagintillion',
        288: 'quinnonagintillion',
        291: 'sexnonagintillion',
        294: 'septennonagintillion',
        297: 'octononagintillion',
        300: 'novemnonagintillion',
        303: 'centillion'
    };

    if (mappings[noOfZeros] === undefined)
    {
        while (mappings[noOfZeros] === undefined)
        {
            noOfZeros--;
        }
    }
    return mappings[noOfZeros];
};