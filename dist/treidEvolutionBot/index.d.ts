import Puppeteer from "puppeteer";
import IQSignal from "../iqbot/classes/IQSignal";
export default class treidEvolutionBot {
    private readonly browser;
    private readonly page;
    constructor(browser: Puppeteer.Browser, page: Puppeteer.Page);
    disconnet: () => Promise<void>;
    validadeSignal: (signal: IQSignal) => Promise<boolean>;
}
//# sourceMappingURL=index.d.ts.map