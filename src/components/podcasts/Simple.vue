<template>
  <div class="podcast">
    <a href="#" class="podcast__play" @click.prevent="switchPodcast(podcast.id)">
      <img class="podcast__playButton" src="../../assets/img/play.svg" alt="Play">
    </a>
    <div class="podcast__details">
      <div class="podcast__sub">
        <time :datetime="podcast.created_at">{{ podcast.created_at_human }}</time>
      </div>
      <h2 class="podcast__header">
        <a href="#asdad" @click.prevent="switchPodcast(podcast.id)">{{ podcast.title }}</a>
      </h2>
      <p>{{ podcast.description }}</p>
    </div>
  </div>
</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'podcast-simple',
    props: [
      'podcast'
    ],
    methods: {
      ...mapActions({
        getPodcast: 'podcasts/getPodcast',
        setPlaying: 'player/setPlaying',
      }),
      switchPodcast (id) {
        this.getPodcast(id).then( (podcast) => {
            this.setPlaying(podcast)
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '~styles/variables';

  .podcast{
    background-color: #fff;
    display: flex;
    min-height: 240px;
    border-radius: $global-radius;
    box-shadow: 0 5px 10px rgba(#000000, .05);
    margin-bottom: 40px;
    overflow: hidden;
    &__sub{
      font-weight: 500;
    }
    &__header{
      font-size: 1.6em;
      a {
        text-decoration: none;
      }
    }
    &__details{
      padding: 40px;
    }
    &__play{
      width: 15%;
      background-color: $blue;
      align-items: center;
      justify-content: center;
      border-top-left-radius: $global-radius;
      border-bottom-left-radius: $global-radius;
      overflow: hidden;
      transition: margin-left 180ms ease-in-out;
      &:hover{
        .podcast__playButton{
          transform: scale(3.5) rotate(-10deg);
        }
        .podcast__playButton{
          opacity: 1;
        }
      }
      &--hidden{
        margin-left: -15%;
      }
    }
    &__playButton{
      color: #222;
      opacity: .4;
      width: 60%;
      transition: all 180ms ease-in-out;
    }
  }

  @media only screen and (min-width: 768px){
    .podcast__play{
      display: flex;
    }
  }
</style>
