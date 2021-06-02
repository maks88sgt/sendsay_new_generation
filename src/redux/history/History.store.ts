export class HistoryStore {
    current: HistoryItemType[];

    constructor() {
      this.current = [];
    }
}

export type HistoryItemType = {
    name?: string;
    request: string;
    response: string;
    success: boolean;
}