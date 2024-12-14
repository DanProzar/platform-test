import { TChartProps } from "./TChatProps"
import { TDataTableProps } from "./TDataTableProps"

export interface TDashboardPanelProps {
  data: {
    chart: TChartProps,
    table: TDataTableProps
  }
}