<template>
  <div style="padding: 20px">
    <h2>API Demo</h2>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref({})

onMounted(async () => {
  const res = await axios.get(
    import.meta.env.VITE_API_URL + '/api/demo'
  )
  data.value = res.data
})
</script>
