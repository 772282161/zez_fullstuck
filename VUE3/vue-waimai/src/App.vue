<template>
  <div>
    <V-header :seller="seller"></V-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view>

      </router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import header from "./components/header/header.vue";
const response = require("./common/data/seller.json");
export default {
  data() {
    return {
      seller: {},
    };
  },
  created() {
    this.seller = Object.assign({}, this.seller, response.data);
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  computed: {},
  components: {
    "V-header": header,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl';
*
  margin 0
  padding 0
a
  text-decoration none
.tab
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7,17,27,0.5))
  .tab-item
    flex 1
    text-align center
    color rgb(77,85,93)
</style>
