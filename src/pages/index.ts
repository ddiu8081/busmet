import store from '../store'
import { createPage } from '@mpxjs/core'

createPage({
  computed: {
    location () {
      return store.state.location
    }
  },
  onLoad () {
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        store.commit('updateLocation', res)
      }
    })
  }
})
