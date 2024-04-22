<script setup>
import NewsCard from '@/components/NewsCard.vue';

const cards = [
    {
        images:'src/assets/images/newsCard1.png',
        title:'Don’t destroy greenery and don’t spoil scenery',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
        images:'src/assets/images/newsCard2.png',
        title:' Is climate change happening faster than expected?',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
        images:'src/assets/images/newsCard3.png',
        title:"Top 10 facts about wind farms you didn't know",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
        images:'src/assets/images/newsCard4.png',
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
        font-size: $heading2;
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
</style>