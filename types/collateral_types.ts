export type collateralDurationItems = 'month' | "day" | "last 3 month" | "last 6 month";

type CollateralItems = {
    title: "Tokenized Real Estate" | "Crypto Collateral" | "Fiat-backed Notes/Bonds" | "Other RWAs",
    color:  "bg-blue-600" | "bg-blue-400" | "bg-sky-400" | "bg-sky-200",
    percent: number,
    growth: number
}


export const collateralCompositions = {
    day: {
        duration: "day",
        items: [
            {title:"Tokenized Real Estate", color: "bg-blue-600", percent: 55, growth: 0.6 },
            {title: "Crypto Collateral",  color:"bg-blue-400", percent: 30, growth: 0.9 },
            {title: "Fiat-backed Notes/Bonds",  color: "bg-sky-400", percent: 10, growth: 0.3 },
            {title: "Other RWAs",  color: "bg-sky-200", percent: 5, growth: 0.2 },
        ],
    },
    month: {
        duration: "month",
        items: [
            { title:"Tokenized Real Estate", color:  "bg-blue-600", percent: 60, growth: 3.4 },
            { title:"Tokenized Real Estate", color:  "bg-blue-400", percent: 25, growth: 2.1 },
            {title: "Fiat-backed Notes/Bonds",  color: "bg-sky-400", percent: 10, growth: 1.2 },
            {title: "Other RWAs",  color: "bg-sky-200", percent: 5, growth: 0.8 },
        ],
    },
    "last 3 month": {
        duration: "last 3 month",
        items: [
            { title:"Tokenized Real Estate", color:  "bg-blue-600", percent: 58, growth: 5.2 },
            { title:"Tokenized Real Estate", color:  "bg-blue-400", percent: 27, growth: 4.7 },
            {title: "Fiat-backed Notes/Bonds",  color: "bg-sky-400", percent: 9, growth: 1.1 },
            {title: "Other RWAs",  color: "bg-sky-200", percent: 6, growth: 0.9 },
        ],
    },
    "last 6 month": {
        duration: "last 6 month",
        items: [
            { title:"Tokenized Real Estate", color:  "bg-blue-600", percent: 52, growth: 8.9 },
            { title:"Tokenized Real Estate", color:  "bg-blue-400", percent: 32, growth: 7.6 },
            {title: "Fiat-backed Notes/Bonds",  color: "bg-sky-400", percent: 11, growth: 2.3 },
            {title: "Other RWAs",  color: "bg-sky-200", percent: 5, growth: 1.4 },
        ],
    },
}
