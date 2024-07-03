export declare function handleEvent(event: any): Promise<unknown>;
export declare const run: (events: any[]) => Promise<{
    status: string;
    message: string;
}>;
export default run;
