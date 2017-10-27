import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import ResourceData from './data/resource'

let _ResourceData = ResourceData

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)

    mock.onGet('/resource/list').reply((params) => {
      let {page, pageSize} = params.params
      let total = _ResourceData.length
      let _resourceData = _ResourceData.filter((res, index) => {
        return index < pageSize * page && index >= pageSize * (page - 1)
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 0,
            status: 200,
            message: '',
            data: {
              total: total,
              list: _resourceData
            }
          }
          ])
        }, 100)
      })
    })

    mock.onPost('/resource/add').reply((params) => {
      _ResourceData.push(JSON.parse(params.data))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 0,
            status: 200,
            message: '',
            data: JSON.parse(params.data)
          }
          ])
        }, 100)
      })
    })

    mock.onPost('/resource/update').reply((params) => {
      let info = JSON.parse(params.data)
      _ResourceData.some(r => {
        if (r.id === info.id) {
          r.name = info.name
        }
        return true
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 0,
            status: 200,
            message: '',
            data: JSON.parse(params.data)
          }
          ])
        }, 100)
      })
    })

    mock.onDelete('/resource/delete').reply((params) => {
      let {ids} = params.params
      ids = ids.split(',')
      _ResourceData = _ResourceData.filter(r => !ids.includes(r.id))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 0,
            status: 200,
            message: '',
            data: null
          }
          ])
        }, 100)
      })
    })

    mock.onGet('/resource/info').reply((params) => {
      let {id} = params.params
      let result = _ResourceData.filter((res, index) => {
        return res.id === id
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 0,
            status: 200,
            message: '',
            data: result[0]
          }
          ])
        }, 100)
      })
    })
  }
}
