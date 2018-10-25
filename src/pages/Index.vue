<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <webview-widget src="http://www.youtube.com/embed/eCfDxZxTBW4" />
  </q-page>
</template>

<style>
</style>

<script>
import WebviewWidget from '../components/WebviewWidget'

export default {
  name: 'PageIndex',
  components: {
    'webview-widget': WebviewWidget
  }
}
</script>
