import { createComponent } from '@mpxjs/core'

createComponent({
  properties: {
    location: Object
  },
  data: {
    markers: [{
      iconPath: '/resources/others.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }]
  },
  markertap (e: AnyObject) {
    console.log(e.detail.markerId)
  },
  controltap (e: AnyObject) {
    console.log(e.detail.controlId)
  }
})
