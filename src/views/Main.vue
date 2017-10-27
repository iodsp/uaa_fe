<template lang="pug" src="./pug/Main.pug">
</template>
<script>
  import menu from '../menu'
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: true,
        menus: menu,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'IODSP-UAA',
        desc: 'IoDsp Uaa 管理系统',
        github: 'https://www.github.com/iodsp',
        mini: false,
        dark: false
      }
    }

  }
</script>
