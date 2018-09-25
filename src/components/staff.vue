<template lang="html">
    <div id="staff" class="container">
      <h1><b>S</b>taff</h1>
      <div class="group" v-for="(group, groupId) in groups" :key="groupId">
        <h2>{{ group.name }}</h2>
        <StaffComp v-for="(member, memberId) in group.members" :nickname="member" :key="memberId"/>
      </div>
    </div>
</template>

<script>
import sr from '../js/sr.js';
import StaffComp from './staffComp';

export default {
    name: 'staff',
    components: { StaffComp },
    data() {
      return {
        groups: {
          managers: {
            name: '行政組',
            members: [ '呂承翰', '江岷錡' ]
          },
          marketing: {
            name: '行銷組',
            members: [ '孫正', '黃郁恬', '李昕紘', '呂以平', '陳映如' ]
          },
          publicRelation: {
            name: '公關組',
            members: [ '黃川', '陳姿云', '黃睿宇', '陳品竹', '賴筱婷', '吳聖玫' ]
          },
          activity: {
            name: '活動組',
            members: [ '劉柏聲', '賴政言', '洪瑋均', '陳巧錚', '汪明亮', '江宜潔', '諶靚', '陳芷羚' ]
          },
          affair: {
            name: '總務組',
            members: [ '王美驊', '鄭伯俞' ]
          }
        }
      }
    },
    mounted() {
        var headAnime = this.$anime.timeline({
            easing: [0.8, 0, 0.2, 1],
            autoplay: false
        });
        headAnime
            .add({
                targets: '.staff_photo',
                scale: [0,1],
                delay: function(el, i) { return i * 80 },
                duration: 1000,
            })
            .add({
                targets: '.staff_photo',
                delay: function(el, i) { return i * 80 },
                borderWidth: [40, 1],
                duration: 1000,
                offset: '-=1000'
            })
            .add({
                targets: '.nickname',
                delay: function(el, i) { return i * 80 },
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 1000,
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
