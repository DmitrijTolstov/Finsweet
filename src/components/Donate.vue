<script setup>
import Buttons from './Buttons.vue';
</script>

<template>
    <div class="container">
        <section class="donate">
            <div class="donate-content">
                <h2 class="donate-content__title">
                    You can contribute to make the environment greener!
                </h2>
                <div class="donate-content_buttons">
                    <Buttons :bgColor="'#70C174'" :title="'Join as a volunteer'"></Buttons>
                    <Buttons :bgColor="'white'" :color="'#1D2130'"></Buttons>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.donate{
    background: center no-repeat url(src/assets/images/background-donate.png);
    padding: 93px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    margin: 96px 0;
    &-content{
        text-align: center;
        &__title{
            font-size: $heading2;
            color: $white;
            max-width: 631px;
        }
        &_buttons{
            margin-top: 32px;
            display: inline-flex;
            gap: 32px;
        }
    }
}
</style>