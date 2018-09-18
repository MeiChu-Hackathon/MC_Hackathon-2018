<template>
  <div ref="landing" id="landing">
    <div class="title-text">
      <div class="major">
           <h2 class="sin">HSINCHU</h2>
            <span>X</span>
           <h2 class="mei">MEICHU</h2>
       </div>


      <h2>HACKATHON</h2>
      <div class="line"></div>
      <h3>10/<span style="font-size: .7em;">27.28</span></h3>
    </div>
    <div class="landing-lines">
      <img v-for="id in 4" :key="id" :class="`line-${id}`" class="landing-line" src="@/assets/landing-line.svg" width="30%"/>
    </div>
    <div :class="`item-${id}`" v-for="(item, id) in 5" :key="id" class="oval"></div>
    <a href="#/sponsor-1" class="planet yellow-planet">
        <label>羅技電子</label><img src="@/assets/yellow_planet.svg"/></a>
    <a href="#/sponsor-2" class="planet pink-planet"  ><label>資策會</label><img src="@/assets/pink_planet.svg"  /></a>
    <a href="#/sponsor-3" class="planet orange"><label>新竹市政府</label><img src="@/assets/orange.svg"/></a>
    <a href="#/sponsor-4" class="planet blue-planet"  ><label>微軟</label><img src="@/assets/blue_planet.svg"  /></a>
    <a href="#/sponsor-5" class="planet purple-planet"><label>中華電信</label><img src="@/assets/purple_planet.svg"/></a>

    <div class="sun"></div>
    <div class="sun-glow"></div>
    <div class="bottom-hint">
      <a href="https://hackathon.nctu.me/2018/signup/"></a>
      <div @click="moveTrigger" class="rectangle"></div>
      <div @click="moveTrigger" class="rec-border-animation"></div>
      <img class="line" src="@/assets/landing-bottom-line.svg" width="180px"/>
      <img class="rocket" src="@/assets/rocket.svg" width="20px"/>
      <span class="hint-text">現在報名</span>
    </div>
  </div>
</template>

