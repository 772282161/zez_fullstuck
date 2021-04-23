<template>
  <el-carousel height="100vh">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="" />
    </el-carousel-item>
  </el-carousel>
  <Introduce v-for="item in info" :key="item.key" 
    :reverse="item.reverse" 
    :url="item.url" 
    :content="item.content"
    :info="item.info"
    :class="item.key"
  ></Introduce>
</template>

<script>
import { reactive, toRefs } from "vue";
import Introduce from './introduce.vue'

export default {
  setup() {
    const state = reactive({
      list: [
        "https://sf1-dycdn-tos.pstatp.com/obj/douyin-web-image/a7db3a996e5d778f0dcbd69cd4a1adc8",
        "https://sf1-dycdn-tos.pstatp.com/obj/douyin-web-image/b2f9c88d51ade3b9b4b1c414a1e84286",
      ],
      info: [
        {
          url:
            "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
          title: "关于博客",
          reverse: false,
          content:
            "<p>这是一次重零开始的尝试、是自主学习的开始、是发现兴趣源头。</p><p>重零开始至博客2.0的重构，学无止境，继续出发！采用最新VUE 3.0架构，脱离UI库，自主编写UI组件！大三上完成博客前端重构</p><p>博客布局及样式参考——Teambition</p><p>组件样式来自于——Element、Ant</p><p>音乐播放器部分样式参考——APlayer</p>",
          key: "about",
          info: [
            {
              title: "Vue",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
            },
            {
              title: "Laravel",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
            },
            {
              title: "ByUI",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
            },
          ],
        },
        {
          url:
            "https://iconfont.alicdn.com/t/56f85d77-57a9-435b-b3ae-ec344ff25691.png",
          title: "学习目标",
          content:
            "<p>只有不断的学习才能进步，而循序渐进才是我的学习思想。</p><p>有了明确的学习目标才能我有动力前进，在本项目重构之前，也荒废了一段时间，沉浸在自己的完成博客的喜悦中，殊不知这才是一个开始！</p>",
          key: "study",
          reverse: true,
          info: [
            {
              title: "熟悉Vue生态",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
            },
            {
              title: "编写Vue UI库",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
            },
            {
              title: "了解Vue原理",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
            },
            {
              title: "待续...",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
            },
          ],
        },
        {
          url:
            "https://iconfont.alicdn.com/t/f524cdcc-89ee-4236-8e81-7e010a250d53.png",
          title: "关于我",
          reverse: false,
          content:
            "<p>本着无聊的态度学了了Vue,也由此迷上了前端！</p><p>Baymax,00后程序小白！思维呆板！做事执着！学习能力一般，除非感兴趣！</p><p>掌握技能：Vue、Laravel、Java、Php、Mysql、Js、Ps  ……</p><p>可以在以下场所找到我！</p>",
          key: "about-me",
          info: [
            {
              title: "Gitee",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
              link: "https://gitee.com/baymaxsjj",
            },
            {
              title: "GitHub",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
              link: "https://github.com/baymaxsjj",
            },
            {
              title: "Csdn",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
              link: "https://blog.csdn.net/weixin_45294607",
            },
            {
              title: "待续...",
              url:
                "https://iconfont.alicdn.com/t/7dc3c4f4-0805-477d-9f7e-20f3ec164107.png",
              link: "/",
            },
          ],
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
  components: {
    Introduce
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  width: 100%;
}
</style>