<template lang="pug" src="./pug/User.pug">
</template>

<script>
  import formConfigCommon from '../EntityFormConfig'
  import {EntityList} from '../lib/Utils/Entity'
  import config from '../config'
  let baseUrl = config.baseUrl
  export default {
    data () {
      return {
        entity: 'user',
        baseUrl: baseUrl,
        selectedKey: 'id'
      }
    },
    computed: {
      formConfig () {
        let roles = []
        let params = {
          isAll: 1
        }
        EntityList('role', params, {
          onSuccess: (data) => {
            for (let i = 0; i < data.list.length; i++) {
              let item = data.list[i]
              roles.push({text: item.name, value: item.id})
            }
            this.formConfig.data.some(item => {
              if (item.name === 'roleIds') {
                item.data = roles
              }
            })
          }
        }, this.baseUrl)
        return formConfigCommon[this.entity]
      }
    }
  }
</script>

