<template>
  <iframe :src="src">

  </iframe>
</template>

<style>
</style>

<script>

export default {
  name: 'WebviewPlugin',
  computed: {
    src () {
      return this.configuration.src
    }
  },
  props: {
    configuration: {
      required: true,
      type: Object
    }
  }
}

</script>
