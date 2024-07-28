<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const greetings = ref('')
const name = ref('')
const emotion = ref('')
const text = ref('')

async function fetchGreetings() {
  const res = await fetch(`/api/greetings/${name.value}`)
  const text = await res.text()
  greetings.value = text
}

async function fetchEmotion() {
  const res = await fetch(`/ai/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text.value })
  })

  const json = await res.json()
  emotion.value = JSON.stringify(json)
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div class="greetings-container">
    <h2>Recevoir des salutations du backend</h2>
    <label>Votre prénom</label>
    <input type="text" v-model="name" />
    <button @click="fetchGreetings">Saluer</button>

    <template v-if="greetings">
      <h2>Réponse</h2>
      <p>{{ greetings }}</p>
    </template>
  </div>

  <div class="emotion-container">
    <h2>Prédire mes émotions</h2>
    <input type="text" placeholder="Entrez votre texte ici" v-model="text" />
    <button @click="fetchEmotion">Prédire</button>

    <template v-if="emotion">
      <h2>Émotion</h2>
      <p>{{ emotion }}</p>
    </template>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.greetings-container {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  input {
    padding: 0.5em;
  }

  button {
    padding: 0.5em 1em;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
  }
}

.emotion-container {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  input {
    padding: 0.5em;
  }

  button {
    padding: 0.5em 1em;
    background-color: #646cff;
    color: white;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
  }
}
</style>
