<template>
  <header class="Navbar">
    <nav :class="{ open: toggle }">
      <div class="container">
        <div class="nav-side-btn" v-on:click="toggle = !toggle"></div>
        <div class="nav-left">
        </div>
        <div class="nav-right">
        </div>
      </div>
      <div class="side-blur"></div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        toggle: false
      }
    }
  }
</script>
