<template lang="pug">
  div.hello
    h1() {{msg}}
    h2() xxxx
    ul
      li
        a(href="https://vuejs.org" target="_blank") Core Docs
    v-btn(@click.native="test")
    io-crud
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
  },
  methods: {
    test () {
      this.$message.error({
        message: 'dsdsds',
        duration: 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
