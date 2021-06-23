declare type StepName = "LAUNCH" | "INIT PAGE" | "SIGN IN" | "TRADE ROOM" | "SIGNAL" | "BOT ANALYSIS";
declare class Ora {
    private readonly stepName;
    private readonly ora;
    constructor(stepName: StepName);
    private formatText;
    start: (text: string) => this;
    text: (text: string) => this;
    done: (text: string) => void;
}
export declare const stepOras: {
    [step in StepName]: Ora;
};
export {};
//# sourceMappingURL=ora.d.ts.map