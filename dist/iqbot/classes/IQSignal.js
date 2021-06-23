"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var IQSignal = /** @class */ (function () {
    function IQSignal(config) {
        var _this = this;
        this.getTime = function () {
            var momentObj = _this._time;
            var remaining = momentObj.diff(moment_1.default());
            return {
                moment: momentObj,
                s: momentObj.seconds(),
                m: momentObj.minutes(),
                h: momentObj.hours(),
                remaining: remaining,
                hasPassed: remaining <= 0,
            };
        };
        this.m = config.m;
        this.pair = config.pair;
        this._time = config.time;
        this.action = config.action;
    }
    Object.defineProperty(IQSignal.prototype, "name", {
        get: function () {
            return this.pair.join("/");
        },
        enumerable: false,
        configurable: true
    });
    IQSignal.parse = function (text) {
        var matches = __spreadArray([], __read(text.matchAll(/M(\d);(\w{3})(\w{3});(\d{2}:\d{2}:\d{2});(CALL|PUT)/gm)));
        return matches
            .filter(function (match) { return match.length >= 6; })
            .map(function (match) {
            return new IQSignal({
                m: parseInt(match[1]),
                pair: [match[2], match[3]],
                time: moment_1.default(match[4], "HH:mm:ss"),
                action: match[5],
            });
        })
            .filter(function (signal) { return !signal.getTime().hasPassed; });
    };
    return IQSignal;
}());
exports.default = IQSignal;
//# sourceMappingURL=IQSignal.js.map