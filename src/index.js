// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propname) => {};
const createNotEnumerableProperty = (propname) => {};

const createProtoMagicObject = () => {
    return Function;
};

const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve(param);
        }, 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
    return JSON.stringify(obj).match(/[^\\]":/g).length;
};

const createSerializedObject = () => {
    return null;
};

const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
