<template>
  <div class="introduce" :class="{ reverse: reverse }">
    <div class="introduce-wrap image">
      <slot name="image">
        <img :src="url" />
      </slot>
    </div>
    <div class="introduce-wrap info">
      <div class="info-wrap">
        <slot name="title">
          <h4 class="title">{{ title }}</h4>
        </slot>
        <slot name="content">
          <div class="content" v-html="content"></div>
        </slot>
        <div class="desc">
          <template v-for="(item, index) of info" :key="'desc' + index">
            <slot name="info" :info="item">
              <a :href="item.link" target="_blank" class="desc-item">
                <img class="desc-item-image" :src="item.url" />
                <p class="desc-item-title">{{ item.title }}</p>
              </a>
            </slot>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  props: {
    url: String,
    title: String,
    content: String,
    reverse: {
      type: Boolean,
      default: false,
    },
    info: Array,
  },
};
</script>

<style>
.introduce {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 30px;
}
.introduce-wrap {
  flex: 1;
  text-align: center;
}
.introduce .image img {
  width: 300px;
}
.title {
  font-size: 54px;
  text-align: left;
  line-height: 46px;
  color: #2e3a59;
  margin-bottom: 33px;
  font-weight: 700;
  font-family: GlowSansSC-ExtendedHeavy;
}
.content {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 1.25px;
  color: #336a99;
  font-family: PingFang SC;
  text-align: left;
  max-width: 450px;
  min-width: 300px;
}
.desc {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
}
.desc-item {
  width: 76px;
  height: 76px;
  background: #fff;
  box-shadow: 0 10.3151px 41.2606px rgb(0 0 0 / 5%);
  border-radius: 19px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
}
.desc-item-image {
  width: 30px;
  height: 30px;
  margin-bottom: 8px;
}
.desc-item-title{
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 1px;
  color: #2e3a59;
}
.reverse .image{
  order: 1;
}
.reverse .info{
  order: 0;
  display: flex;
  justify-content: flex-end;
}
</style>