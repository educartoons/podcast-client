<template>
  <div class="player">
    {{ playing }}
    <div class="player__header">
      <span>Now playing</span>: {{ podcast.title }}
    </div>
    <audio class="player__audio" controls autoplay ref="player">
      <source :src="podcast.files.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<script>

  export default {
    name: 'player',
    props: [
      'podcast'
    ],
    watch: {
      podcast () {
        this.$refs.player.load()
      }
    }
  }
</script>

<style lang="scss">
  .player{
    width: 100%;
    &__audio{
      width: 100%;
    }
    &__header{
      font-weight: 500;
      margin-bottom: 20px;
    }
    span{
      font-weight: 800;
    }
  }
</style>
