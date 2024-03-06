<script setup>
import Awards from '@/components/Awards.vue'

const awards = [
    {
        img:'src/assets/images/awards-stars.svg',
        date:2021,
        title:'Best NGO Award',
        text:'Berlin, Germany'
    },
    {
        img:'src/assets/images/awards-prize.svg',
        date:2018,
        title:'Global Award',
        text:'New York, USA'
    },
    {
        img:'src/assets/images/awards-medal.svg',
        date:2014,
        title:'Foresto Award',
        text:'New Delhi, India'
    },
    {
        img:'src/assets/images/awards-medal2.svg',
        date:2010,
        title:'Earth Saver Award',
        text:'Vienna, Austriay'
    },
]
</script>

<template>
    <div class="awards">
        <h2 class="awards__title">
            Awards & Recognitions
        </h2>
        <div class="awards-component">
            <Awards 
            v-for="(item, index) in awards" :key="index"
            :img="item.img"
            :date="item.date"
            :title="item.title"
            :text="item.text"
            ></Awards>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.awards{
    margin-top: 96px;
    text-align: center;
    &-component{
        margin-top: 48px;
        display: flex;
        justify-content: space-between;
    }
    &__title{
        font-size: $heading2;
    }
}
</style>