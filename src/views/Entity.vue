<template lang="pug" src="./pug/Entity.pug">
</template>

<script>
  import formConfigCommon from '../EntityFormConfig'
  import config from '../config'
  let baseUrl = config.baseUrl
  export default {
    data () {
      return {
        baseUrl: baseUrl,
        selectedKey: 'id'
      }
    },
    computed: {
      entity () {
        return this.$route.params.entity
      },
      formConfig () {
        return formConfigCommon[this.entity]
      }
    }
  }
</script>
