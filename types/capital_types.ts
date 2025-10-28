export type capitalDurationItems = 'year' | 'month';

export const CapitalPerf = {
    year: {
        duration: "year",
        items: [
            {title:"Earned Interest (YTD)", color: "bg-blue-600", percent: 41,},
            {title: "Stacking / Yield",  color:"bg-blue-400", percent: 18},
            {title: "Idle Capital",  color: "bg-sky-400", percent: 29},
            {title: "Fee & Ops",  color: "bg-sky-200", percent: 12},
        ],
    },
    month : {
        duration: "month",
        items: [
            {title:"Earned Interest (YTD)", color: "bg-blue-600", percent: 35 },
            {title: "Stacking / Yield",  color:"bg-blue-400", percent: 15 },
            {title: "Idle Capital",  color: "bg-sky-400", percent: 40 },
            {title: "Fee & Ops",  color: "bg-sky-200", percent: 10 },
        ],
    }
}