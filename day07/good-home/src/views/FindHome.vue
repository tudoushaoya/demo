<template>
  <div>
    <div class="top_nav">
      <div class="top_nav_left">
        <div class="top_nav_left_left">
          <span>上海</span>
          <van-icon name="play" class="top_left_icon" />
        </div>
        <div class="top_nav_left_right">
          <van-icon name="search" class="top_right_icon" />
          <span>请输入小区或地址</span>
        </div>
      </div>
      <van-icon name="location-o" class="top_nav_right" />
    </div>
    <van-dropdown-menu class="pull">
      <van-dropdown-item title="区域" ref="item">
        <!-- <van-cell center title="包邮">
            <template #right-icon>
              <van-switch size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              <van-switch size="24" active-color="#ee0a24" />
            </template>
          </van-cell> -->
        <!-- <van-picker show-toolbar :columns="columns" @confirm="onConfirm" cancel-button-text=" " confirm-button-text=" "/> -->
        <van-picker show-toolbar :columns="columns" @change="onChange" />
        <div>
          <van-button block @click="onConfirm" class="cancel">
            取消
          </van-button>
          <van-button type="primary" block @click="onConfirm" class="affirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="方式" ref="item">
        <van-picker
          show-toolbar
          :columns="columns1"
          @confirm="onConfirm"
          cancel-button-text=" "
          confirm-button-text=" "
        />
        <div>
          <van-button block @click="onConfirm" class="cancel">
            取消
          </van-button>
          <van-button type="primary" block @click="onConfirm" class="affirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="租金" ref="item">
        <van-picker
          show-toolbar
          :columns="columns1"
          @confirm="onConfirm"
          cancel-button-text=" "
          confirm-button-text=" "
        />
        <div>
          <van-button block @click="onConfirm" class="cancel">
            取消
          </van-button>
          <van-button type="primary" block @click="onConfirm" class="affirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="filterItem" @click.stop.native.prevent="showPopup">
        <van-picker
          show-toolbar
          :columns="columns1"
          @confirm="onConfirm"
          cancel-button-text=" "
          confirm-button-text=" "
        />
        <div>
          <van-button block @click="onConfirm" class="cancel">
            取消
          </van-button>
          <van-button type="primary" block @click="onConfirm" class="affirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '50%' }"
    >
    </van-popup>
    <div @click="showPopup1">123123</div>
    <div @click="showPopup">1231safjkldsf23</div>
    <van-popup v-model="show1" position="top" :style="{ height: '45%' }">
      <van-picker
        show-toolbar
        :columns="columns1"
        @confirm="onConfirm"
        cancel-button-text=" "
        confirm-button-text=" "
      />
      <div>
        <van-button block @click="onConfirm" class="cancel"> 取消 </van-button>
        <van-button type="primary" block @click="onConfirm" class="affirm">
          确认
        </van-button>
      </div>
    </van-popup>

  </div>
</template>

<script>
const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州']
}
export default {
  data () {
    return {
      value: 0,
      show: false,
      show1: false,
      columns1: [
        '杭州',
        '宁波',
        '温州',
        '绍兴',
        '湖州',
        '嘉兴',
        '金华',
        '衢州'
      ],
      columns: [{ values: Object.keys(cities) }, { values: cities['浙江'] }]
    }
  },
  methods: {
    onChange (picker, values) {
      picker.setColumnValues(1, cities[values[0]])
    },
    showPopup () {
      this.show = true
    },
    showPopup1 () {
      this.show1 = true
    }
  }
}
</script>

<style scoped lang='less'>
.van-popup--top {
  top: 115px;
}
.van-dropdown-menu__bar {
  width: 300px;
}
/deep/.van-dropdown-menu__item {
  width: 95px;
}
.pull {
  display: flex;
}
.pull_next {
  width: 100%;
}
.screen {
  line-height: 48px;
  padding-left: 20px;
}
.top_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 340px;
  height: 50px;
  // background-color: #fff;
  padding: 0 5px;
  background: #f6f5f6;
}
.top_nav_left {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-right: 10px;
  padding: 0 10px;
  height: 45px;
  flex: 1;
}
.top_nav_left_left {
  position: relative;
  margin-right: 30px;
}
.top_left_icon {
  position: absolute;
  top: 4px;
  left: 35px;
  transform: rotate(90deg);
  font-size: 12px;
  // margin-left: 5px;
  // margin-top: -20px;
}
.top_right_icon {
  margin-right: 5px;
  font-size: 18px;
}
.top_nav_right {
  font-size: 27px;
  color: #60b274;
}
.top_nav_left_right {
  border-left: solid 1px #ccc;
  padding-left: 9px;
}
.top_nav_left_right span {
  color: #9c9fa1;
}
.van-button--block {
  // width: 45%;
  display: inline-block;
}
.cancel {
  width: 125px;
}
.affirm {
  width: 250px;
}
/deep/.van-picker__toolbar {
  display: none;
}
</style>
