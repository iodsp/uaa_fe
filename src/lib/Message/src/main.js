import Vue from 'vue'
import MessageVue from './main.vue'

let MessageConstructor = Vue.extend(MessageVue)

let instance
let instances = []
let seed = 1
let zindex = 2000

let Message = (options) => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let userOnClose = options.onClose
  options.onClose = () => {
    Message.close(id, userOnClose)
  }

  let id = 'message_' + seed++
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = zindex++
  instances.push(instance)
  return instance.vm
}

['success', 'info', 'warning', 'error'].forEach(type => {
  Message[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.close = (id, userOnClose) => {
  for (let i = 0; i < instances.length; i++) {
    if (id !== instances[i].id) {
      continue
    }

    if (typeof userOnClose === 'function') {
      userOnClose(instances[i])
    }

    instances.splice(i, 1)
  }
}

export default Message
