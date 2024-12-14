export interface TDataTableProps {
  titles: string[],
  data: {
    name: string
    color: string
    values: Record<string, any>
  }[]
}
export interface TDataTableClickEvent  { rowId: number; columnId: number | string}