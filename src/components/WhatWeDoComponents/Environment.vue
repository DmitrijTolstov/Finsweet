<script setup>
import EnvironmentList from '@/components/EnvironmentList.vue';

const list = [
    {
        image:'src/assets/images/icons/home.png',
        heading:'Build healthy cities',
        text:'orem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
        image:'src/assets/images/icons/wave.png',
        heading:'Protect land and water',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        image:'src/assets/images/icons/help.png',
        heading:'Tree plantation',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        image:'src/assets/images/icons/drop.png',
        heading:'Water sustainability',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        image:'src/assets/images/icons/dog.png',
        heading:'Animal safety',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
        image:'src/assets/images/icons/plant.png',
        heading:'Biodiversity',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    

]

</script>

<template>
    <section class="environment">
        <div class="container">
            <h2 class="environment__heading">What we do for the environment</h2>
            <div class="environment-content">
                <EnvironmentList
                v-for="(item, index) in list" :key="index"
                :image="item.image"
                :heading="item.heading"
                :text="item.text"
                ></EnvironmentList>
            </div>
        </div>
    </section>
</template>
<style scoped lang='scss'>
@import '@/assets/vars.scss';
.environment{
    background-color: $third-green;
    padding: 96px 0;
    &__heading{
        font-size: $heading2;
        font-weight: 700;
    }
    &-content{
        display: flex;
        flex-wrap: wrap;
        gap: 48px;
    }
}
</style>