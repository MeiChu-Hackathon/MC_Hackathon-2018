<template>
  <div>
    <div class="BG"></div>
    <Landing></Landing>
    <Intro></Intro>
    <Join_info></Join_info>
    <Schedule></Schedule>
    <Sponsor></Sponsor>
    <Staff></Staff>
    <div id="scroller">
        <div @click="move('landing')" data-scroll class="ball"></div>
        <div @click="move('intro')" data-scroll class="ball"></div>
        <div @click="move('join_info')" data-scroll class="ball"></div>
        <div @click="move('schedule')" data-scroll class="ball"></div>
        <div @click="move('staff')" data-scroll class="ball"></div>
    </div>
  </div>
</template>

<script>
import SmoothScroll from 'smooth-scroll';
import sr from '../js/sr.js';
export default {
    name: 'Main',
    methods: {
        move(target){
            var scroll = new SmoothScroll();
            var top = document.getElementById(target);
            scroll.animateScroll(top, {}, { speed: 1300, easing: 'easeInOutCubic' });
        }
    },
    mounted(){

        document.addEventListener('scroll', function(){
            // let delay = [1, 1, 2, 3, 5]
            if(window.scrollY >= 100){
                for(var i = 0; i < 5; i++){
                    document.querySelectorAll('.ball')[i].style.transform = 'scale(1)';
                    document.querySelectorAll('.ball')[i].style.transitionTimingFunction = 'cubic-bezier(0.3, 0.0, 0, 1)';
                    document.querySelectorAll('.ball')[i].style.transitionDelay = i * 0.08 + "s";
                }
            } else {
                for(var i = 0; i < 5; i++){
                    document.querySelectorAll('.ball')[i].style.transform = 'scale(0)';
                    document.querySelectorAll('.ball')[i].style.transitionDelay = i * 0.08 + "s";
                }
            }
        })

    }


}
</script>

<style lang="scss" media="screen">
    .BG {
        background-image: url('https://i.imgur.com/xRLeODk.png');
        // background-repeat: no-repeat;
        filter: brightness(1.5);
        background-size: cover;
        width: 100%; height: 100%;
        position: fixed;
    }
    #scroller {
        position: fixed;
        top: 50%;
        right: 2%;
        transform: translateY(-50%);
        z-index: 10;
        .ball {
            width: 15px; height: 15px;
            border: solid 1.5px #6a7eff;
            filter: drop-shadow(0px 0px 2px rgba(#6a7eff, 0.4));
            transform: scale(0);
            border-radius: 50%;
            margin: 15px 0;
            cursor: pointer;
            transition: .8s;
        }
    }

    @media all and (max-width: 480px) {
        #scroller {
            display: none;
        }
    }
</style>
