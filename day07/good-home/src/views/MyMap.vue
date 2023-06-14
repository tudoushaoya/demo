<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig = {
  securityJsCode: 'de2769a0cac843274ea604357474c2f4'
}
export default {
  data () {
    return {
      map: null,
      currentPosition: null
    }
  },
  methods: {
    initMap () {
      AMapLoader.load({
        key: '2b7eefadf29e4edee1bcd0423d105483', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map('container', { // 设置地图容器id
          viewMode: '2D', // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [103.984796, 30.719463] // 初始化地图中心点位置
          // city: '北京' // 城市，默认：“全国”
        })
      }).catch(e => {
        console.log(e)
      })
    }
    // getCurrentPosition () {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //       // 获取经纬度信息
    //       const { latitude, longitude } = position.coords
    //       // 使用高德地图的逆地理编码功能获取详细地址信息
    //       AMap.plugin('AMap.Geocoder', () => {
    //         const geocoder = new AMap.Geocoder()
    //         geocoder.getAddress([longitude, latitude], (status, result) => {
    //           if (status === 'complete' && result.info === 'OK') {
    //             const address = result.regeocode.formattedAddress
    //             this.currentPosition = address
    //           }
    //         })
    //       })
    //     })
    //   } else {
    //     console.log('浏览器不支持地理定位功能')
    //   }
    // }
  },
  mounted () {
    this.initMap()
    // this.getCurrentPosition()
  }

}
</script>

<style lang="less" scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
}
</style>
