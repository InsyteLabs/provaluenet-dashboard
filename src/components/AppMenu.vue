<template>
  <nav id="nav" class="nav">
      <router-link to="/">
        <div id="logo">
            <img id="elipse" src="@/assets/img/pvn-elipse.png" alt="ProValueNet Elipse">
            <img id="block-logo" src="@/assets/img/pvn-logo.png" alt="ProValueNet Logo">
        </div>
      </router-link>
  </nav>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppMenu extends Vue {

}

</script>

<style scoped lang="sass">

@import '@/variables'

nav
    display: block
    width: 100%
    background-color: $blue
    padding: 10px

#elipse
    position: relative
    top: 3px
    max-height: 40px
    margin-right: 10px
#block-logo
    max-height: 40px

</style>