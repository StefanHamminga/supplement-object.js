# supplement-object

Recursively supplement all keys from addition objects to the base object. This will not overwrite any properties from the base object, unless the base value is `null` or `undefined` and the additional value an object.

Add defaults to configuration objects, etc.

This modifies the `base` object in-place and returns a reference to base.

## Installing and usage

```bash
npm install --save supplement-object
```

```js
const supplement = require('supplement-object');

const obj1 = {
    key1: "val1",
    key2: {
        key3: true,
        key8: 9
    }
};

const obj2 = {
    key1: "won't get copied",
    key2: {
        key4: "val2",
        key5: {
            key6: false,
            key7: "val3"
        }
    }
};

supplement(obj1, obj2);

// After supplementing:
const obj1 = {
    key1: 'val1',
    key2: {
        key3: true,
        key8: 9,
        key4: 'val2',
        key5: {
            key6: false,
            key7: 'val3'
        }
    }
};

// Or another common use case:

const defaults = {
    myvar: true
}

function bla (config) {
    config = supplement(config, defaults);
}

bla(); // config will equal defaults
```

## Notes and license

This project is available on [GitHub](https://github.com/StefanHamminga/supplement-object.js) and [npm](https://www.npmjs.com/package/supplement-object).

The project is licensed as LGPL v3.0 and may be freely used and distributed as such.

Copyright 2016 [Stefan Hamminga](mailto:stefan@prjct.net) - [prjct.net](https://prjct.net)
