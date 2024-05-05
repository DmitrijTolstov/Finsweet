<script setup>
import NewsCard from '@/components/NewsCard.vue';

import images1 from '@/assets/images/newsCard1.png'
import images2 from '@/assets/images/newsCard2.png'
import images3 from '@/assets/images/newsCard3.png'
import images4 from '@/assets/images/newsCard4.png'




const cards = [
    {
        images:images1,
        title:'Don’t destroy greenery and don’t spoil scenery',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
        images:images2,
        title:' Is climate change happening faster than expected?',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
        images:images3,
        title:"Top 10 facts about wind farms you didn't know",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
        images:images4,
        title:'Our goal is to make water available for everyone',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
]

const props = defineProps({
    title:{
        required: false,
        default:'Read Our News',
    },
    text:'',
    textShow: false
})

</script>

<template>
    <section class="news">
        <div class="container">
            <h2 class="news__title">
                {{ props.title }}
            </h2>
            <p v-if="textShow" class="news_text">
                {{ props.text }}
            </p>
            <div class="news-cards">
                <NewsCard 
                v-for="(card, index) in cards" :key="index"
                :images="card.images"
                :title="card.title"
                :text="card.text"
                >
            </NewsCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.news{
    margin-bottom: 96px;
    &__title{
        font-size: clamp(25px,4vw,$heading2);
    }
    &-cards{
        display: flex;
        gap: 24px;
        margin-top: 48px;
    }
    &_text{
        max-width: 450px;
        margin: 16px auto 48px;
    }
}

@media(max-width:450px){

    .news{
        margin-bottom: 45px;
        &-cards{
            flex-wrap: wrap;
            margin:30px auto;
            max-width: 302px;
        }
    }

}
</style>