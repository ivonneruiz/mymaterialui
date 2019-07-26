"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Format = {
    toString(format, args) {
        return format.replace(/{(\d+)}/g, function (match, value) {
            return typeof args[value] !== 'undefined' ? args[value] : match;
        });
    }
};
exports.default = Format;
