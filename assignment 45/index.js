"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function storecarinfor(manufacturer, modelname) {
    var extraoption = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraoption[_i - 2] = arguments[_i];
    }
    var carinfor = __assign({ manufacturer: manufacturer, modelname: modelname }, Object.assign({}, extraoption));
    console.log(carinfor);
}
;
var answer = storecarinfor('honda', 'civic', { color: 'red' }, { features: ["Navigation", "power window"] });
console.log(answer);
