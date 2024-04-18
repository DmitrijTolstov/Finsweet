<script setup>
import Header from '@/components/Header.vue';
import Environment from '@/components/WhatWeDoComponents/Environment.vue';
import Projects from '@/components/Projects.vue';
import Donate from '@/components/Donate.vue';
import News from '@/components/News.vue';
import Events from '@/components/Events.vue';
import Footer from '@/components/Footer.vue';
import mainPage from '@/components/WhatWeDoComponents/mainPage.vue';


</script>

<template>
        <Header></Header>
        <mainPage></mainPage>
        <Environment></Environment>
        <Projects></Projects>
        <Donate></Donate>
        <News></News>
        <Events></Events>
        <Footer></Footer>
</template>

<style scoped lang='scss'>
</style>