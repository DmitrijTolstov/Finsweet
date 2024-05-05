<script setup>
import Buttons from './Buttons.vue';

import image1 from '@/assets/images/portfolio1.png';
import image2 from '@/assets/images/portfolio2.png';
import image3 from '@/assets/images/portfolio3.png';


const cards = [
    {id:1,
    image:image1,
    title:'Mission 40K: Tree plantation',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {id:2,
    image:image2,
    title:'Weekly cleanliness program in city',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {id:3,
    image:image3,
    title:'Wildlife safety program 2021',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
]


// const getImg = computed(() =>{ 
//     return 'src/assets/images/'

// })

 
</script>

<template>
    <div
    v-for="(item, index) in cards" :key="index"
     :style="{backgroundImage:'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),' + `url(${item.image})`}" class="card">
        <div  class="card-content">
            <h3 class="card-content__title">{{ item.title }}</h3>
            <p class="card-content__text">{{ item.text }}</p>
            <router-link to="/project" >
                <Buttons :color="'#000000'" :bg-color="'#FFFFFF'" :title="'See more'"> </Buttons>
            </router-link>
            
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
    transition: transform .3s linear;
    &:hover{
        transform: scale(1.01);
    }
    &:not(:last-child){
            margin-right: 23px;
        }
    &-content{ 
        color: $white;
        &__title{
            font-size: clamp(16px,4vw, $heading3);
        }
        &__text{
            font-size: clamp(13px,3vw, 16px);
            margin: 16px 0 64px 0;
            line-height: 20px;
        }
    }
}



@media(max-width:850px){

    .card{
        &:not(:last-child){
            margin-right: 0;
        }
}
}

</style>