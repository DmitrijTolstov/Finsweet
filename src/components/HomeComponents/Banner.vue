<script setup>
import {ref} from 'vue'
import Buttons from '@/components//Buttons.vue';
</script>

<template>
    <div class="banner">
        <div class="container">
            <div class="banner-box">
                <h1 class="banner-box__text">
                    Save the environment today for a better tomorrow
                </h1>
                <div class="banner-box_buttons">
                    <router-link to="/whatWeDo">
                    <Buttons :color="'black'" :bgColor="'white'" :title="'What we do'"></Buttons>
                    </router-link>
                    <Buttons class="video" :bgColor="'inherit'" :title="'Play Video'"></Buttons>
                </div>
            </div>
                <div class="banner-statistics">
                    <p>23,800 trees planted</p>
                    <div class="line"></div>
                    <p>5840 donations collected</p>
                </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.banner{
    background-image: url('@/assets/images/banner.png');
    background-size: cover;
    background-position: center;
    padding: 128px 110px 64px 110px;
    margin-bottom: 96px;
    &-box{
        padding-bottom: 192px;
        max-width: 640px;
        &__text{
            font-weight: 700;
            font-size: $home-heading;
            color: $white;
        }
        &_buttons{  
            margin-top: 48px;
        }
    }
    &-statistics{
        display: flex;
        color: $white;
        justify-content: space-between;
        gap: 24px;
        align-items: center;
    }
}

.video{
    margin-left: 24px;
    background-image: url('../assets/images/play.svg');
    background-repeat: no-repeat;
    background-position: left;
}

.line{
    width: 70%;
    height: 1px;
    background-color:$border
}
</style>