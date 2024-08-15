<script lang="ts" setup>
import { ref } from 'vue'
import dataSourceSimpleFit from '@/databases/datasources/SimplefitDataSource';
import { EspecificacaoExercicio } from '@/databases/entities';

const model = defineModel({ type: Boolean })

const emit = defineEmits<{
  (e: 'change', exercicio: EspecificacaoExercicio): void
//   (e: 'update', value: string): void
}>()

function teste() {
    // emit('change', )
}


</script>

<template>
    <v-dialog v-model="model" transition="dialog-bottom-transition" fullscreen>
        <!-- <template v-slot:activator="{ props: activatorProps }">
            <v-btn prepend-icon="mdi-cog" size="small" text="Settings" v-bind="activatorProps"></v-btn>
        </template> -->

        <v-card class="mt-5 rounded-lg" color="grey-darken-4">
            <v-toolbar color="grey-darken-3">
                <v-btn icon="mdi-close" @click="model = false"></v-btn>

                <v-toolbar-title>Selecione um Exercicio</v-toolbar-title>
            </v-toolbar>

            <div class="bg-orange h-100" style="overflow-y: auto;">
               
            </div>
        </v-card>
    </v-dialog>
</template>