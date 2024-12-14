<script lang="ts" setup>
import { VTable } from 'vuetify/components/VTable';
import { TDataTableClickEvent, TDataTableProps } from '@/types'
import { inject } from 'vue';

const {data, titles} = defineProps<TDataTableProps>()

const clickValueHandler = inject<(data: TDataTableClickEvent) => void>('clickValueHandler')

</script>

<template>
  <v-table class="t-data-table">
    <thead>
      <tr>
        <th
          v-for="(title, i) in titles"
          :key="title"
          :class="`${i !== 0 ? 'text-center' : ''} font-bold`"
        >
          {{ title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(row, rowId) in data" :key="row.name">
        <td>
          <div class="t-data-table__label">
            <div :class="`t-data-table__indicator bg-${row.color}`"></div>
            <span>{{ row.name }}</span>
          </div>
        </td>

        <td
          v-for="(value, _, columnId) in row.values"
          :key="value"
          class="text-center font-bold"
        >
          <a
            class="underline cursor-pointer"
            @click.prevent="clickValueHandler?.({rowId, columnId})"
          >
            {{ value }}
          </a>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>


<style lang="scss">
.t-data-table {
  @apply text-xs;

  &__label {
    @apply flex items-center;
  }

  &__indicator {
    @apply w-2.5 h-2.5 rounded-[50%] mr-2;
  }
}
</style>