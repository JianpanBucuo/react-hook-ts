import $api from './index'

export default {
  getExampleList() {
    return $api('/api/users')
  }
}
