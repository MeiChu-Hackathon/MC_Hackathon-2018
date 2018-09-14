<template>
  <div  class="staff_card" >
    <div class="staff_photo">
        <img src="../assets/baby.png">
    </div>
    <p class="nickname">{{nickname}}</p>
  </div>
</template>

<script>
export default {
  props: {
    nickname: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
