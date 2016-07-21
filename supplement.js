/**
 * Recursively supplement all keys from addition objects to the base object.
 * @param  {Object} base     Object to be supplemented
 * @param  {Object} addition Objects with additional properties, as many as needed
 * @return {Object} base     Extended base or new object
 */
function supplement(base, addition) {
    if (typeof base === 'undefined') base = {};
    if (base instanceof Object) {
        var bkeys, bkey, akeys, akey, add;
        for (let i = 1; i < arguments.length; i++) {
            add = arguments[i];
            if (add instanceof Object) {
                bkeys = Object.keys(base);
                akeys = Object.keys(add);
                for (let j = 0; j < akeys.length; j++) {
                    akey = akeys[j];
                    if (bkeys.indexOf(akey) < 0) {
                        base[akey] = add[akey];
                    } else if ((base[akey] instanceof Object ||
                                base[akey] === null ||
                                typeof base[akey] === undefined) &&
                                add[akey] instanceof Object) {
                        supplement(base[akey], add[akey]);
                    }
                }
            }
        }
    }
    return base;
}

module.exports = supplement;
