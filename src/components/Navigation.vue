<script setup>
import {ref} from 'vue'
import Button from './Buttons.vue';
</script>

<template>
    <nav class="navigation">
        <ul class="navigation-links">
            <li class="navigation-links__link"><router-link to="/" >Home</router-link></li>
            <li class="navigation-links__link"><router-link to="/about" > About us</router-link></li>
            <li class="navigation-links__link"><router-link to="/whatWeDo">What We Do</router-link></li>
            <li class="navigation-links__link"><router-link to="/media">Media</router-link></li>
            <li class="navigation-links__link"><router-link to="/contact" >Contact</router-link></li>
            <Button></Button>
        </ul>
    </nav>
</template>

<style scoped lang='scss'>
.navigation{
    padding: 12px 0;
    &-links{
        display: flex;
        align-items: center;
        gap: 40px;
    }
}
</style>