<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{ seller.name }}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score" />
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>

        </div>
        <ul class="remark">

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import star from "../star/star";
import BScroll from "better-scroll";
export default {
  props: {
    seller: {
      type: Object,
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // betterscroller
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.seller, {
          click: true,
        });
      } else {
        this.scroll.refresh();
      }
    },
  },
  components: {
    star,
  },
};
</script>
<style lang="stylus" scoped>
.seller
    position absolute
    top 174px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .overview
      position relative
      padding 18px
      .title
        margin-bottom 8px
        line-height 14px
        color rgb(7,17,27)
        font-size 14px
      .desc
        padding-bottom 18px
        border-1px(rgba(7,17,27,0.1))
        font-size 0
        .star
          display inline-block
          margin-right 8px
          vertical-align top
</style>
