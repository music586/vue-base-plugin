<template>
  <section>
    <div class="example">{{ msg }}</div>
    <div id="div1">{{ msg }}</div>
    <div id="div2">{{ msg }}</div>
  </section>
  </template>
  
  <script>
  export default {
    data () {
      return {
        msg: 'Hello world1'
      }
    },
    mounted () {
      window.basePlugin("div2");
    }
  }
  </script>
