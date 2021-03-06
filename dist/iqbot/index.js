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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQSignal = void 0;
var puppeteer_1 = __importDefault(require("puppeteer"));
var classes_1 = require("./classes");
var utils_1 = require("./utils");
var classes_2 = require("./classes");
Object.defineProperty(exports, "IQSignal", { enumerable: true, get: function () { return classes_2.IQSignal; } });
var DEFAULT_CONNECT_OPTIONS = {
    headless: true,
    logs: true,
};
var iqbot = function () {
    var enterTradeRoom = function (page) { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.goto("https://iqoption.com/traderoom")];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, page.waitForSelector("canvas.active")];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4:
                    e_1 = _a.sent();
                    return [4 /*yield*/, enterTradeRoom(page)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 6: return [4 /*yield*/, utils_1.sleep(1000)];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var signIn = function (page, credentials, options) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.goto("https://login.iqoption.com/en/login")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.waitForSelector("button.Button.Button_green.Button_big.Button_fontBig")];
                case 2:
                    _a.sent();
                    options.logs &&
                        utils_1.stepOras["SIGN IN"].text("Entering e-mail: " + credentials.email + "...");
                    return [4 /*yield*/, page.mouse.click(800, 200)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.keyboard.type(credentials.email)];
                case 4:
                    _a.sent();
                    options.logs && utils_1.stepOras["SIGN IN"].text("Entering password...");
                    return [4 /*yield*/, page.mouse.click(800, 270)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, page.keyboard.type(credentials.password)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.mouse.click(800, 340)];
                case 7:
                    _a.sent();
                    options.logs && utils_1.stepOras["SIGN IN"].text("Waiting for sign in...");
                    return [4 /*yield*/, page.waitForSelector("button.Button.NavBtn.Button_orange")];
                case 8:
                    _a.sent();
                    return [2 /*return*/, page];
            }
        });
    }); };
    var connect = function (credentials, cb, options) { return __awaiter(void 0, void 0, void 0, function () {
        var browser, page, bot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = __assign(__assign({}, DEFAULT_CONNECT_OPTIONS), options);
                    options.logs && utils_1.stepOras["LAUNCH"].start("Launching browser...");
                    return [4 /*yield*/, puppeteer_1.default.launch({
                            defaultViewport: { width: 1500, height: 700 },
                            headless: options.headless,
                        })];
                case 1:
                    browser = _a.sent();
                    process.on("SIGINT", function () {
                        browser.close();
                    });
                    options.logs && utils_1.stepOras["LAUNCH"].done("Browser launched!");
                    options.logs &&
                        utils_1.stepOras["INIT PAGE"].start("Initializing browser's page...");
                    return [4 /*yield*/, browser.pages()];
                case 2:
                    page = (_a.sent())[0];
                    if (!!page) return [3 /*break*/, 4];
                    return [4 /*yield*/, browser.newPage()];
                case 3:
                    page = _a.sent();
                    _a.label = 4;
                case 4:
                    options.logs && utils_1.stepOras["INIT PAGE"].done("Page initialized!");
                    options.logs && utils_1.stepOras["SIGN IN"].start("Signing in...");
                    return [4 /*yield*/, signIn(page, credentials, { logs: options.logs })];
                case 5:
                    _a.sent();
                    options.logs && utils_1.stepOras["SIGN IN"].done("Signed in!");
                    options.logs && utils_1.stepOras["TRADE ROOM"].start("Accessing trade room...");
                    return [4 /*yield*/, enterTradeRoom(page)];
                case 6:
                    _a.sent();
                    options.logs && utils_1.stepOras["TRADE ROOM"].done("Trade room's ready!");
                    bot = new classes_1.TradingBot(browser, page);
                    if (cb) {
                        cb(bot);
                    }
                    return [2 /*return*/, bot];
            }
        });
    }); };
    return { connect: connect };
};
exports.default = iqbot;
//# sourceMappingURL=index.js.map