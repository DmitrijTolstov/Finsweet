<script setup>
</script>

<template>
    <div class="supporters">
                <p class="supporters_text">
                    our Supporters
                </p>
                <div class="supporters_logo">
                    <img src="@/assets/images/about-logo1.svg" alt="">
                    <img src="@/assets/images/about-logo2.svg" alt="">
                    <img src="@/assets/images/about-logo3.svg" alt="">
                    <img src="@/assets/images/about-logo4.svg" alt="">
                    <img src="@/assets/images/about-logo5.svg" alt="">
                    <img src="@/assets/images/about-logo2.svg" alt="">
                </div>
            </div>
</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';

.supporters{
        margin-top: 64px;
        &_text{
            margin-bottom: 32px;
            text-transform: uppercase;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                height: 2px;
                background-color:$border ;
                width: 1094px;
                transform: translatey(-50%);
            }
        }
        &_logo{
            display: flex;
            justify-content: space-between
        }
    }
</style>