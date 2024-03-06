<script setup>
import Header from '@/components/Header.vue';
import Environment from '@/components/WhatWeDo/Environment.vue';
import Projects from '@/components/WhatWeDo/Projects.vue';
import Donate from '@/components/Donate.vue';
import News from '@/components/News.vue';
import Events from '@/components/Events.vue';
import Footer from '@/components/Footer.vue';
import WhatWeDoMainPage from '@/components/WhatWeDo/WhatWeDoMainPage.vue';


</script>

<template>
        <Header></Header>
        <WhatWeDoMainPage></WhatWeDoMainPage>
        <Environment></Environment>
        <Projects></Projects>
        <Donate></Donate>
        <News></News>
        <Events></Events>
        <Footer></Footer>
</template>

<style scoped lang='scss'>
</style>