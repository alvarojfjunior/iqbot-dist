import puppeteer from "puppeteer";
import { Context } from "telegraf";
import IQSignal from "./IQSignal";
export default class TradingBot {
    private readonly browser;
    private readonly page;
    private openAssetsQty;
    constructor(browser: puppeteer.Browser, page: puppeteer.Page);
    private clickComponent;
    private typeComponent;
    openAsset: (name: string) => Promise<void>;
    closeAsset: (options?: {
        force?: boolean | undefined;
    } | undefined) => Promise<void>;
    setAmount: (amount: number) => Promise<void>;
    setTime: (column: 1 | 2, row: number) => Promise<void>;
    clickHigher: () => Promise<void>;
    clickLower: () => Promise<void>;
    runSignal: (signal: IQSignal) => Promise<void>;
    getResult: (time: number, ctx: Context) => Promise<void>;
    closeBrowser: () => Promise<void>;
    sleep: (ms?: number) => Promise<unknown>;
}
//# sourceMappingURL=TradingBot.d.ts.map