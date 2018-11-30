<style src="./ladda.scss" lang="scss"></style>

<script>
import * as Ladda from 'ladda'

export default {
  name: 'ladda-btn',
  props: {
    loading: {
      default: false
    },
    tag: {
      type: String,
      default: 'button'
    }
  },
  render (createElement) {
    const attrs = this.tag === 'button' ? { type: 'button' } : {}

    return createElement(
      this.tag,
      { attrs },
      this.$slots.default
    )
  },
  beforeDestroy () {
    if (!this.ladda) return
    this.ladda.remove()
    this.ladda = null
  },
  mounted () {
    this.ladda = Ladda.create(this.$el)
  },
  watch: {
    loading (value) {
      if (!this.ladda) return
      if (typeof value === 'boolean') {
        this.ladda[value ? 'start' : 'stop']()
      } else if (typeof value === 'number') {
        if (!this.ladda.isLoading()) {
          this.ladda.start()
        }

        this.ladda.setProgress(value)
      }
    }
  }
}
</script>
