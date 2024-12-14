<script lang="ts" setup>
import Chart from 'chart.js/auto';
import { TChartProps } from '@/types';
import { onMounted, ref } from 'vue';
import { VIcon } from 'vuetify/components/VIcon';
import { VTooltip } from 'vuetify/components/VTooltip';
import { mdiInformation } from '@mdi/js'

const { data } = defineProps<TChartProps>()

const chartRef = ref<HTMLCanvasElement | null>(null)
const openTooltip = ref(false)

const onOpenTooltip = () => {
  openTooltip.value = false
}

onMounted(() => {
  if (!chartRef.value) {
    return
  }

  new Chart(chartRef.value, {
    type: 'doughnut',
    options: {
      cutout: '70%',
      plugins: {
        tooltip: {
          enabled: false,
        }
      }
    },
    data: {
      datasets: [{
        data: data.set,
        backgroundColor: data.colors,
      }]
    }
  });
})
</script>

<template>
  <div class="t-chart">
    <canvas ref="chartRef" width="215" height="215"></canvas>

    <div v-if="data.total !== undefined" class="t-chart__info">
      <p class="t-chart__info-value">{{data.total}}</p>
      <div class="t-chart__info-description">
        <p  class="text-sm">Engines</p>

        <v-tooltip
          v-model="openTooltip"
          maxWidth="200"
          location="top right"
          :text="tooltipText"
          scrollStrategy="none"
          :openOnHover="false"
        >
        <template #activator="{props}">
          <v-icon
            v-bind="props"
            v-click-outside="{
              handler: onOpenTooltip
            }"
            class="t-chart__info-icon"
            size="small"
            :icon="mdiInformation"
            @mouseenter="openTooltip = true"
          />
        </template>
      </v-tooltip>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.t-chart {
  @apply w-[13.5rem] h-[13.5rem] m-auto relative flex items-center justify-center;

  &__info {
    @apply absolute flex flex-col;

    &-value {
      @apply text-3xl font-light text-center;
    }

    &-description {
      @apply m-auto inline-flex text-secondary text-center;
    }

    &-icon {
      @apply ml-1 text-secondary/[0.45];
    }
  }
}
</style>