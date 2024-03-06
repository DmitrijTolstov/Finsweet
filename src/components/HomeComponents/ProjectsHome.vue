<script setup>
import PortfolioCard from '../PortfolioCard.vue';

</script>

<template>
    <div class="container">
        <section class="projects">
            <div class="projects-content">
                <p class="text-line">
                    Projects we have done
                </p>
                <h2 class="projects-content__title">
                    We are Creating sustainable society, for everyone and forever.
                </h2>
            </div>
            <div class="projects-portfolio" >
                <PortfolioCard></PortfolioCard>
            </div>
        </section>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.projects{
    margin-top: 96px;
    margin-bottom: 96px;
    &-content{
        &__title{
            font-size: $heading2;
            max-width: 640px;
            margin-top: 32px;
        }
    }
    
    &-portfolio{
        display: flex;
        justify-content: space-between;
        margin-top: 65px;
    }
}

.text-line{
    @include text-line(left);
}
</style>