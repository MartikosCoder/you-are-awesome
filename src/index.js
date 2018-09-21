// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propname) => {
    return propname;
};
const createNotEnumerableProperty = (propname) => {
    return Symbol(propname);
};

const createProtoMagicObject = () => {
    return Function;
};

var a_counter = 0;
var counter = 0;

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
            resolve(++a_counter);
        }, 100);
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

                yield this.value; // yield [key, value] pair
            }
        }
    }
};

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
