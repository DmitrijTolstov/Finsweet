<script setup>
import {ref} from 'vue'
import Button from './Buttons.vue';
</script>

<template>
    <nav class="navigation">
        <ul class="navigation-links">
            <li class="navigation-links__link"><a href="#">Home</a></li>
            <li class="navigation-links__link"><a href="#">About us</a></li>
            <li class="navigation-links__link"><a href="#">What We Do</a></li>
            <li class="navigation-links__link"><a href="#">Media</a></li>
            <li class="navigation-links__link"><a href="#">Contact</a></li>
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
        &__link{
            padding: 0 40px;

        }
    }
}
</style>