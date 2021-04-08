export interface Ticker {
    currency: String;
    rate: number;
}

export interface AppData {
    tickerSearchName: string;
    tickers: Ticker[];
    selectedTicker: Ticker | undefined;
}