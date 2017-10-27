<template lang="pug" src="./pug/Client.pug">
</template>

<script>
  import formConfigCommon from '../EntityFormConfig'
  import {EntityList} from '../lib/Utils/Entity'
  import config from '../config'
  let baseUrl = config.baseUrl
  export default {
    data () {
      return {
        entity: 'client',
        baseUrl: baseUrl,
        selectedKey: 'id'
      }
    },
    methods: {
      select (item, values) {
        if (item.name !== 'scope') {
          return
        }
        this.formConfig.data.some(item => {
          if (item.name === 'autoApprove') {
            item.data = values
          }
        })
      }
    },
    computed: {
      formConfig () {
        let resources = []
        let params = {
          isAll: 1
        }
        EntityList('resource', params, {
          onSuccess: (data) => {
            for (let i = 0; i < data.list.length; i++) {
              let item = data.list[i]
              resources.push(item.id)
            }
            this.formConfig.data.some(item => {
              if (item.name === 'resourceIds') {
                item.data = resources
              }
            })
          }
        }, this.baseUrl)
        EntityList('scope', params, {
          onSuccess: (data) => {
            for (let i = 0; i < data.list.length; i++) {
              let item = data.list[i]
              resources.push(item.id)
            }
            this.formConfig.data.some(item => {
              if (item.name === 'scope') {
                item.data = resources
              }
            })
          }
        }, this.baseUrl)
        return formConfigCommon[this.entity]
      }
    }
  }
</script>

