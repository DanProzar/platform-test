<script setup lang="ts">
import db from './data.json'
import { provide, ref } from 'vue';
import { THeader } from '@/components/THeader'
import { TCard } from './components/TCard';
import { TDashboardPanel } from '@/components/TDashboardPanel'
import { VSnackbar } from 'vuetify/components/VSnackbar';
import { useDiagnostics } from './composables/useDiagnostics';
import { usePropgnostics } from './composables/usePrognostics';
import { TDataTableClickEvent } from './types';

const snackbarDiagnostic = ref(false)
const snackbarPrognostic = ref(false)
const snackbarTableValue = ref(false)

const diagnosticDashboardData = useDiagnostics(db.data.diagnostics)
const prognosticDashboardData = usePropgnostics(db.data.prognostics)

const diagnosticViewHandler = () => {
  snackbarDiagnostic.value = true
}

const prognosticViewHandler = () => {
  snackbarPrognostic.value = true
}

const clickValueHandler = (_: TDataTableClickEvent) => {
  snackbarTableValue.value = true
}

provide('clickValueHandler', clickValueHandler)

</script>

<template>
  <div class="t-app">
    <div class="t-app__container">
      <THeader class="t-app__header" :data="db.data.totals" />

      <TCard title="Diagnostics" @view="diagnosticViewHandler">
        <TDashboardPanel :data="diagnosticDashboardData" />
      </TCard>

      <TCard title="Predictive Insights" @view="prognosticViewHandler">
        <TDashboardPanel :data="prognosticDashboardData" />
      </TCard>
        
      <v-snackbar
        v-model="snackbarDiagnostic"
        tile
        location="top center"
      >
        View button clicked
      </v-snackbar>

      <v-snackbar
        v-model="snackbarPrognostic"
        tile
        location="top center"
      >
        View button clicked
      </v-snackbar>
      
      <v-snackbar
        v-model="snackbarTableValue"
        tile
        location="top center"
      >
        Clicked
      </v-snackbar>
    </div>
  </div>
</template>

<style lang="scss">
.t-app {
  &__header {
    @apply md:col-span-2;
  }

  &__container {
    @apply max-w-[71.5rem] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 ;
  }
}
</style>
