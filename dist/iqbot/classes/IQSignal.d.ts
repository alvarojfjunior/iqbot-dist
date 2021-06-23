import moment from "moment";
import { IQSignalConfig } from "../types";
export default class IQSignal {
    readonly m: IQSignalConfig["m"];
    readonly pair: IQSignalConfig["pair"];
    private readonly _time;
    readonly action: IQSignalConfig["action"];
    constructor(config: IQSignalConfig);
    get name(): string;
    getTime: () => {
        moment: moment.Moment;
        s: number;
        m: number;
        h: number;
        remaining: number;
        hasPassed: boolean;
    };
    static parse: (text: string) => IQSignal[];
}
//# sourceMappingURL=IQSignal.d.ts.map