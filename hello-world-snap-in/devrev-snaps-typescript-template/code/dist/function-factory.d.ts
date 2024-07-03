export declare const functionFactory: {
    readonly on_work_creation: (events: any[]) => Promise<{
        status: string;
        message: string;
    }>;
};
export type FunctionFactoryType = keyof typeof functionFactory;
