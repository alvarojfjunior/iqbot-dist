import { TradingBot } from "./classes";
export { IQSignal } from "./classes";
declare type Connect = (credentials: {
    email: string;
    password: string;
}, cb?: (bot: TradingBot) => void, options?: {
    headless?: boolean;
    logs?: boolean;
}) => Promise<TradingBot>;
declare const iqbot: () => {
    connect: Connect;
};
export default iqbot;
//# sourceMappingURL=index.d.ts.map