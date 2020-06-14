import { createStore } from '@mpxjs/core'
const store = createStore({
  state: {
    location: {
      lat: 0,
      lng: 0
    }
  },
  mutations: {
    updateLocation (state, payload): void {
      console.log('updateLocation payload', payload)
      state.location.lat = payload.latitude
      state.location.lng = payload.longitude
    }
  }
})

export default store
