import { Diagnostics, TDashboardPanelProps } from "@/types";
import { useChartData } from "./useChartData";

export const useDiagnostics = ({ severity, totals }: Diagnostics): TDashboardPanelProps['data'] => {
  const getValues = (
    data: {
      derated: number;
      shutdown: number;
      total: number;
    }
  ) => {
    return [data.derated, data.shutdown, data.total]
  }

  const tableConfig = {
    titles:  [
      'Severity',
      'Derated',
      'Shutdown',
      'Total'
    ],
    data: [
      {
        name: 'Immediate',
        color: 'error',
        values: getValues(severity.immediate),
        total: severity.immediate.total,
      },
      {
        name: 'Service in 3 days',
        color: 'warning',
        values: getValues(severity.service_3_days),
        total: severity.service_3_days.total,
      },
      {
        name: 'Service in 7 days',
        color: 'caution',
        values: getValues(severity.service_7_days),
        total: severity.service_7_days.total,
      },
      {
        name: 'Next PM',
        color: 'attention',
        values: getValues(severity.service_next_pm),
        total: severity.service_next_pm.total,
      },
    ]
  }

  return {
    table: tableConfig,
    chart: {
      data: useChartData({total: totals.engines, data: tableConfig.data}),
      tooltipText: 'This is the total number of engines with active diagnostic faults from the last 7 days.',
    },
  }
}
