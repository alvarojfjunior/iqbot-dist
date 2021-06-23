"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var components = __importStar(require("../components"));
var utils_1 = require("../utils");
var TradingBot = /** @class */ (function () {
    function TradingBot(browser, page) {
        var _this = this;
        this.browser = browser;
        this.page = page;
        this.openAssetsQty = 1;
        this.clickComponent = function (component, options) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.mouse.click(components[component].x, components[component].y, __assign({}, options))];
                    case 1:
                        _a.sent();
                        if (!(options && options.sleepAfter)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sleep(options.sleepAfter)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.typeComponent = function (component, text, options) { return __awaiter(_this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clickComponent(component, options && {
                            button: options.button,
                            clickCount: options.clickCount,
                            sleepAfter: options.sleepAfterClick,
                        })];
                    case 1:
                        _a.sent();
                        if (!(options && options.clear)) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < 15)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.page.keyboard.press("Backspace")];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [4 /*yield*/, this.page.keyboard.type(text)];
                    case 6:
                        _a.sent();
                        if (!(options && options.sleepAfter)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.sleep(options.sleepAfter)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        this.openAsset = function (name) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.openAssetsQty > 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.closeAsset()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.clickComponent("openNewAssetBtn", { sleepAfter: 2000 })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.typeComponent("searchAssetInput", name.split(" ").join().toUpperCase(), { sleepAfter: 1000 })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.clickComponent("assetFromSearchBtn", { sleepAfter: 2000 })];
                    case 5:
                        _a.sent();
                        this.openAssetsQty++;
                        return [2 /*return*/];
                }
            });
        }); };
        this.closeAsset = function (options) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options && options.force) && this.openAssetsQty === 1) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.clickComponent("closeAssetBtn", { sleepAfter: 1000 })];
                    case 1:
                        _a.sent();
                        this.openAssetsQty--;
                        return [2 /*return*/];
                }
            });
        }); };
        this.setAmount = function (amount) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.typeComponent("amountInput", amount.toString(), { clear: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.setTime = function (column, row) { return __awaiter(_this, void 0, void 0, function () {
            var timeComponent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeComponent = {
                            x: column === 1 ? 1150 : 1300,
                            y: 188 + 34 * (row - 1) + 34 / 2,
                        };
                        return [4 /*yield*/, this.clickComponent("timeMenuBtn", { sleepAfter: 1000 })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.page.mouse.click(timeComponent.x, timeComponent.y)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.clickHigher = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clickComponent("higherBtn")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.clickLower = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clickComponent("lowerBtn")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runSignal = function (signal) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        utils_1.stepOras["SIGNAL"].start("Enviando sinal para a corretora ...");
                        //SELECIONA O ATIVO
                        return [4 /*yield*/, this.openAsset(signal.name)];
                    case 1:
                        //SELECIONA O ATIVO
                        _a.sent();
                        //await this.setAmount(1);
                        return [4 /*yield*/, this.sleep(signal.getTime().remaining - 4000)];
                    case 2:
                        //await this.setAmount(1);
                        _a.sent();
                        return [4 /*yield*/, this.setTime(1, signal.m)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.sleep(signal.getTime().remaining - 1500)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.clickComponent(signal.action === "CALL" ? "higherBtn" : "lowerBtn")];
                    case 5:
                        _a.sent();
                        utils_1.stepOras["SIGNAL"].done("Sinal " + signal.name + " Finalizado.");
                        return [2 /*return*/];
                }
            });
        }); };
        this.closeBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.sleep = utils_1.sleep;
    }
    return TradingBot;
}());
exports.default = TradingBot;
//# sourceMappingURL=TradingBot.js.map