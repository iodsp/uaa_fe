<template lang="pug" src="./main.pug">
</template>

<style>
  .el-message{box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);min-width:300px;padding:10px 12px;box-sizing:border-box;border-radius:2px;position:fixed;left:50%;top:20px;-ms-transform:translateX(-50%);transform:translateX(-50%);background-color:#fff;transition:opacity .3s,transform .4s;overflow:hidden}
</style>

<script>
  export default {
    data () {
      return {
        visible: false,
        message: '',
        onClose: null,
        timer: null,
        duration: 3000,
        success: true,
        info: false,
        warning: false,
        error: false,
        type: 'success'
      }
    },
    watch: {
      visible (val) {
        if (!val) {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
          if (typeof this.onClose === 'function') {
            this.onClose(this)
          }
        }
      }
    },
    methods: {
      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            this.visible = false
          }, this.duration)
        }
      },
      clearTimer () {
        clearTimeout(this.timer)
      }
    },
    mounted: function () {
      this.startTimer()
      let types = ['success', 'info', 'warning', 'error']
      types.forEach(type => {
        this[type] = false
      })
      this[this.type] = true
    }
  }
</script>
