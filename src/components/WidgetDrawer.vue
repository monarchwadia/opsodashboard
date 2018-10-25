<template>
  <div>
    <div v-for="widget in widgets" v-bind:key="widget.id">
      <component v-bind:is="widget.component" :configuration="widget.configuration" :label="widget.label"/>
    </div>
  </div>
</template>

<style>

</style>

<script>
import WebviewWidget from './widgets/WebviewWidget'

const components = {
  'webview-widget': WebviewWidget
}

export default {
  name: 'WidgetDrawer',
  props: ['configuration'],
  components,
  computed: {
    widgets () {
      return this.configuration.widgets.map(({ id, label, widgetType, configuration }) => {
        const component = components[widgetType]
        return { id, label, component, configuration }
      })
    }
  }
}

</script>
