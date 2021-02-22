export declare type DataGroupType = {
    [name: string]: number;
};
declare type TimeInterval = "week" | "month" | "day" | "hour" | "minute";
export declare function transformOutputData(data: (string | number)[], options: {
    start: Date;
    end: Date;
    interval: TimeInterval;
    intervalValue?: number;
}): any;
export {};
