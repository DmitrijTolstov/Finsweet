<script setup>
import Buttons from './Buttons.vue';

const cards = [
    {id:1,
    image:'src/assets/images/portfolio1.png',
    title:'Mission 40K: Tree plantation',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {id:2,
    image:'src/assets/images/portfolio2.png',
    title:'Weekly cleanliness program in city',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {id:3,
    image:'src/assets/images/portfolio3.png',
    title:'Wildlife safety program 2021',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
]
</script>

<template>
    <div
    v-for="(item, index) in cards" :key="index"
     :style="{backgroundImage:'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),' + `url(${item.image})`}" class="card">
        <div  class="card-content">
            <h3 class="card-content__title">{{ item.title }}</h3>
            <p class="card-content__text">{{ item.text }}</p>
            <Buttons :color="'#000000'" :bg-color="'#FFFFFF'" :title="'See more'"></Buttons>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.card{
    padding: 80px 48px 48px 48px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    text-align: left;
    &:not(:last-child){
            margin-right: 23px;
        }
    &-content{ 
        color: $white;
        &__title{
            font-size: $heading3;
        }
        &__text{
            margin: 16px 0 64px 0;
        }
    }
}


</style>