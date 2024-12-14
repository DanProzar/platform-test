interface DiagnosticsData {
  derated: number,
  shutdown: number,
  total: number
}

export interface Diagnostics {
  totals: {
    engines: number
  },
  severity: {
    immediate: DiagnosticsData,
    service_3_days: DiagnosticsData,
    service_7_days: DiagnosticsData,
    service_next_pm: DiagnosticsData,
  }
}