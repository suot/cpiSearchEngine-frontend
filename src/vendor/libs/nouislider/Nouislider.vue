<template>
  <div></div>
</template>

<style src="./nouislider.scss" lang="scss"></style>

<script>
import noUiSlider from 'nouislider'

export default {
  name: 'nouislider',
  props: [
    'value',
    'options',
    'disabled'
  ],
  mounted () {
    this.initSlider(this.options)
  },
  beforeDestroy () {
    this.destroySlider()
    this._oldValue = null
  },
  watch: {
    value (value) {
      if (value.join(';') === this._oldValue) return

      this._oldValue = value.join(';')
      this.$el.noUiSlider.set(value)
    },
    options (options) {
      // Reinitialize slider
      this.destroySlider()
      this.initSlider(options)
    },
    disabled (isDisabled) {
      this.disableSlider(isDisabled)
    }
  },
  methods: {
    initSlider (options) {
      // Set start value
      if (options) {
        options.start = this.value
      } else {
        options = { start: this.value }
      }

      // Initialize slider
      noUiSlider.create(this.$el, options)

      // Update value on slide change
      this.$el.noUiSlider.on('set', (...args) => {
        if (args[0].join(';') === this._oldValue) return

        this._oldValue = args[0].join(';')
        this.$emit('input', args[0])
        this.$emit('set', args[0])
      })

      // Events
      this.$el.noUiSlider.on('update', (...args) => this.$emit('update', args))
      this.$el.noUiSlider.on('slide', (...args) => this.$emit('slide', args))
      this.$el.noUiSlider.on('change', (...args) => this.$emit('change', args))
      this.$el.noUiSlider.on('start', (...args) => this.$emit('start', args))
      this.$el.noUiSlider.on('end', (...args) => this.$emit('end', args))

      // Disable on init
      this.disableSlider(this.disabled)
    },

    disableSlider (isDisabled) {
      if (isDisabled) {
        this.$el.setAttribute('disabled', 'disabled')
      } else {
        this.$el.removeAttribute('disabled')
      }
    },

    destroySlider () {
      this.$el.noUiSlider.off()
      this.$el.noUiSlider.destroy()
    }
  }
}
</script>
