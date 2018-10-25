<template>
  <iframe :src="src">

  </iframe>
</template>

<script>
export default {
  name: 'WebviewPlugin',
  props: {
    src: {
      required: true,
      type: String
    }
  }
}
</script>

<style>
</style>
