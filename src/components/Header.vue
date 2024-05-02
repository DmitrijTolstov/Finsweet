<script setup>
import Navigation from './Navigation.vue';
import {ref} from 'vue';


const isOpen = ref(false)


const toggleBurger = (() =>{

    isOpen.value = !isOpen.value
})




</script>

<template>
    <div class="container">
        <div class="header">
            <div class="header-logo">
                <img src="../assets/images/Logo.svg" alt="">
            </div>
            <Navigation class="header-navigation"></Navigation>
            <div class="header-burger" >
                <button class="header-burger_btn" :class=" {'is-open' : isOpen}" @click.prevent="toggleBurger()">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="header-burger_links"  :class="{'open': isOpen}"  >
                    <h3 class="header-burger__title">Menu</h3>
                    <li class="header-burger_links__link"><router-link to="/" >Home</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/about" > About us</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/whatWeDo">What We Do</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/media">Media</router-link></li>
                    <li class="header-burger_links__link"><router-link to="/contact" >Contact</router-link></li>
                </ul>
            </div>
        </div>
        <div  @click="toggleBurger()" :style="{opacity: isOpen ? .5: 0, visibility: isOpen ? 'visible': 'hidden' }"  class="overlay"></div>
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
        display: flex;
        align-items: center;
        display: none;
        &_btn{
            width: 30px;
            height: 30px;
            position: relative;
            z-index: 101;
            &:hover span{
                transform: scale(1.2);
                transition: 350ms cubic-bezier(.8, .5, .2, 1.4);
            }
            span{
                width: 5px;
                height: 5px;
                background-color: black;
                border-radius: 50%;
                position: absolute;
                transition: all .1s linear;

                &:nth-child(1){
                    top: 0;
                    left: 0;
                }
                &:nth-child(2){
                    top: 0;
                    left: 12px;
                }
                &:nth-child(3){
                    top: 0;
                    right: 0;
                }
                &:nth-child(4){
                    top: 12px;
                    left: 0;
                }
                &:nth-child(5){
                    top: 12px;
                    left: 12px;
                }
                &:nth-child(6){
                    top: 12px;
                    right: 0;
                }
                &:nth-child(7){
                    bottom: 0;
                    left: 0;
                }
                &:nth-child(8){
                    bottom: 0;
                    left: 12px;
                }
                &:nth-child(9){
                    bottom: 0;
                    right: 0;
                }
            }
            
        }
    }
    &-burger{
            display: none;
            &_links{
                z-index: 10;
                color: white;
                position: fixed;
                top: 0;
                transform: translateX(50%);
                height: 100%;
                padding: 10px;
                width: 200px;
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
.is-open{
    transform: rotate(180deg);
    transition: .2s cubic-bezier(.8, .5, .2, 1.4);
    & span:nth-child(2){
                    left: 6px;
                    top: 6px;
                }
                span:nth-child(4){
                    left: 6px;
                    top: 18px;
                }
                span:nth-child(6){
                    right: 6px;
                     top: 6px;
                }
                span:nth-child(8){
                    left: 18px;
                    bottom: 6px;
                }
    }
             
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 9;
    transition: opacity .5s linear;
}



@media(max-width:850px){
    .header{
        margin-bottom: 45px;
        &-navigation{
            display: none;
        }
        &-burger{
            display: flex;
        }
        
    }
}
.open{
    transform: translateX(-50%);
    transition: transform .4s linear;
}
</style>