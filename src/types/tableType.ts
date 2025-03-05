export interface TableDataTypes {
  COLUMN: Record<string, string>;
  ROWS: {
    [key: string]: string;
  }[];
}
