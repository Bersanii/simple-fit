<script lang="ts" setup>
import { ref } from 'vue'
import { Treino } from '../databases/entities/treino'
import { Exercicio } from '../databases/entities/exercicio'

const e1 = new Exercicio()
e1.nome = 'Supino reto'
const e2 = new Exercicio()
e2.nome = 'Supino inclinado'

const a = new Treino()
a.nome = 'Peito'
a.exercicios = [e1, e2]

const b = new Treino()
b.nome = 'Perna'
b.exercicios = [e1, e2]
const treinos = [a, b]
</script>

<template>
    <div class="h-100 pt-2">
        <div class="d-flex w-100 align-center px-4">
            <div class="font-weight-black text-h6 text-orange-darken-3">TREINOS CADASTRADOS</div>
            <v-btn class="ml-auto" append-icon="mdi-plus-thick" variant="text">
                Criar
            </v-btn>
        </div>

        <v-carousel class="mt-2">
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
        </v-carousel>
    </div>
</template>