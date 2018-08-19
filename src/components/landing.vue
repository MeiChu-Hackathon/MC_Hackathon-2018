<template>
  <div id="landing" class="container">
    <div class="title-text">
      <h3>10/28.29</h3>
      <h2>MEICHU</h2>
      <h2>HACKATHON</h2>
      <div class="line"></div>
      <h3 style="letter-spacing: 2px;">交大工程四館</h3>
    </div>
    <div class="landing-lines">
      <img v-for="id in 4" :key="id" :class="`line-${id}`" class="landing-line" src="@/assets/landing-line.svg" width="40%"/>
    </div>
    <div :class="`item-${id}`" v-for="(item, id) in 5" :key="id" class="oval"></div>
    <div class="planet yellow-planet"><img src="@/assets/yellow_planet.svg" width="70px"/></div>
    <div class="planet pink-planet"  ><img src="@/assets/pink_planet.svg"   width="70px"/></div>
    <div class="planet blue-planet"  ><img src="@/assets/blue_planet.svg"   width="70px"/></div>
    <div class="planet purple-planet"><img src="@/assets/purple_planet.svg" width="70px"/></div>
    <div class="sun"></div>
    <div class="sun-glow"></div>
    <div class="bottom-hint">
      <div class="rectangle"></div>
      <div class="rec-border-animation"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing',
  }
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Fugaz+One');
$glowYellow: rgb(255,231,138);

%centerObject {
  position: absolute;
  top: 50%;
  left: 50%;
}

%sunDefault {
  @extend %centerObject;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: radial-gradient(rgba(255,255,255,1), rgba(255,231,138,1));
  border-radius: 50%;
  border: none;
}

#landing {
  width: 100vw;
  height: 100vh;
  position: relative;
  .title-text {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 0px 0px 18px rgb(250,250,250);
    h3 {
      font-size: 1em;
    }
    h2 {
      font-family: 'Fugaz One', cursive;
      margin: 1px 0;
    }
    .line {
      width: 10%;
      height: 3px;
      background: #fff;
      margin: 10px 0;
    }
  }
  .landing-lines {
    position: relative;
    width: 100%;
    height: 100%;
    .landing-line {
      position: absolute;
      opacity: .4;
      &.line-1 {
        left: -85px;
        top: 75px;
      }
      &.line-2 {
        transform: rotateX(180deg);
        left: -85px;
        bottom: 100px;
        
      }
      &.line-3 {
        transform: rotateY(180deg);
        right: -85px;
        top: 75px;
      }
      &.line-4 {
        transform: rotateX(180deg) rotateY(180deg);
        right: -85px;
        bottom: 100px;
      }
    }
  }
  .oval {
    @extend %centerObject;
    transform: translate(-50%, -50%) scale(1, .7);
    border-radius: 60%;
    border: dashed rgb(179,179,179) 1px;
    @for $i from 1 through 5 {
      &.item-#{$i} {
        width: (110% - $i*18%);
        height: (80% - $i*12%);
      }
    }
  }
  .sun {
    @extend %sunDefault;
    box-shadow:0px 0px 28px 9px $glowYellow;
  }
  .sun-glow {
    @extend %sunDefault;
    box-shadow:0px 0px 120px 40px $glowYellow;
  }
  .planet {
    position: absolute;
    width: 70px;
    height: 70px;
    &:before {
        content: '';
        @extend %centerObject;
        transform: translate(-50%,-50%);
        width: 70%;
        height: 70%;
        border-radius: 50%;
      }
    &.yellow-planet {
      left: 14%;
      top: 28%;
      &:before {
        box-shadow: 0px 0px 40px 10px rgb(255,231,138);
      }
    }
    &.pink-planet {
      left: 24%;
      top: 53%;
      &:before {
        box-shadow: 0px 0px 40px 10px rgb(210,53,251);
      }
    }
    &.blue-planet {
      left: 60%;
      top: 53%;
      &:before {
        box-shadow: 0px 0px 40px 10px rgb(151,251,244);
      }
    }
    &.purple-planet {
      left: 83%;
      top: 43%;
      &:before {
        box-shadow: 0px 0px 40px 10px rgb(101,74,127);
      }
    }
  }
  .bottom-hint {
    position: absolute;
    width: 60%;
    height: 100px;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%,-50%);
    .rectangle {
      width: 10px;
      height: 10px;
      background-color: white;
      @extend %centerObject;
      transform: translate(-50%, -50%);
      box-shadow: 0px 0px 4px 4px white;
    }
    .rec-border-animation {
      width: 50px;
      height: 50px;
      border: 2px solid white;
      position: absolute;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
      animation: scale 4s cubic-bezier(.68,.05,.22,.99) .9s infinite;
      cursor: pointer;
    }
  }
}

@keyframes scale {
  from {
    transform: scale(.3);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>