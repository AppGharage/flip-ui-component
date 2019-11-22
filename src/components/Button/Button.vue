<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "FlipButton",
  props: {
    label: { type: String, required: true }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
