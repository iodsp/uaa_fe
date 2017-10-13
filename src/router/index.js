import Vue from 'vue'
import Router from 'vue-router'

function route (path, file, name, children) {
  return {
    exact: true,
    path: path,
    name: name,
    children: children,
    component: () => import(`../views/${file}.vue`)
  }
}

Vue.use(Router)

export default new Router({
  base: __dirname,
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    route('/', 'Main', null, [
      route('/', 'Home', 'Home'),
      route('/client', 'Client', '客户端管理'),
      route('/authority', 'Authority', '权限管理'),
      route('/user', 'User', '用户管理'),
      route('/crud/:entity', 'Entity', 'Entity')
    ])
  ]
})
