<template>
  <div class="podcast">
    <a href="#" class="podcast__play">
      <img class="podcast__playButton" src="../../assets/img/play.svg" alt="Play">
    </a>
    <div class="podcast__details">
      <div class="podcast__sub">
        2 days ago
      </div>
      <h2 class="podcast__header">
        <a href="#">Lorem ipsum dolor sit amet.</a>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'podcast-simple'
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
      width: 55%;
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
        margin-left: -25%;
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
