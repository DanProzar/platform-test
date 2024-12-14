import { ChartData } from "@/types"
import { useTheme } from "vuetify"

export const useChartData = ({ total, data }: {total: number, data: ChartData['data']}) => {
  const theme = useTheme().current

  const config: {
    set: string[],
    colors: string[]
    total: number
  } = {
    set: [],
    colors: [],
    total: total,
  }

  for (const item of data) {
    config.set.push(item.total.toString())
    config.colors.push(theme.value.colors[item.color])
  }

  return config
}