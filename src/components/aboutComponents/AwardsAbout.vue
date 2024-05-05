<script setup>
import Awards from '@/components/Awards.vue'


import image1 from '@/assets/images/awards-stars.svg'
import image2 from '@/assets/images/awards-prize.svg'
import image3 from '@/assets/images/awards-medal.svg'
import image4 from '@/assets/images/awards-medal2.svg'

const awards = [
    {
        img:image1,
        date:2021,
        title:'Best NGO Award',
        text:'Berlin, Germany'
    },
    {
        img:image2,
        date:2018,
        title:'Global Award',
        text:'New York, USA'
    },
    {
        img:image3,
        date:2014,
        title:'Foresto Award',
        text:'New Delhi, India'
    },
    {
        img:image4,
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
        flex-wrap: wrap;
    }
    &__title{
        font-size: clamp(25px,3vw,$heading2);
    }
}


@media(max-width:850px){

.awards{
    margin-top: 45px;
    &-component{
        margin-top: 24px;
        justify-content: center;
        gap: 35px;
    }
}

}
</style>