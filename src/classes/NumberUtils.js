export class NumberUtils
{
    static toInt(value)
    {
        if (typeof value === 'string')
        {
            value = String(value).trim();
            if (value.length > 0)
            {
                if (value.substr(-2, 2) === 'px')
                {
                    value = value.substr(0, value.length - 2);
                }
            }
            else
            {
                value = 0;
            }
        }
        else
        {
            value = parseInt(value, 10);
        }
        return value;
    }
    
    static toPx(value)
    {
        if (typeof value === 'string')
        {
            value = String(value);
            if (value.substr(-2, 2) !== 'px')
            {
                value += 'px';
            }
        }
        else
        {
            value += 'px';
        }
        return value;
    }
};