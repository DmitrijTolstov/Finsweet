<script setup>
import Button from '@/components/Buttons.vue'
import Header from '@/components/Header.vue';
import NewsCard from '@/components/NewsCard.vue';


const blogsCard = [
    {
        title:'Don’t destroy greenery and don’t spoil scenery.',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
    },
    {
        title:'Why saving wildlife is extremely important',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
    },
    {
        title:'Caring for the present is caring for the future',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
    },
]




</script>

<template>
    <section class="news">
    <Header></Header>
        <div class="container">
            <div class="news-container">
                <div class="news-content">
                        <p class="news-content__heading">
                            Top news
                        </p>
                        <div class="pl-96">
                            <h2 class="news-content__title">
                                Our goal is to make water available for everyone
                            </h2>
                            <p class="news-content__text">
                                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                            </p>
                            <router-link to="/blogs">
                                <Button :bg-color="'#70C174'" :title="'Read more'"></Button>
                            </router-link>
                        </div>
                </div>
                <div class="news-blogs">
                    <div class="news-blogs-container">
                        <NewsCard
                        v-for="(card, index) in blogsCard"
                        :key="index"
                        :title="card.title"
                        :text="card.text"
                        :images="`src/assets/images/blogs/image${index + 1}.png`"
                        :display="'flex'"
                        :gap="'24px'"
                    ></NewsCard>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.news{
    background-color:$third-green;
    margin-bottom: 96px;
    &-container{
        display:flex;
        justify-content: space-between;
        gap: 96px;
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
        }
    }
    &-container{
        display:flex
    }
    &-blogs{
        margin-bottom: 96px;
        padding: 24px;
        background-color: $white;
        border-radius: 12px;
        &-container{
            display:flex;
            flex-direction: column;
            gap:24px;
        }
    }
}
.pl-96{
    padding-left: 96px
}
</style>