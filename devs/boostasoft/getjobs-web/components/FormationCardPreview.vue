<template>
  <div class="flex flex-col">
    <div class="h-[200px] bg-gray-600">

    </div>
    <h4 class="text-lg font-bold mt-3">{{ title }}</h4>
    <p class="opacity-70 text-sm">
      {{ desc }}
    </p>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  desc: String
})
</script>
