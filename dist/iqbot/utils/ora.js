"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepOras = void 0;
var chalk_1 = __importDefault(require("chalk"));
var ora_1 = __importDefault(require("ora"));
var Ora = /** @class */ (function () {
    function Ora(stepName) {
        var _this = this;
        this.stepName = stepName;
        this.ora = ora_1.default();
        this.formatText = function (text, done) {
            if (done === void 0) { done = false; }
            return chalk_1.default[done ? "green" : "blue"].bold("[" + _this.stepName + "]") + " " + text;
        };
        this.start = function (text) {
            if (_this.ora.isSpinning) {
                return _this.text(text);
            }
            _this.ora.start(_this.formatText(text));
            return _this;
        };
        this.text = function (text) {
            _this.ora.text = _this.formatText(text);
            return _this;
        };
        this.done = function (text) {
            _this.ora.succeed(_this.formatText(text, true));
        };
    }
    return Ora;
}());
exports.stepOras = {
    LAUNCH: new Ora("LAUNCH"),
    "INIT PAGE": new Ora("INIT PAGE"),
    "SIGN IN": new Ora("SIGN IN"),
    "TRADE ROOM": new Ora("TRADE ROOM"),
    "BOT ANALYSIS": new Ora("BOT ANALYSIS"),
    SIGNAL: new Ora("SIGNAL"),
};
//# sourceMappingURL=ora.js.map