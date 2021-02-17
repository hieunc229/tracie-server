export type DataGroupType = { [name: string]: number };

export function createGroup(data: (string | number)[], type?: "week" | "month" | "day" | "hour" | "minute") {

    let dates = data.map(d => new Date(d));
    dates.sort((a, b) => a.getTime() - b.getTime());

    const len = subLength[type || "day"];

    return dates.map(d => d.toISOString()).reduce((groups: DataGroupType, time) => {
        const date = time.substr(0, len);
        if (!groups[date]) {
            groups[date] = 0;
        }
        groups[date]++;
        return groups;
    }, {});
}


const subLength = {
    week: 40,
    month: 40,
    day: 10,
    hour: 13,
    minute: 16
}