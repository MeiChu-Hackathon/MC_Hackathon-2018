<template>
    <div id="intro" class="container">
            <div class="clock base">
                <img src="../assets/base.png">
            </div>
            <div class="clock min">
                <img src="../assets/min.png">
            </div>
            <div class="clock hour">
                <img src="../assets/hour.png">
            </div>
        <div class="content_1">
            <div class="partical col-md-6">
                <div class="title_block">
                    <div class="mask"></div>
                    <h1 class="title">梅竹黑客松有什麼不一樣？</h1>
                </div>
                <div class ="partical_block">
                    <p>目前坊間的類似活動，分為兩種：「傳統黑客松」以及「企業自行舉辦的黑客松」傳統黑客松由參加隊伍發想提案，擁有近乎絕對的自由，但提供的協助與引導少，不利經驗較少的學生團隊，完成作品的門檻提高，構想容易偏離現實考量，落入為創新而創新的迷思；</p>
                    <p>反之，企業自行舉辦的黑客松多半聚焦在自家公司所遇到的瓶頸，出題的範圍比較侷限，所提供的工具也以主辦企業本身自家的技術為主。有鑑於前兩者各有利弊，「梅竹黑客松」應運而生，這次活動的開發主題皆由活躍於業界的企業所建議，開發主題的大方向與市場接軌同時來自不同企業，各自提供獨家技術與資源，輔助參加者開發作品，兼顧發想的自由空間與提案本身的市場可行性。參賽者可以發揮所長，藉著企業的協助實現創意，並能和企業先進面對面交流想法。而負責決定主題與引導的企業，不僅能挖掘人才，也同時藉此刺激自身一同創新思考。</p>
                </div>
                <a href="#/QA">FAQ</a>
            </div>
        </div>

    </div>
</template>
<script>
import Parallax from 'vue-parallaxy'
import sr from '../js/sr.js';
export default {
    name: 'intro',
    components: {
        Parallax
    },
    mounted() {


        let titleAnime = this.$anime.timeline({
            easing: [0.8, 0, 0.2, 1],
            autoplay: false,
        });
        titleAnime
            .add({
                targets: '.mask',
                translateY: [37, 0],
                duration: 600,
            })
            .add({
                targets: '.mask',
                translateY: [0, -37],
                duration: 600,
                offset: '-=100'
            })
            .add({
                targets: '.title',
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 800,
                easing: [0.8, 0, 0.2, 0],
                offset: '-=600'

            })
        sr.reveal('.partical_block', {
            distance: '10px',
            duration: '800',
            delay: 0,
        });
        sr.reveal('.title_block', {
            distance: '0px',
            opacity: '1',
            duration: '0',
            reset: true,
            afterReveal: function(el){
                titleAnime.play()
            }
        })
    },
}

</script>
