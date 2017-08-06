<template>
  <div class="film-list">
    <ul>
      <coming-soon-item v-for="film in comingSoonFilms" :film="film"></coming-soon-item>
    </ul>
  </div>
</template>

<style lang="less">

</style>
<script>
  import ComingSoonItem from './coming-soon-item'
  import { mapGetters } from 'vuex'

  export default{
    computed: mapGetters({
      comingSoonFilms: 'getComingSoonFilms'
    }),
    components: {
      ComingSoonItem
    }
  }
</script>
