"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.firestore = void 0;
var app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyAkI8bnX9tiw-xMQKhMiL5NvhUTEkOBzBQ",
    authDomain: "iqbot-d2343.firebaseapp.com",
    projectId: "iqbot-d2343",
    storageBucket: "iqbot-d2343.appspot.com",
    messagingSenderId: "161582040100",
    appId: "1:161582040100:web:e8779b4b940ff6f81c04b1"
};
app_1.default.initializeApp(firebaseConfig);
exports.firestore = app_1.default.firestore();
exports.auth = app_1.default.auth();
//# sourceMappingURL=firebase.js.map