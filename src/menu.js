let menu = [
  { 'header': 'Admin' },
  { 'href': '/', 'title': 'Home', 'icon': 'home' },
  {
    'title': '授权客户端管理',
    'icon': 'domain',
    'items': [
      { 'href': '/crud/resource', 'title': '资源服务管理' },
      { 'href': '/crud/scope', 'title': '作用域管理' },
      { 'href': '/client', 'title': '客户端管理' }
    ]
  },
  {
    'title': '权限管理',
    'icon': 'people',
    'items': [
      { 'href': '/crud/role', 'title': '角色管理' },
      { 'href': '/authority', 'title': '权限管理' },
      { 'href': '/user', 'title': '用户管理' }
    ]
  },
  { divider: true },
  { 'header': 'System' },
  { 'href': '/settings', 'title': 'Settings', 'icon': 'settings' },
  { 'href': '/login', 'icon': 'lock', 'title': 'Logout' }
]

export default menu
