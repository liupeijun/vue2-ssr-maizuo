<template>

  <section class="content">
    <div v-swiper:mySwiper="swiperOption" class="my-swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide silde" v-for="billboard in billboards">
          <a v-bind:href="billboard.url">
            <image-placeholder :src='billboard.imageUrl' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
          </a>
        </div>
      </div>
    </div>


    <div class="movie">
      <now-playing :films="nowPlayingFilms"></now-playing>
      <coming-soon :films="comingSoonFilms"></coming-soon>
    </div>
  </section>

</template>
<style lang="less">

  .my-swipe {
    height: 9rem;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }
  .silde img {
    width: 100%;
  }

  .movie ul {
    padding-top: 18px;
  }
</style>
<script>
  import NowPlaying from './now-playing'
  import ComingSoon from './coming-soon'
  import ImagePlaceholder from '../../components/image-placeholder'
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
  //判断环境
  if( process.env.VUE_ENV == 'client'){
      const VueAwesomeSwiper = require('vue-awesome-swiper/ssr') //引入swiper模块，里面定义了指令
      require("swiper/dist/css/swiper.css") //引入css
      Vue.use(VueAwesomeSwiper)
  }

  export default{

    data () {
      return {
        swiperOption: {
          autoplay: 2000,
          autoHeight: true,
          // loop: true
        }
      }
    },
    beforeMount () {

      //由于服务端渲染， 应该把操作dom的放在creted生命周期之后，否则会报错

    },
    mounted () {
        // this.$store.dispatch('fetchBillboards')
    },
    computed: {
      ...mapGetters({
        comingSoonFilms: 'getComingSoonFilms',
        nowPlayingFilms: 'getNowPlayingFilms',
        billboards: 'getBillboards'
      })
    },
    asyncData ({ store }) {
        //必须要返回promise
        return Promise.all([store.dispatch('fetchComingSoonLists', {
          page: 1,
          count: 5
        }),store.dispatch('fetchNowPlayingLists', {
          page: 1,
          count: 5 
        }),store.dispatch('fetchBillboards')])
    },
    components: {
      NowPlaying,
      ComingSoon,
      ImagePlaceholder
    }
  }
</script>
