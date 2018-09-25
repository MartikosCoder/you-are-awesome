const createEnumerableProperty = (propname) => {
    return propname;
};
const createNotEnumerableProperty = (propname) => {
    return Symbol(propname);
};

const createProtoMagicObject = () => {
    return Function;
};

// Переменные для счётчиков
let counter = 0;
let async_counter = 0;

const incrementor = () => {
    counter++;
    return incrementor;
};
incrementor.toString = () => {
    return counter;
}

const asyncIncrementor = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(++async_counter);
        }, 1);
    });
};

const createIncrementer = () => {
    return {
        value: 0,

        next: function() {
            this.value++;

            return this;
        },

        [Symbol.iterator]: function * () {
            for (let key in this) {
                this.next();

                yield this.value;
            }
        }
    }
};

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

const sortByProto = (arr) => {
    return arr.sort();
};

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
