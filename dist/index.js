"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var worker_threads_1 = require("worker_threads");
var puppeteer_1 = __importDefault(require("puppeteer"));
var moment_1 = __importDefault(require("moment"));
var path_1 = __importDefault(require("path"));
var utils_1 = require("./iqbot/utils");
var iqbot_1 = __importStar(require("./iqbot"));
var treidEvolutionBot_1 = __importDefault(require("./treidEvolutionBot"));
var credentials_1 = require("./credential/credentials");
var isRunning = false;
var bot = iqbot_1.default();
var treidEvoBot;
var isAnaliysis = true;
var SIGNALS = [];
var queueSignals = '';
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var credentials;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, credentials_1.handleAuth()];
            case 1:
                credentials = _a.sent();
                if (credentials.auth)
                    bot.connect({ email: credentials.iqEmail, password: credentials.iqPassword }, function (bot) { return __awaiter(void 0, void 0, void 0, function () {
                        var telegram, worker;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    telegram = new telegraf_1.Telegraf(credentials.telegramHash);
                                    worker = new worker_threads_1.Worker(path_1.default.resolve(__dirname, "workers/botPool.js"));
                                    worker.postMessage({ type: "register", value: credentials.signals });
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                                case 1:
                                    _a.sent();
                                    console.log("Envie 'start' para o seu bot pelo telegram, para que ele come\u00E7e a operar!");
                                    telegram.on("message", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
                                        var textSignal, b, p, error_1, e_1;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 16, , 17]);
                                                    textSignal = ctx.message.text;
                                                    if (!((textSignal === "start" || textSignal === "Start") && isRunning)) return [3 /*break*/, 1];
                                                    ctx.reply("O rob?? j?? ativo. Envie 'stop' caso queira que ele pare de operar.");
                                                    return [3 /*break*/, 15];
                                                case 1:
                                                    if (!(textSignal === "start" || textSignal === "Start")) return [3 /*break*/, 10];
                                                    if (!(moment_1.default().isoWeekday() < 6 && isAnaliysis)) return [3 /*break*/, 8];
                                                    ctx.reply("Ativando o bot... Aguarde!");
                                                    utils_1.stepOras["BOT ANALYSIS"].start('Iniciando o anlizador de sinais....');
                                                    _a.label = 2;
                                                case 2:
                                                    _a.trys.push([2, 6, , 7]);
                                                    return [4 /*yield*/, puppeteer_1.default.launch({ headless: true, args: ['--no-sandbox'] })];
                                                case 3:
                                                    b = _a.sent();
                                                    return [4 /*yield*/, b.newPage()];
                                                case 4:
                                                    p = _a.sent();
                                                    return [4 /*yield*/, p.goto("http://treid.evo-lution.ru")];
                                                case 5:
                                                    _a.sent();
                                                    treidEvoBot = new treidEvolutionBot_1.default(b, p);
                                                    utils_1.stepOras["BOT ANALYSIS"].done('Analizador iniciado!');
                                                    ctx.reply("Rob?? ativo. Envie 'stop' caso queira que ele pare de operar.");
                                                    return [3 /*break*/, 7];
                                                case 6:
                                                    error_1 = _a.sent();
                                                    utils_1.stepOras["BOT ANALYSIS"].done('Houve um problema parar rodadar o analizador.');
                                                    ctx.reply("[CUIDADO] Rob?? ativo SEM O ANALIZADOR por mal funcionamento do mesmo. Envie 'stop' caso queira que ele pare de operar.");
                                                    isAnaliysis = false;
                                                    return [3 /*break*/, 7];
                                                case 7: return [3 /*break*/, 9];
                                                case 8:
                                                    ctx.reply("[CUIDADO] Rob?? ativo SEM O ANALIZADOR pois este funciona apenas de segunda a sexta. Envie 'stop' caso queira que ele pare de operar.");
                                                    _a.label = 9;
                                                case 9:
                                                    worker.postMessage({ type: "power", value: true });
                                                    isRunning = true;
                                                    return [3 /*break*/, 15];
                                                case 10:
                                                    if (!(textSignal === "stop" || textSignal === "Stop")) return [3 /*break*/, 11];
                                                    worker.postMessage({ type: "power", value: false });
                                                    isAnaliysis = true;
                                                    isRunning = false;
                                                    ctx.reply("Robo parado. Envie 'start' caso queira que ele volte a operar.");
                                                    return [3 /*break*/, 15];
                                                case 11:
                                                    if (!(textSignal === "start sem analizador")) return [3 /*break*/, 12];
                                                    isAnaliysis = false;
                                                    isRunning = true;
                                                    worker.postMessage({ type: "power", value: true });
                                                    ctx.reply("[CUIDADO] Rob?? ativo SEM O ANALIZADOR. Envie 'stop' caso queira que ele pare de operar.");
                                                    return [3 /*break*/, 15];
                                                case 12:
                                                    if (!(textSignal === 'status' || textSignal === 'Status')) return [3 /*break*/, 14];
                                                    worker.postMessage({ type: "makeList", value: false });
                                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                                                case 13:
                                                    _a.sent();
                                                    ctx.reply("O rob\u00F4 est\u00E1 " + (isRunning ? 'ATIVO' : 'INATIVO'));
                                                    ctx.reply("STATUS DA FILA:" + queueSignals);
                                                    return [3 /*break*/, 15];
                                                case 14:
                                                    if (!isRunning)
                                                        ctx.reply("O rob?? n??o est?? ligado, envie 'start' para come??ar a operar.");
                                                    else if (SIGNALS.length > 0) {
                                                        ctx.reply("O rob?? est?? ocupado, tente mais tarde.");
                                                    }
                                                    else {
                                                        SIGNALS = iqbot_1.IQSignal.parse(textSignal);
                                                        if (SIGNALS.length === 0) {
                                                            ctx.reply("Sinal(s) invalido(s).");
                                                        }
                                                        else {
                                                            worker.postMessage({ type: "register", value: textSignal });
                                                            ctx.reply("Sinal(s) registrado(s).");
                                                            SIGNALS = [];
                                                        }
                                                    }
                                                    _a.label = 15;
                                                case 15:
                                                    worker.on("message", function (message) { return __awaiter(void 0, void 0, void 0, function () {
                                                        var signal, recommend;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    if (!(message.type === "send")) return [3 /*break*/, 7];
                                                                    message.type = "";
                                                                    console.log('enviando o sinal ' + message.value + ' para a corretora.');
                                                                    signal = iqbot_1.IQSignal.parse(message.value);
                                                                    if (!signal) return [3 /*break*/, 7];
                                                                    recommend = false;
                                                                    if (!(moment_1.default().isoWeekday() < 6 && isAnaliysis)) return [3 /*break*/, 2];
                                                                    return [4 /*yield*/, treidEvoBot.validadeSignal(signal[0])];
                                                                case 1:
                                                                    recommend = _a.sent();
                                                                    return [3 /*break*/, 4];
                                                                case 2: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 20000); })];
                                                                case 3:
                                                                    _a.sent();
                                                                    recommend = true;
                                                                    _a.label = 4;
                                                                case 4:
                                                                    if (!recommend) return [3 /*break*/, 6];
                                                                    return [4 /*yield*/, bot.runSignal(signal[0])];
                                                                case 5:
                                                                    _a.sent();
                                                                    console.log("O sinal " + message.value + " foi enviado para a corretora. " + moment_1.default().format('hh:mm:ss'));
                                                                    ctx.reply("O sinal " + message.value + " foi enviado para a corretora. " + moment_1.default().format('hh:mm:ss'));
                                                                    return [3 /*break*/, 7];
                                                                case 6:
                                                                    console.log("O sinal " + message.value + " n\u00E3o passou na an\u00E1lise do rob\u00F4. " + moment_1.default().format('hh:mm:ss'));
                                                                    ctx.reply("O sinal " + message.value + " n\u00E3o passou na an\u00E1lise do rob\u00F4. " + moment_1.default().format('hh:mm:ss'));
                                                                    _a.label = 7;
                                                                case 7: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                    worker.on("message", function (message) { return __awaiter(void 0, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            if (message.type === "getList") {
                                                                queueSignals = message.value;
                                                                message.type = "";
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    }); });
                                                    worker.on("error", function (error) {
                                                        console.log("Houve um erro: ", error);
                                                        ctx.reply("Houve um erro: " + error);
                                                    });
                                                    worker.on("exit", function (code) {
                                                        console.log("O rob?? parou, c??digo: ", code);
                                                        ctx.reply("O rob\u00F4 parou: " + code);
                                                    });
                                                    return [3 /*break*/, 17];
                                                case 16:
                                                    e_1 = _a.sent();
                                                    return [3 /*break*/, 17];
                                                case 17: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    telegram.launch();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=index.js.map