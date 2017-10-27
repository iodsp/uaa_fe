let config = {
  resource: {
    title: '资源授权服务',
    data: [
      {
        name: 'id',
        title: 'ID',
        type: 'text',
        value: '',
        hint: '填写合法的变量命名规则形式的名称',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['add']
      },
      {
        name: 'id',
        title: 'ID',
        type: 'hidden',
        value: '',
        hint: '',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['edit'],
        hidden: true
      },
      {
        name: 'name', // bb, name, 11222
        title: '名称',
        type: 'text',
        value: '',
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      }
    ]
  },
  scope: {
    title: '授权作用域服务',
    data: [
      {
        name: 'id',
        title: 'ID',
        type: 'text',
        value: '',
        hint: '填写合法的变量命名规则形式的名称',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['add']
      },
      {
        name: 'id',
        title: 'ID',
        type: 'hidden',
        value: '',
        hint: '',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['edit'],
        hidden: true
      },
      {
        name: 'name', // bb, name, 11222
        title: '名称',
        type: 'text',
        value: '',
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      }
    ]
  },
  client: {
    title: '授权客户端',
    data: [
      {
        name: 'id',
        title: 'ID',
        type: 'text',
        value: '',
        hint: '填写合法的变量命名规则形式的名称',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['add']
      },
      {
        name: 'id',
        title: 'ID',
        type: 'hidden',
        value: '',
        hint: '',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['edit'],
        hidden: true
      },
      {
        name: 'resourceIds',
        title: '授权资源',
        type: 'multiple_select',
        value: [],
        hint: '',
        rules: [
          (v) => (!!v && !!v.length) || '授权资源不能为空'
        ],
        scope: ['add', 'edit'],
        data: []
      },
      {
        name: 'clientSecret',
        title: '秘钥',
        type: 'text',
        value: '',
        hint: '',
        rules: [],
        scope: ['add'],
        hidden: true
      },
      {
        name: 'scope',
        title: '作用域',
        type: 'multiple_select',
        value: [],
        hint: '',
        rules: [
          (v) => (!!v && !!v.length) || '授权作用域不能为空'
        ],
        scope: ['add', 'edit'],
        data: []
      },
      {
        name: 'authorizedGrantTypes',
        title: '授权方式',
        type: 'multiple_select',
        value: [],
        hint: '',
        rules: [
          (v) => (!!v && !!v.length) || '授权方式不能为空'
        ],
        scope: ['add', 'edit'],
        data: [
          'implicit',
          'authorization_code',
          'refresh_token',
          'password',
          'client_credentials'
        ]
      },
      {
        name: 'webServerRedirectUri',
        title: '回调地址',
        type: 'text',
        value: '',
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      },
      {
        name: 'accessTokenValidity',
        title: 'token 有效期',
        type: 'slider',
        value: 6000,
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      },
      {
        name: 'refreshTokenValidity',
        title: 'token 刷新有效期',
        type: 'slider',
        value: 6000,
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      },
      {
        name: 'authorities',
        title: '授权信息',
        type: 'multiple_select',
        value: [],
        hint: '',
        rules: [],
        scope: ['add', 'edit'],
        data: [
          'auth1',
          'auth2'
        ]
      },
      {
        name: 'autoApprove',
        title: '自动授权方式',
        type: 'multiple_select',
        value: [],
        hint: '',
        rules: [],
        scope: ['add', 'edit'],
        data: [
        ]
      },
      {
        name: 'additionalInformation',
        title: '扩展信息',
        type: 'text',
        value: '',
        hint: '',
        hidden: true,
        rules: [],
        scope: ['add', 'edit']
      }
    ]
  },
  role: {
    title: '角色',
    data: [
      {
        name: 'name',
        title: '名称',
        type: 'text',
        value: '',
        hint: '填写合法的变量命名规则形式的名称',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['add']
      },
      {
        name: 'name',
        title: '名称',
        type: 'hidden',
        value: '',
        hint: '',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['edit'],
        hidden: true
      },
      {
        name: 'desc',
        title: '描述',
        type: 'text',
        value: '',
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      }
    ]
  },
  authority: {
    title: '权限',
    data: [
      {
        name: 'name',
        title: '名称',
        type: 'text',
        value: '',
        hint: '填写合法的变量命名规则形式的名称',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['add']
      },
      {
        name: 'name',
        title: '名称',
        type: 'hidden',
        value: '',
        hint: '',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['edit'],
        hidden: true
      },
      {
        name: 'roleIds',
        title: '所属角色',
        type: 'multiple_select',
        value: [],
        hint: '',
        rules: [
          (v) => (!!v && !!v.length) || '所属角色不能为空'
        ],
        scope: ['add', 'edit'],
        data: []
      },
      {
        name: 'desc',
        title: '描述',
        type: 'text',
        value: '',
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      }
    ]
  },
  user: {
    title: '用户',
    data: [
      {
        name: 'name',
        title: '名称',
        type: 'text',
        value: '',
        hint: '填写合法的变量命名规则形式的名称',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['add']
      },
      {
        name: 'name',
        title: '名称',
        type: 'hidden',
        value: '',
        hint: '',
        rules: [
          (v) => !!v || '名称不能为空',
          (v) => /^[A-Za-z]+[_-a-zA-Z0-9]*$/.test(v) || '名称命名不合法'
        ],
        scope: ['edit'],
        hidden: true
      },
      {
        name: 'roleIds',
        title: '所属角色',
        type: 'multiple_select',
        value: [],
        hint: '',
        rules: [
          (v) => (!!v && !!v.length) || '所属角色不能为空'
        ],
        scope: ['add', 'edit'],
        data: []
      },
      {
        name: 'password',
        title: '密码',
        type: 'text',
        value: '',
        hint: '',
        rules: [],
        scope: ['add', 'edit'],
        hidden: true
      },
      {
        name: 'enable',
        title: '是否启用',
        type: 'switch',
        value: true,
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      },
      {
        name: 'lock',
        title: '是否锁定',
        type: 'switch',
        value: false,
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      },
      {
        name: 'expired',
        title: '是否过期',
        type: 'switch',
        value: false,
        hint: '',
        rules: [],
        scope: ['add', 'edit']
      }
    ]
  }
}

export default config
