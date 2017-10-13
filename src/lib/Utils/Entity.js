import axios from 'axios'
import Message from '../Message'

export const EntityList = (name, params, callback, baseUrl) => {
  axios.get(`${baseUrl}/${name}/list`, {
    params: params
  }).then((res) => {
    if (!res.data || res.status !== 200) {
      Message.error('网络错误')
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }
    if (res.data.code !== 0) {
      Message.error(res.data.message)
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }

    if (typeof callback.onSuccess === 'function') {
      callback.onSuccess(res.data.data)
    }
  })
}

export const EntityInfo = (name, params, callback, baseUrl) => {
  axios.get(`${baseUrl}/${name}/info`, {
    params: params
  }).then((res) => {
    console.info(res)
    if (!res.data || res.status !== 200) {
      Message.error('网络错误')
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }
    if (res.data.code !== 0) {
      Message.error(res.data.message)
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }

    if (typeof callback.onSuccess === 'function') {
      callback.onSuccess(res.data.data)
    }
  })
}

export const EntityDelete = (name, params, callback, baseUrl) => {
  axios.delete(`${baseUrl}/${name}/delete`, {
    params: params
  }).then((res) => {
    if (!res.data || res.status !== 200) {
      Message.error('网络错误')
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }
    if (res.data.code !== 0) {
      Message.error(res.data.message)
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }

    if (typeof callback.onSuccess === 'function') {
      callback.onSuccess(res.data.data)
    }
  })
}

export const EntityUpdate = (name, params, callback, baseUrl) => {
  axios.post(`${baseUrl}/${name}/update`, params).then((res) => {
    if (!res.data || res.status !== 200) {
      Message.error('网络错误')
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }
    if (res.data.code !== 0) {
      Message.error(res.data.message)
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }

    if (typeof callback.onSuccess === 'function') {
      callback.onSuccess(res.data.data)
    }
  })
}

export const EntityAdd = (name, params, callback, baseUrl) => {
  axios.post(`${baseUrl}/${name}/add`, params).then((res) => {
    if (!res.data || res.status !== 200) {
      Message.error('网络错误')
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }
    if (res.data.code !== 0) {
      Message.error(res.data.message)
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }

    if (typeof callback.onSuccess === 'function') {
      callback.onSuccess(res.data.data)
    }
  })
}
