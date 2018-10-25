<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <widget-drawer :configuration="configuration" />
  </q-page>
</template>

<style>
</style>

<script>
import WidgetDrawer from '../components/WidgetDrawer'

export default {
  name: 'PageIndex',
  components: {
    'widget-drawer': WidgetDrawer
  },
  computed: {
    configuration () {
      if (!this.$dashboardContext) return null

      const config = this.$dashboardContext.configurationService.getConfiguration()

      return config
      // this.$context;
    }
  }
}
</script>
