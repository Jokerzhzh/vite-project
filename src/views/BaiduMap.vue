<script setup lang="ts" name="BaiduMap">
import { nextTick, ref } from "vue";
import {
  BaiduMap,
  BmGeolocation,
  BmMapType,
  BmNavigation,
  BmOverviewMap,
  BmScale,
} from "vue-baidu-map-3x";

const ready = ({ BMap, map }: any) => {
  //  对地图进行自定义操作
  console.log("ready");
};

const center = ref<{ [key: string]: number }>({
  lng: 116.404,
  lat: 39.915,
});

const zoom = ref<number>(15);

const syncCenterAndZoom = (e: any) => {
  const { lng, lat } = e.target.getCenter();
  zoom.value = e.target.getZoom();
  nextTick(() => {
    center.value.lng = lng;
    center.value.lat = lat;
  });
};
</script>

<template>
  <!-- // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "rMZYG5OClvi7ZFlouFdq1qYzKiEb77dB",
  // v:'2.0',  // 默认使用3.0
  type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL) -->
  <div class="inputGroup">
    <el-input class="input" v-model="center.lng" />
    <el-input class="input" v-model="center.lat" />
    <el-input class="input" v-model="zoom" />
  </div>
  <baidu-map
    class="map"
    ak="rMZYG5OClvi7ZFlouFdq1qYzKiEb77dB"
    v="3.0"
    type="API"
    :center="center"
    :scroll-wheel-zoom="true"
    :zoom="zoom"
    @ready="ready"
    @moving="syncCenterAndZoom"
    @moveend="syncCenterAndZoom"
    @zoomend="syncCenterAndZoom"
  >
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-overview-map
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :isOpen="true"
    ></bm-overview-map>
    <bm-map-type
      :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
      anchor="BMAP_ANCHOR_TOP_LEFT"
    ></bm-map-type>
    <bm-geolocation
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :showAddressBar="true"
      :autoLocation="true"
    ></bm-geolocation>
  </baidu-map>
</template>

<style scoped lang="scss">
.inputGroup {
  display: flex;
  margin-bottom: 10px;
  .input {
    width: 200px;
    margin-right: 10px;
  }
}
.map {
  width: 100%;
  height: 840px;
}
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
</style>
