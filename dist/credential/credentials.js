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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAuth = void 0;
var fs_1 = __importDefault(require("fs"));
var firebase_1 = require("../services/firebase");
var moment_1 = __importDefault(require("moment"));
var handleAuth = function () { return __awaiter(void 0, void 0, void 0, function () {
    var credentials, firestoreQuery, signals, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                credentials = {
                    auth: false,
                    iqbotEmail: "",
                    iqbotPassword: "",
                    iqEmail: "",
                    iqPassword: "",
                    telegramHash: "",
                    signals: ""
                };
                fs_1.default.readFileSync("./CREDENCIAIS.txt", "utf8")
                    .split(/\r?\n/)
                    .forEach(function (line) {
                    line.split("EMAIL DO BOT=")[1]
                        ? (credentials.iqbotEmail = String(line.split("EMAIL DO BOT=")[1]))
                        : "";
                    line.split("SENHA DO BOT=")[1]
                        ? (credentials.iqbotPassword = String(line.split("SENHA DO BOT=")[1]))
                        : "";
                    line.split("EMAIL DA IQ OPTION=")[1]
                        ? (credentials.iqEmail = String(line.split("EMAIL DA IQ OPTION=")[1]))
                        : "";
                    line.split("SENHA DA IQ OPTION=")[1]
                        ? (credentials.iqPassword = String(line.split("SENHA DA IQ OPTION=")[1]))
                        : "";
                    line.split("CHAVE DO TELEGRAM=")[1]
                        ? (credentials.telegramHash = String(line.split("CHAVE DO TELEGRAM=")[1]))
                        : "";
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, firebase_1.auth.signInWithEmailAndPassword(credentials.iqbotEmail, credentials.iqbotPassword)];
            case 2:
                _a.sent();
                return [4 /*yield*/, firebase_1.firestore.collection('signals').where("date", "==", moment_1.default().utc().format("DD/MM/YYYY")).get()];
            case 3:
                firestoreQuery = _a.sent();
                signals = firestoreQuery.docs.map(function (x) { return x.data(); });
                credentials.auth = true;
                // @ts-ignore
                credentials.signals = String(signals[0].signals).replace(/\s/g, '');
                return [2 /*return*/, credentials];
            case 4:
                error_1 = _a.sent();
                console.log('Erro ao logar no firebase: ', error_1.code);
                return [2 /*return*/, credentials];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.handleAuth = handleAuth;
//# sourceMappingURL=credentials.js.map