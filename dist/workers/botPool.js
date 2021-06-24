"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var parentPort = require('worker_threads').parentPort;
var moment = require('moment');
var handleAuth = require('../credential/credentials').handleAuth;
var queueSignals = [];
var isRunning = false;
parentPort.on('message', function (message) {
    if (message.type === 'power') {
        isRunning = message.value;
        if (message.value === true) {
            console.log('O robô está em operação.');
            isRunning = true;
        }
        else {
            console.log('O robô foi parado.');
            isRunning = false;
        }
        message.type = '';
    }
});
parentPort.on('message', function (message) {
    if (message.type === 'register') {
        var signals = parse(message.value);
        queueSignals = queueSignals.concat(signals);
        console.log('Sinal recebido. Situação atual da fila: ');
        queueSignals.map(function (s) { return console.log("M" + s.m + ";" + s.pair + ";" + s.time + ";" + s.action); });
        message.type = '';
    }
});
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, signals, auth, signalss, i, strSignal;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!true) return [3 /*break*/, 14];
                if (!((moment().hours() === 1 && moment().minutes() === 12) || (moment().hours() === 13 && moment().minutes() === 12))) return [3 /*break*/, 4];
                return [4 /*yield*/, handleAuth()];
            case 1:
                _a = _b.sent(), signals = _a.signals, auth = _a.auth;
                queueSignals = [];
                if (!auth) return [3 /*break*/, 3];
                signalss = parse(signals);
                queueSignals = queueSignals.concat(signalss);
                console.log('Sinais recebidos do servidor. Situação atual da fila: ');
                queueSignals.map(function (s) { return console.log("M" + s.m + ";" + s.pair + ";" + s.time + ";" + s.action); });
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10000); })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3: return [2 /*return*/];
            case 4:
                if (!(queueSignals.length > 0 && isRunning)) return [3 /*break*/, 11];
                i = 0;
                _b.label = 5;
            case 5:
                if (!(i < queueSignals.length)) return [3 /*break*/, 10];
                if (!timeIsValid(queueSignals[i].time)) return [3 /*break*/, 7];
                strSignal = "M" + queueSignals[i].m + ";" + queueSignals[i].pair + ";" + queueSignals[i].time + ";" + queueSignals[i].action;
                parentPort.postMessage({ type: 'send', value: strSignal });
                queueSignals.splice(i, 1);
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 30000); })];
            case 6:
                _b.sent();
                return [3 /*break*/, 9];
            case 7:
                if (moment(queueSignals[i].time, "HH:mm:ss").hours() < moment().hours()) {
                    queueSignals.splice(i, 1);
                }
                ;
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
            case 8:
                _b.sent();
                _b.label = 9;
            case 9:
                i++;
                return [3 /*break*/, 5];
            case 10: return [3 /*break*/, 13];
            case 11: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5000); })];
            case 12:
                _b.sent();
                _b.label = 13;
            case 13: return [3 /*break*/, 0];
            case 14: return [2 /*return*/];
        }
    });
}); })();
var parse = function (text) {
    if (!text)
        return [];
    var matches = __spreadArray([], __read(text.matchAll(/M(\d);(\w{3})(\w{3});(\d{2}:\d{2}:\d{2});(CALL|PUT)/gm)));
    return matches.map(function (match) { return ({
        m: parseInt(match[1]),
        pair: match[2] + match[3],
        time: match[4],
        action: match[5],
    }); });
};
var timeIsValid = function (strTime) {
    var time = moment(strTime, "HH:mm:ss");
    var now = moment();
    if (time.hours() === now.hours() && (time.minutes() - now.minutes()) === 1)
        return true;
    else
        return false;
};
//# sourceMappingURL=botPool.js.map