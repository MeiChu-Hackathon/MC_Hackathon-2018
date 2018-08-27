<template lang="html">
    <div id="staff" class="container">
      <h1><b>S</b>taff</h1>
      <div class="group" >
        <h2>行政組</h2>
        <div  class="staff_card" >
          <div class="staff_photo">
              <img src="../assets/baby.png">
          </div>
          <p class="nickname">呂承翰</p>
        </div>
        <div  class="staff_card" >
          <div class="staff_photo">
              <img src="../assets/baby.png">
          </div>
          <p class="nickname">江岷錡</p>
        </div>
      </div>
    </div>
</template>

<script>
import sr from '../js/sr.js';

export default {
    name: 'staff',
    mounted() {
        var headAnime = this.$anime.timeline({
            easing: [0.8, 0, 0.2, 1],
            autoplay: false
        });
        headAnime
            .add({
                targets: '.staff_photo',
                scale: [0,1],
                delay: function(el, i) { return i * 100 },
                duration: 1200,
            })
            .add({
                targets: '.staff_photo',
                delay: function(el, i) { return i * 100 },
                borderWidth: [40, 1],
                duration: 1200,
                offset: '-=1000'
            })
            .add({
                targets: '.nickname',
                delay: function(el, i) { return i * 100 },
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 1200,
                offset: '-=1000'
            })
        sr.reveal('.group', {
            duration: '0',
            afterReveal: function(){
                headAnime.play();
            }
        });
    }
}
</script>
