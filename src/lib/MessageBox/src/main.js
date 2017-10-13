import Vue from 'vue'
import messageBoxVue from './main.vue'

const MessageBoxConstructor = Vue.extend(messageBoxVue)

let instance

const MessageBox = () => {
  if (!instance) {
    instance = new MessageBoxConstructor({
      el: document.createElement('div')
    })
  }
}

export default MessageBox
