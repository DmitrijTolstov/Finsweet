<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import mainPage from '@/components/aboutComponents/mainPage.vue';
import Journey from '@/components/aboutComponents/Journey.vue';
import AboutTeam from '@/components/aboutComponents/AboutTeam.vue';
import NewsHome from '@/components/News.vue';
import Events from '@/components/Events.vue';
import Donate from '@/components/Donate.vue';
</script>

<template>
    <Header></Header>
    <mainPage></mainPage>
    <Journey></Journey>
    <AboutTeam></AboutTeam>
    <Donate></Donate>
    <NewsHome></NewsHome>
    <Events></Events>
    <Footer></Footer>
</template>

<style scoped lang='scss'>
</style>