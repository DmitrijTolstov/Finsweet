<script setup>
import Navigation from './Navigation.vue';
import {ref, computed} from 'vue';


const isOpen = ref(false)


const toggleBurger = (() =>{

    isOpen.value = !isOpen.value
})

const animationBurger = computed(() =>{
    return isOpen.value ? 0 : -150 + 'px'
})

const overlayStyle = computed(() =>{
    return isOpen.value ? 'visible' : 'hidden'
})



</script>

<template>
    <div class="container">
        <div class="header">
            <div class="header-logo">
                <img src="../assets/images/Logo.svg" alt="">
            </div>
            <Navigation class="header-navigation"></Navigation>
            <div class="header-burger" @click.prevent="toggleBurger()">
                <div></div>
                <ul class="header-burger_links" v-if="isOpen" :style="{right:animationBurger}">
                    <h3 class="header-burger__title">Menu</h3>
                    <li class="header-burger_links__link"><router-link to="/" >Home</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/about" > About us</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/whatWeDo">What We Do</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/media">Media</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/contact" >Contact</router-link></li>
                </ul>
            </div>
        </div>
        <div :style="{visibility:overlayStyle}" class="overlay"></div>
    </div>
</template>

<style scoped lang='scss'>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 12px;
    margin-block-end: 96px;
    &-burger{
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        display: none;
        div{
            position: relative;
            width: 10px;
            height: 3px;
            background-color: blue;
            margin: auto;
            &:before,&:after{
                position: absolute;
                content: '';
                width: 10px;
                height: 3px;
            }
            &:before{
                bottom:7px;
                background-color: green;
            }
            &:after{
                top: 7px;
                background-color: red;
            }
        }
    }

}

@media(max-width:850px){
    .header{
        &-navigation{
            display: none;
        }
        &-burger{
            display: flex;
            &_links{
                z-index: 10;
                color: white;
                position: fixed;
                top: 0;
                height: 100%;
                width: 150px;
                padding: 10px;
                &__link{
                    margin-block: 10px;
                    &:hover{
                        opacity: .7;
                    }
                }

            }
            &__title{
                margin-block-start: 40px;
                font-size: 30px;
                color: chocolate;
                margin-block-end: 25px;
            }
        }
    }
}
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: black;
    z-index: 9;
}
</style>