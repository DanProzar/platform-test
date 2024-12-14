import { ChartData, Prognostics, TDashboardPanelProps } from "@/types";
import { useChartData } from "./useChartData";

export const usePropgnostics = ({ time_remaining, totals }: Prognostics): TDashboardPanelProps['data'] => {
  const getValues = (
    data: {
      maintenance: number;
      prognostic: number;
      total: number;
    }
  ) => {
    return [data.maintenance, data.prognostic, data.total]
  }

  const tableConfig: ChartData = {
    titles:  [
      'Time remaining',
      'Prognostic',
      'Maintenance',
      'Total'
    ],
    data: [
      {
        name: 'Less than 1 week',
        color: 'error',
        values: getValues(time_remaining.less_than_7_days),
        total: time_remaining.less_than_7_days.total,
      },
      {
        name: 'Less than 30 days',
        color: 'warning',
        values: getValues(time_remaining.less_than_30_days),
        total: time_remaining.less_than_30_days.total,
      },
      {
        name: 'Less than 60 days',
        color: 'caution',
        values: getValues(time_remaining.less_than_60_days),
        total: time_remaining.less_than_60_days.total,
      },
      {
        name: 'Less than 90 days',
        color: 'attention',
        values: getValues(time_remaining.less_than_90_days),
        total: time_remaining.less_than_90_days.total,
      },
    ],
  }
  
  return {
    table: tableConfig,
    chart: {
      data: useChartData({total: totals.engines, data: tableConfig.data}),
      tooltipText: 'This is the total number of engines with active predictive insights from the last 90 days.',
    },
  }
}
