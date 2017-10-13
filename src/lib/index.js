import MessageBox from './MessageBox'
import Message from './Message'
import Crud from './Crud'

const components = [
  MessageBox,
  Message,
  Crud
]

const install = (Vue, ops) => {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$message = Message
}

export default {
  install
}
