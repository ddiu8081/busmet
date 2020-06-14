import { createComponent } from '@mpxjs/core'
declare function requirePlugin<T>(name: string): T

createComponent({
  data: {
    listData: ['附近公交', '地铁图']
  },
  methods: {
    handleTap1 (): void {
      requirePlugin('subway')
      const key = 'VRCBZ-TC56I-ZO3GO-5KFML-D4ZH2-2ABUW'
      const referer = 'BusMet'
      wx.navigateTo({
        url: 'plugin://subway/index?key=' + key + '&referer=' + referer
      })
    }
  }
})
