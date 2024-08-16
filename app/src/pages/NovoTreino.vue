<script lang="ts" setup>
import { ref } from 'vue'
import { Treino } from '@/databases/entities/treino'
import { EspecificacaoExercicio } from '@/databases/entities';
import PickerExercicio from '@/components/PickerExercicio.vue';

// const PickerExercicioComponent = ref<HTMLInputElement | null>(null)

// function pickExercicio () {
//     console.log(PickerExercicioComponent.value)
//     PickerExercicioComponent.open()
// }

const pickerExercicio = ref<InstanceType<typeof PickerExercicio> | null>(null)

const form = ref({
  nome: {
    value: '',
    rules: [(value: string) => { return !!value ? true : 'Informe um nome para o treino.' }]
  }
})

function printEmit(exercicio: EspecificacaoExercicio) {
  console.log(exercicio)
}

function pickExercicio(){
  pickerExercicio.value?.open(printEmit)
}


</script>

<template>
  <PickerExercicio ref="pickerExercicio" />

  <div class="h-100 pt-2">
    <v-form @submit.prevent>
      <div class="d-flex w-100 align-center px-4">
        <v-btn icon="mdi-arrow-left" variant="text"></v-btn>

        <div class="ml-2 font-weight-black text-h6">Novo Treino</div>

        <v-spacer></v-spacer>

        <v-btn type="submit" icon="mdi-check" variant="text" color="green"></v-btn>
      </div>

      <v-divider class="my-2"></v-divider>

      <div class="px-5 pt-5">

        <v-text-field v-model="form.nome.value" :rules="form.nome.rules" label="Nome" variant="outlined"
          color="orange"></v-text-field>

        <div class="d-flex align-center">
          <div class="text-h5 ">
            Exercicios
          </div>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-plus" variant="text" @click="pickExercicio"></v-btn>
        </div>
        <v-divider class="my-2"></v-divider>

      </div>

    </v-form>
  </div>
</template>