<template>
  <div style="margin:20px 0 20px 0;">
    <component :is="componentName" />
  </div>
</template>

<script>
  export default {
    props: {
      componentName: { type: String, required: true }
    }
  }
</script>