<script lang="ts" setup>
import { TDashboardPanelProps } from '@/types';
import { TChart } from '../TChart'
import { TDataTable } from '../TDataTable'

const { data } = defineProps<TDashboardPanelProps>()

</script>

<template>
  <div class="t-dashboard-panel">
    <TChart v-bind="data.chart" />
    <TDataTable class="t-dashboard-panel__table" v-bind="data.table" />
  </div>
</template>


<style lang="scss">
.t-dashboard-panel {
  &__table {
    @apply mt-4;
  }
}
</style>