<script>
// import SmoothScroll from 'smooth-scroll';
export default {
  name: 'landing',
  methods: {
    // moveTrigger() {
    //   const { landing } = this.$refs;
    //   const scroll = new SmoothScroll();
    //   scroll.animateScroll(landing.clientHeight + 50,{},{ speed: 1500, easing: 'easeInOutQuad' });
    // }
  }
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
        .major {
            .sin {
                position: absolute;
                right: 110%;
            }
            .mei {
                position: absolute;
                top: 0;
                left: 110%;
            }
            span {
                z-index: -1;
                font-size: 1.6em;
                font-family: "Fugaz One";
            }
        }
        h3 {
            font-size: 1em;
            letter-spacing: 2px;
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
                left: -15px;
                top: 8%;
            }
            &.line-2 {
                transform: rotateX(180deg);
                left: -15px;
                bottom: 13%;

            }
            &.line-3 {
                transform: rotateY(180deg);
                right: -15px;
                top: 8%;
            }
            &.line-4 {
                transform: rotateX(180deg) rotateY(180deg);
                right: -15px;
                bottom: 13%;
            }
        }
    }
    .oval {
        @extend %centerObject;
        transform: translate(-50%, -50%) scale(1, .7);
        border-radius: 60%;
        border: dashed rgb(109,91,136) 1px;
        @for $i from 1 through 5 {
            &.item-#{$i} {
                width: (100% - $i*18%);
                height: (70% - $i*12%);
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

        cursor: pointer;
        label {
            position: absolute;
            top: 105%;
            color: white;
            font-size: 18px;
            opacity: 0;
            text-align: center;
            transition: 0.5s;
            left: 50%;
            width: 5em;
            transform: translateX(-50%);
        }
        &:hover {
            label {
                opacity: 1;
            }
        }
        &:before {
            content: '';
            @extend %centerObject;
            transform: translate(-50%,-50%);
            width: 70%;
            height: 70%;
            border-radius: 50%;
        }
        &.yellow-planet {
            left: 11%;
            top: 54%;
            &:before {
                box-shadow: 0px 0px 40px 10px rgb(255,231,138);
            }
        }
        &.pink-planet {
            left: 28%;
            top: 39%;
            filter: drop-shadow(0px 0px 10px rgba(210, 53, 251, 0.8));
            &:before {
                // box-shadow: 0px 0px 40px 10px rgb(210,53,251);
            }
        }
        &.blue-planet {
            left: 61%;
            top: 30%;
            &:before {
                box-shadow: 0px 0px 40px 10px rgb(151,251,244);
            }
        }
        &.purple-planet {
            left: 81%;
            top: 57%;
            transform: scale(1.1);
            &:before {
                box-shadow: 0px 0px 40px 10px rgb(101,74,127);
            }
        }
        &.orange {
            left: 54%;
            top: 51%;
            filter: brightness(1.1);
            // transform: scale(.8);
            &:before {
                box-shadow: 0px 0px 40px 10px rgb(101,74,127);
            }
        }
        img {
            width: 80px;
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
            margin: 0 auto;
            transform-origin: center;
            top: calc(50% - 20px);
            animation: recScale 3s cubic-bezier(.68,.05,.22,.99) infinite;
            // box-shadow: 0px 0px 4px 4px white;
        }
        .rec-border-animation {
            width: 50px;
            height: 50px;
            border: 2px solid white;
            position: absolute;
            top: calc(50% - 40px);
            left: calc(50% - 25px);
            animation: scale 3s cubic-bezier(.68,.05,.22,.99) infinite;
            cursor: pointer;
        }
        .line {
            position: absolute;
            top: calc(50% + 10px);
            left: calc(50% + 10px);
            opacity: .4;
        }
        .rocket {
            position: absolute;
            transform: rotate(-45deg);
            left: calc(50% + 40px);
            top: calc(50% + 5px);
        }
        .hint-text {
            position: absolute;
            left: calc(50% + 70px);
            top: calc(50%);
            font-size: 1em;
            color: white;
            letter-spacing: 5px;
            text-shadow: 0px 0px 4px white;
        }
    }
    @media all and (max-width: 480px) {
        .title-text {
            margin-top: 1em;
            text-align: center;
            .major {
                .sin {
                    position: relative;
                    right: 0;
                }
                .mei {
                    position: relative;
                    left: 0;
                }
                span {
                    z-index: -1;
                    font-size: 1.6em;
                    position: absolute;
                    font-family: "Fugaz One";
                    top: 12px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #333;
                }
            }
            h2 {
                font-size: 1.5rem;
            }
            h3 {
                font-size: .7em;
            }
        }
        .planet {
            &:before {
                width: 70%;
                height: 70%;
            }
            img {
                width: 40px;
            }
            &.pink-planet {
                left: 15%;
                top: 40%;
            }
            &.dark-blue {
                left: 30%;
            }
            &.orange {
                left: 55%;
            }
        }
        .sun {
            box-shadow:0px 0px 50px 10px $glowYellow;
        }
        .sun-glow {
            display: none;
        }
        .bottom-hint {

            .line {
                display: none;
            }
            .rocket {
                display: none;
            }
            .hint-text {
                top: 85%;
                left: 50%;
                line-height: 1em;
                font-size: .8em;
                transform: translateX(-50%);
            }
        }

    }
}

@keyframes scale {
  0% {
    transform: scale(.3) rotateZ(0deg);
  }
  50% {
    transform: scale(.7) rotateZ(90deg);
  }
  100% {
    transform: scale(.3) rotateZ(180deg);
  }
}

@keyframes recScale {
    0% {
        transform: scale(3) rotateZ(0deg);
    }
    50% {
        transform: scale(1) rotateZ(90deg);
    }
    100% {
        transform: scale(3) rotateZ(180deg);
    }
}


</style>
