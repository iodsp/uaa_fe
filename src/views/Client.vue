<template lang="pug" src="./pug/Client.pug">
</template>

<script>
  import formConfigCommon from '../EntityFormConfig'
  import {EntityList} from '../lib/Utils/Entity'
  import ResourceData from '../mock/data/resource'
  let baseUrl = 'http://localhost:8080'
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
    mounted () {
      console.info(ResourceData)
      let str = ''
      ResourceData.map(item => {
        str += 'INSERT INTO uc_role (name, desc) VALUES(\'' + item.id + '\', \'' + item.name + '\');\n'
      })
      console.info(str)
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
            console.info(this.formConfig)
          }
        }, this.baseUrl)
        return formConfigCommon[this.entity]
      }
    }
  }
</script>

