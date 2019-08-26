<template>
    <div id="app">
        <AppMenu />
        <div id="nav">
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
        </div>
        <router-view/>
    </div>
</template>

<script>
import { Component } from 'vue-class-component';
import AppMenu from '@/components/AppMenu';

export default {
    components: { AppMenu }
}
</script>

<style src="@/assets/style/bootstrap.min.css"></style>
<style lang="sass" src="@/main.sass"></style>
