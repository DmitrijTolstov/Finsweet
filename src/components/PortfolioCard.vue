<script setup>
import Buttons from './Buttons.vue';

const props = defineProps({
    title:{
        type:String,
        default:"lorem ipsum",
    },
    text:{
        type:String,
        default:"lorem ipsum",
    },
    image:{
        type:String,
    }
})

</script>

<template>
    <div :style="{backgroundImage:'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),' + `url(${props.image})`}" class="card">
        <div  class="card-content">
            <h3 class="card-content__title">{{ title }}</h3>
            <p class="card-content__text">{{ text }}</p>
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