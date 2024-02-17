<script setup>
import PortfolioCard from '../PortfolioCard.vue';

const images = [
    {id:1,
    image:'src/assets/images/portfolio1.png',
    title:'Mission 40K: Tree plantation',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {id:2,
    image:'src/assets/images/portfolio2.png',
    title:'Weekly cleanliness program in city',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {id:3,
    image:'src/assets/images/portfolio3.png',
    title:'Wildlife safety program 2021',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
]

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
                <PortfolioCard v-for="(item, id) in images" :key="id" :title="item.title" :text="item.text" :image="item.image"></PortfolioCard>
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