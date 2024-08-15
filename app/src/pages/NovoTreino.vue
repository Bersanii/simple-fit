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

const PickerExercicioComponent = ref(false)

const form = ref({
    nome: {
        value: '',
        rules: [(value: string) => { return !!value ? true : 'Informe um nome para o treino.' }]
    }
})

function printEmit(exercicio: EspecificacaoExercicio) {
    console.log(exercicio)
}


</script>

<template>
    <PickerExercicio v-model="PickerExercicioComponent" @change="printEmit" />

    <div class="h-100 pt-2">
        <v-form @submit.prevent>
            <div class="d-flex w-100 align-center px-4">
                <v-btn type="submit" icon="mdi-arrow-left" variant="text"></v-btn>

                <div class="ml-2 font-weight-black text-h6">Novo Treino</div>

                <v-spacer></v-spacer>

                <v-btn type="submit" icon="mdi-check" variant="text" color="green"></v-btn>
            </div>

            <v-divider class="my-2"></v-divider>

            <div class="px-5 pt-5">

                <v-text-field v-model="form.nome.value" :rules="form.nome.rules" label="Nome" variant="outlined"
                    color="orange"></v-text-field>
            </div>

        </v-form>


        <!-- <v-carousel class="mt-2">
            <v-carousel-item v-for="treino in treinos">
                <v-card variant="elevated" color="grey-darken-3 rounded-lg mx-4 d-flex flex-column"
                    style="min-width: 50vw;">
                    <template v-slot:title>
                        <span class="font-weight-black">{{ treino.nome }}</span>
                    </template>
<div class="px-4 py-2 bg-grey-darken-2 flex-grow-1">
    <div v-for="exercicio in treino.exercicios">
        {{ exercicio.nome }}
    </div>
</div>
</v-card>
</v-carousel-item>
</v-carousel> -->
    </div>
</template>