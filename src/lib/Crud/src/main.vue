<template lang="pug" src="./main.pug">
</template>
<style>
  .speed-dial {
    position: absolute;
  }

  .btn--floating {
    position: relative;
  }
</style>

<script>
  import {EntityList, EntityDelete, EntityAdd, EntityInfo, EntityUpdate} from '../../Utils/Entity'
  export default {
    name: 'IoCrud',
    props: {
      entity: {
        type: String,
        default: '',
        required: true
      },
      baseUrl: {
        type: String,
        default: ''
      },
      selectedKey: {
        type: String,
        default: 'id'
      },
      formConfig: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        selected: [],
        headers: [],
        items: [],
        pagination: {},
        totalItems: 0,
        editDisabled: true,
        deleteDisabled: true,
        direction: 'left',
        dial: false,
        addDialog: false,
        addEntityInput: {},
        editEntityInput: {},
        editDialog: false,
        valid: false
      }
    },
    watch: {
      pagination () {
        this.getList()
      },
      selected () {
        let length = this.selected.length
        if (length === 0) {
          this.editDisabled = true
          this.deleteDisabled = true
        } else if (length === 1) {
          this.editDisabled = false
          this.deleteDisabled = false
        } else {
          this.editDisabled = true
          this.deleteDisabled = false
        }
      },
      entity () {
        this.getList()
      }
    },
    methods: {
      change (item, values) {
        this.$emit('select', item, values)
      },
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      },
      getList () {
        this.selected = []
        if (!this.pagination.rowsPerPage) {
          this.pagination.rowsPerPage = 10
        }
        if (!this.pagination.page) {
          this.pagination.page = 1
        }
        let params = {
          page: this.pagination.page,
          pageSize: this.pagination.rowsPerPage
        }
        EntityList(this.entity, params, {
          onSuccess: (data) => {
            this.headers = []
            for (let i = 0; i < this.formConfig.data.length; i++) {
              let keyName = this.formConfig.data[i].name
              if (typeof this.formConfig.data[i].hidden === 'boolean' && this.formConfig.data[i].hidden) {
                continue
              }
              let item = {
                text: this.formConfig.data[i].title,
                value: keyName
              }
              this.headers.push(item)
            }

            this.items = []
            for (let i = 0; i < data.list.length; i++) {
              let newItem = {}
              let item = data.list[i]
              for (let j = 0; j < this.headers.length; j++) {
                newItem[this.headers[j].value] = item[this.headers[j].value]
              }
              if (typeof newItem[this.selectedKey] === 'undefined') {
                newItem[this.selectedKey] = item[this.selectedKey]
              }
              this.items.push(newItem)
            }
            this.totalItems = data.total
          }
        }, this.baseUrl)
      },
      addEntity () {
        if (typeof this.formConfig.data !== 'object') {
          return
        }
        for (let i = 0; i < this.formConfig.data.length; i++) {
          this.$set(this.addEntityInput, this.formConfig.data[i].name, this.formConfig.data[i].value)
        }
        this.addDialog = true
      },
      addEntityDo () {
        if (!this.$refs.addForm.validate()) {
          return false
        }

        let input = {}
        for (let item in this.addEntityInput) {
          if (typeof this.addEntityInput[item] === 'boolean') {
            input[item] = (this.addEntityInput[item]) ? 1 : 0
          } else {
            input[item] = this.addEntityInput[item]
          }
        }

        EntityAdd(this.entity, input, {
          onSuccess: (data) => {
            this.getList()
            this.addDialog = false
            this.$message('添加成功')
          }
        }, this.baseUrl)
      },
      editEntity () {
        let that = this
        EntityInfo(this.entity, {id: this.selected[0][this.selectedKey]}, {
          onSuccess (data) {
            for (let i in data) {
              that.$set(that.editEntityInput, i, data[i])
            }
            that.editDialog = true
          }
        }, this.baseUrl)
      },
      editEntityDo () {
        if (!this.$refs.editForm.validate()) {
          return false
        }

        let input = {}
        for (let item in this.editEntityInput) {
          if (typeof this.editEntityInput[item] === 'boolean') {
            input[item] = (this.editEntityInput[item]) ? 1 : 0
          } else {
            input[item] = this.editEntityInput[item]
          }
        }
        EntityUpdate(this.entity, input, {
          onSuccess: (data) => {
            this.getList()
            this.editDialog = false
            this.$message('编辑成功')
          }
        }, this.baseUrl)
      },
      deleteEntity () {
        let ids = []
        this.selected.map(r => ids.push(r[this.selectedKey]))
        EntityDelete(this.entity, {ids: ids.join(',')}, {
          onSuccess: (data) => {
            this.getList()
          }
        }, this.baseUrl)
      }
    },
    mounted: function () {
      this.getList()
    },
    computed: {
      addRules () {
        let rules = {}
        for (let i = 0; i < this.formConfig.data.length; i++) {
          let keyName = this.formConfig.data[i].name
          if (this.formConfig.data[i].scope.includes('add')) {
            rules[keyName] = this.formConfig.data[i].rules
          }
        }
        return rules
      },
      editRules () {
        let rules = {}
        for (let i = 0; i < this.formConfig.data.length; i++) {
          let keyName = this.formConfig.data[i].name
          if (this.formConfig.data[i].scope.includes('edit')) {
            rules[keyName] = this.formConfig.data[i].rules
          }
        }
        return rules
      }
    }
  }
</script>
