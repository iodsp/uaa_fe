import axios from 'axios'

let baseUrl = ''

export const ResourceList = (params, callback) => {
  axios.get(`${baseUrl}/resource/list`, {
    params: params
  }).then((res) => {
    if (!res.data || res.status !== 200) {
      this.$message.error('网络错误')
      if (typeof callback.onError === 'function') {
        callback.onError(res)
      }
      return
    }
    if (res.data.code !== 0) {
      this.$message.error(res.data.message)
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

