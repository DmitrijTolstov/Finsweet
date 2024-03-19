<script setup>

import PortfolioCard from '@/components/PortfolioCard.vue';

</script>

<template>
    <section class="projects">
        <div class="container">
        <p class="projects_heading">
            Projects we have done
        </p>
        <h2 class="projects_title">
            We are creating a sustainable <hr> society, for everyone.
        </h2>
        <div class="projects-content">
            <PortfolioCard></PortfolioCard>
        </div>
    </div>
    </section>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.projects{
    margin-top:96px;
    text-align:center;
    &_heading{
        font-weight:700;
        opacity: .6;
    }
    &_title{
        font-size:$heading2;
        font-weight:700;
        margin-top:16px;
    }
    &-content{
        display:flex;
        margin-top:64px;
    }
}
</style>