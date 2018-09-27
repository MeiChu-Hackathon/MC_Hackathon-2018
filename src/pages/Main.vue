<template>
  <div>
    <div class="BG"></div>
    <div class="message-box">
        <h3>點擊星球</h3>
        <p>獲得更多企業資訊喔XD</p>
        <!-- <div class="line"></div> -->
        <div class="exit" @click = "clear()"><img src="../assets/close.svg" ></div>
    </div>
    <Landing></Landing>
    <Intro></Intro>
    <Join_info></Join_info>
    <Schedule></Schedule>
    <Sponsor></Sponsor>
    <Staff></Staff>
    <div id="scroller">
        <div class="text">
            <label><b>Home</b><div class="underline"></div></label>
            <div @click="move('landing')" data-scroll class="ball"></div>
        </div>
        <div class="text">
            <label><b>Intro</b><div class="underline"></div><div class="underline"></div></label>
            <div @click="move('intro')" data-scroll class="ball"></div>
        </div>
        <div class="text">
            <label><b>Join</b><div class="underline"></div></label>
            <div @click="move('join_info')" data-scroll class="ball"></div>
        </div>
        <div class="text">
            <label><b>Schedule</b><div class="underline"></div></label>
            <div @click="move('schedule')" data-scroll class="ball"></div>
        </div>
        <div class="text">
            <label><b>Staff</b><div class="underline"></div></label>
            <div @click="move('staff')" data-scroll class="ball"></div>
        </div>
    </div>

    <div id="fancy-box" @click="clear()"></div>

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
        },
        clear(){
            document.getElementById('fancy-box').style.opacity = "0";
            document.getElementsByClassName('message-box')[0].style.opacity = "0";
            document.getElementsByTagName('html')[0].style.overflow = "auto"
            document.getElementsByTagName('body')[0].style.overflow = "auto"
        }
    },
    mounted(){
        var w = window.innerWidth,
            h = window.innerHeight;

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
        document.addEventListener('mousemove', function(){
            var x = event.clientX,
                y = event.clientY,
                w = window.innerWidth,
                h = window.innerHeight;
            if(window.scrollY >= 100){
                if (x > w * 0.95 - 30 && y > h * 0.4 - 50 && y < h * 0.6 + 50){
                    document.querySelectorAll(".text b").forEach(function(el) {
                        el.style.opacity = "1";
                    })
                    document.querySelectorAll(".text .underline").forEach(function(el) {
                        el.style.clipPath = "inset(0 0 0 0)";
                    })
                } else {
                    document.querySelectorAll(".text b").forEach(function(el) {
                        el.style.opacity = "0";
                    })
                    document.querySelectorAll(".text .underline").forEach(function(el) {
                        el.style.clipPath = "inset(0 0 0 100%)";
                    })
                }
            } else {
                document.querySelectorAll(".text b").forEach(function(el) {
                    el.style.opacity = "0";
                })
                document.querySelectorAll(".text .underline").forEach(function(el) {
                    el.style.clipPath = "inset(0 0 0 100%)";
                })
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
        .text {
            label {
                position: absolute;
                color: white;
                font-size: 12px;
                right: 180%;
                top: -1.5px;
                margin: 0;
                vertical-align: middle;
            }
            b {
                font-weight: 300;
                transition: 0.5s;
                transition-timing-function: cubic-bezier(0.5,0,0.5,1);
                opacity: 0;
            }
            .underline {
                width: 100%;
                border-bottom: solid 1px white;
                position: absolute;
                clip-path: inset(0 0 0 100%);
                transition: 0.5s;
                transition-timing-function: cubic-bezier(0.8,0,0.2,1);
                // animation: trimPath 1s;
            }
            &:hover {
                label {
                    opacity: 1;
                }
            }
        }
    }
    #fancy-box {
        width: 100vw; height: 100vh;
        background-color: rgba(#000000, 0.8);
        z-index: 998;
        top: 0;
        position: fixed;
        cursor: pointer;
        transition: 0.5s;
    }
    .message-box {
        padding: 15px;
        position: absolute;
        border: solid 1px #1DCB8B;
        left: 39%;
        top: 4%;
        color: white;
        letter-spacing: 0.2em;
        z-index: 999;
        transition: 0.5s;
        h3 {
            font-size: 16px;
            font-weight: 300;
            margin-bottom: 0.3em;
        }
        p {
            font-size: 14px;
            font-weight: 100;
            margin: 0;
        }
        .line {
            width: 20px;
            border-bottom: solid 1px white;
            position: absolute;
            top: 15px; right: calc(100% + 13px);
        }
        .exit {
            width: 10px;
            position: absolute;
            right: 10px; top: 0;
            cursor: pointer;
            img {
                width: 100%;
            }
        }
    }

    @keyframes trimPath {
        0% {
            clip-path: inset(0 0 0 100%);
        }
        100% {
            clip-path: inset(0 0 0 0);
        }
    }
    @keyframes textFade {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @media all and (max-width: 480px) {
        #scroller {
            display: none;
        }
    }
</style>
