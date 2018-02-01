<template>
  <div>
    <transition-group name="fade">
      <podcast-simple :key="1" v-for="podcast in podcasts"></podcast-simple>
    </transition-group>
    <a class="load-more" href="#" @click.prevent="show">Load older podcasts</a>
  </div>
</template>

<script>
  import PodcastSimple from './podcasts/Simple'
  export default {
    name: 'home',
    data () {
      return {
        podcasts: []
      }
    },
    components: {
      PodcastSimple
    },
    methods: {
      show() {
        this.podcasts.push(1)
      }
    }
  }
</script>

<style lang="scss">
  .load-more{
    display: block;
    width: 100%;
    padding: 20px;
    background: #fff;
    text-align: center;
    margin-bottom: 40px;
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
</style>
