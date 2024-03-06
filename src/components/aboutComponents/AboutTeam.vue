<script setup>
import PeopleCard from '@/components/PeopleCard.vue';
const cards = [
    {
        images:'image1',
        name:'Leonard John Davies',
        post:'Cofounder, CEO'
    },
    {
        images:'image2',
        name:'Francis Weber',
        post:'Vice Chairman'
    },
    {
        images:'image3',
        name:'Kyla Obrien',
        post:'Head of Authority'
    },
    {
        images:'image4',
        name:'Adrian Dixon',
        post:'Support Executive'
    },
    {
        images:'image5',
        name:'Freddy Busby',
        post:'Project Manager'
    },
    {
        images:'image6',
        name:'Dale Banks',
        post:'Accountatnt, Finance'
    },
    {
        images:'image7',
        name:'Miriam Middleton',
        post:'Cofounder, CEO'
    },
    {
        images:'image8',
        name:'Ellen Walton',
        post:'Vice Chairman'
    },
];

</script>

<template>
    <section class="team">
        <div class="container">
            <h2 class="team__title">
                Meet our team
            </h2>
            <p class="team__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div class="team-cards">
                <PeopleCard
                v-for="(card, index) in cards" :key="index"
                :images=card.images
                :name=card.name
                :post=card.post
                ></PeopleCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.team{
    margin: 96px 0;
    text-align: center;
    &__title{
        font-size: $heading2;
        font-weight: 700;
        margin-top: 16px;
    }
    &__text{
        opacity: .4;
        max-width: 519px;
        margin: 0 auto;
    }
    &-cards{
        display: flex;
        gap: 32px;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 46px;
    }
}
</style>