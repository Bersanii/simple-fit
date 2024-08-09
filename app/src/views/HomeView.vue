<script setup lang="ts">
import { useRouter, useRoute, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

const footer = ref<HTMLInputElement | null>(null)
const contentHeight = ref(0)

function redirect(name: string) {
  router.push({ name })
}

function getColor(name: string) {
  return route.name?.toString() == name ? 'orange-darken-3' : 'white'
}

onMounted(() => {
  contentHeight.value = window.innerHeight - (footer.value?.offsetHeight || 0)
})
</script>

<template>
  <div class="bg-grey-darken-4 text-white" :style="{ height: `${contentHeight}px`, overflowY: 'auto' }">
    <RouterView />
  </div>

  <footer ref="footer" class="bg-grey-darken-3 text-white d-flex justify-space-around align-center pa-2">
    <v-btn 
      :color="getColor('home')"  
      icon="mdi-home" 
      variant="text" 
      @click="redirect('home')"
    />
    <v-btn 
      :color="getColor('add')" 
      icon="mdi-playlist-plus" 
      variant="text" 
      @click="redirect('add')" 
    />
    <v-btn 
      color="orange-darken-3" 
      icon="mdi-play" 
      size="large" 
      variant="outlined"
      @click="redirect('play')" 
    />
    <v-btn 
      :color="getColor('treinos')" 
      icon="mdi-dumbbell" 
      variant="text"
      @click="redirect('treinos')"
    />
    <v-btn 
      :color="getColor('config')"  
      icon="mdi-cog" 
      variant="text" 
      @click="redirect('config')"
    />
  </footer>
</template>
