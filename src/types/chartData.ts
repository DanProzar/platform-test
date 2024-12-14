export interface ChartData {
  titles: string[]
  data: {
    name: string
    color: string
    values: number[]
    total: number
  }[]
}