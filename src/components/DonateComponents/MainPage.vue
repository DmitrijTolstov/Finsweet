<script setup>
import Buttons from '../Buttons.vue';
import Header from '../Header.vue';


</script>

<template>
    <section class="donate">
        <Header></Header>
        <div class="container">
            <div class="donate-container">
                <div class="donate-content">
                        <p class="donate-content__heading">
                            donate us
                        </p>
                        <div class="pl-96">
                            <h2 class="donate-content__title">
                                Making a donation for Nature.
                            </h2>
                            <p class="donate-content__text">
                                When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.
                            </p>
                            <Buttons :bg-color="'#70C174'" :title="'Donate now'"></Buttons>
                        </div>
                </div>
                <article class="donate-image">
                    <img src="@/assets\images\donate\Image.png" alt="men">
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';

.donate{
    background-color:$off-white;
    padding-bottom: 96px;
    margin-bottom: 96px;
    &-container{
        display:flex;
        justify-content: space-between;
        gap: 76px;
    }
    &-content{
        &__heading{
            @include text-line();
            margin-bottom: 32px;
        }
        &__title{
            font-size: $heading2;
            margin-bottom: 34px;
            font-weight: 700;
        }
        &__text{
            opacity: .4;
            margin-bottom: 32px;
            max-width: 517px;
        }
    }
    &-container{
        display:flex
    }
    &-blogs_links{
        margin: 32px 0 96px;
        display:flex;
        gap: 20px;
    }
}
.pl-96{
    padding-left: 96px
}
</style>