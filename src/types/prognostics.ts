interface PrognosticData {
  prognostic: number,
  maintenance: number,
  total: number
}

export interface Prognostics {
  totals: {
    engines: number
  },    
  time_remaining: {
    less_than_7_days: PrognosticData
    less_than_30_days: PrognosticData
    less_than_60_days: PrognosticData
    less_than_90_days: PrognosticData
  }
}