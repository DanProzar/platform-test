<script lang="ts" setup>
import {VBtn} from 'vuetify/components/VBtn';

const { title } = defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: 'view'): void
}>()

const onView = () => emit('view')

</script>

<template>
  <div class="t-card t-panel">
    <div class="t-card__header">
      <p class="t-card__header-title">{{title}}</p>
      <VBtn :ripple="false" class="t-btn" @click="onView">View</VBtn>
    </div>

    <slot />
  </div>
</template>


<style lang="scss">
.t-card {
  @apply pt-4 pb-2.5 pl-6 pr-4;

  &__header {
    @apply flex justify-between;
    &-title {
      @apply text-primary text-lg font-[550];
    }
  }  
}
</style>