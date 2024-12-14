<script lang="ts" setup>
import { THeaderProps } from '@/types'

const { data } = defineProps<THeaderProps>()

const info = [
  {
    title: data.engines,
    description: 'Total engines'
  },
  {
    title: data.immediate_faults,
    description: 'Immediate faults'
  },
  {
    title: data.critical_predictive_insights,
    description: 'Critical predictive insights'
  },
]
</script> 

<template>
  <div class="t-header t-panel">
    <div
      class="t-header-column"
      v-for="item in info"
      :key="item.description"
    >
      <div class="t-header-card">
        <p class="t-header-card__title">
          {{ item.title }}
        </p>
        <p class="t-header-card__description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.t-header {
  @apply
    w-full
    flex
    justify-between
    pt-6
    pb-5
  ;

  &-column {
    @apply flex-1;
  }

  &-card {
    @apply text-center;

    &__title {
      @apply text-2xl;
    }
    
    &__description {
      @apply mt-[0.75] text-[0.875rem];
    }
  }
}
</style>
