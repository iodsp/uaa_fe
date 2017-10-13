<template lang="pug" src="./pug/Entity.pug">
</template>

<script>
  import formConfigCommon from '../EntityFormConfig'
  let baseUrl = 'http://localhost:8080'
  export default {
    data () {
      return {
        baseUrl: baseUrl,
        selectedKey: 'id'
      }
    },
    computed: {
      entity () {
        console.info(this.$route.params.entity)
        return this.$route.params.entity
      },
      formConfig () {
        return formConfigCommon[this.entity]
      }
    }
  }
</script>
