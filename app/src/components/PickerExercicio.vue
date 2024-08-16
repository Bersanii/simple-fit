<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import dataSourceSimpleFit from '@/databases/datasources/SimplefitDataSource';
import { EspecificacaoExercicio } from '@/databases/entities';

const opened = ref(false)
let callback: (x: EspecificacaoExercicio) => any = () => { }
let templatesExerciciosOriginal: EspecificacaoExercicio[] = []
let grupamentos: string[] = []
const templatesExercicios = ref<EspecificacaoExercicio[]>([])
const filter = ref({
    nome: '',
    grupamento: ''
})

function open(x: typeof callback) {
    callback = x
    opened.value = true
}

function selectEspecificacao(especificacao: EspecificacaoExercicio) {
    opened.value = false
    const deepclone: EspecificacaoExercicio = JSON.parse(JSON.stringify(especificacao))
    callback(deepclone)
}

function filtrar() {
    templatesExercicios.value = templatesExerciciosOriginal.filter(x => x.nome.includes(filter.value.nome) && (filter.value.grupamento == '' || x.grupamento == filter.value.grupamento))
}

onBeforeMount(async () => {
    console.log('before mount')

    const especificacaoExerciciorepository = dataSourceSimpleFit.getRepository(EspecificacaoExercicio)
    templatesExerciciosOriginal = await especificacaoExerciciorepository.find()
    templatesExercicios.value = templatesExerciciosOriginal

    grupamentos = templatesExerciciosOriginal.map(x => x.grupamento).filter(function (item, pos, self) {
        return self.indexOf(item) == pos
    })
    console.log(grupamentos)
})

defineExpose({
    open
})

</script>

<template>
    <v-dialog v-model="opened" transition="dialog-bottom-transition" fullscreen>
        <!-- <template v-slot:activator="{ props: activatorProps }">
            <v-btn prepend-icon="mdi-cog" size="small" text="Settings" v-bind="activatorProps"></v-btn>
        </template> -->

        <v-card class="mt-10 rounded-lg" color="grey-darken-4">
            <v-toolbar color="grey-darken-3">
                <v-btn icon="mdi-close" @click="opened = false"></v-btn>

                <v-toolbar-title>Selecione um Exercicio</v-toolbar-title>
            </v-toolbar>

            <div class="pa-2 d-flex">
                <v-text-field v-model="filter.nome" label="Nome" variant="solo-filled" density="comfortable"
                    color="orange" bg-color="grey-darken-3" hide-details @update:model-value="filtrar" />
                <v-select class="ml-2" v-model="filter.grupamento" label="Grupamento" :items="grupamentos"
                    variant="solo-filled" hide-details density="comfortable" bg-color="grey-darken-3" @update:model-value="filtrar" />
            </div>

            <div class="px-2 pb-10" style="overflow-y: auto;">
                <div class="mb-2" v-for="templateExercicio in templatesExercicios"
                    @click="selectEspecificacao(templateExercicio)">
                    <div>
                        {{ templateExercicio.nome }}
                    </div>
                    <div class="text-caption">
                        {{ templateExercicio.grupamento }}
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>