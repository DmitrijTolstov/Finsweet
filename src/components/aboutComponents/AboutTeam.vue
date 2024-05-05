<script setup>
import PeopleCard from '@/components/PeopleCard.vue';

const imgUrls = import.meta.glob('@/assets/images/team/*.png', {
  import: 'default',
  eager: true
})

const createCards = () =>{

    let card = [
    {
        name:'Leonard John Davies',
        post:'Cofounder, CEO'
    },
    {
        name:'Francis Weber',
        post:'Vice Chairman'
    },
    {
        name:'Kyla Obrien',
        post:'Head of Authority'
    },
    {
        name:'Adrian Dixon',
        post:'Support Executive'
    },
    {
        name:'Freddy Busby',
        post:'Project Manager'
    },
    {
        name:'Dale Banks',
        post:'Accountatnt, Finance'
    },
    {
        name:'Miriam Middleton',
        post:'Cofounder, CEO'
    },
    {
        name:'Ellen Walton',
        post:'Vice Chairman'
    },
];

    const arrImages = Object.values(imgUrls)

    for(let i = 0; i<card.length; i++){
        card[i].images = arrImages[i]
    }
    return card
}


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
                v-for="(card, index) in createCards()" :key="index"
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
        font-size: clamp(35px,4vw,$heading2);
        font-weight: 700;
        margin-top: 16px;
    }
    &__text{
        font-size: clamp(13px,3vw,16px);;
        opacity: .4;
        max-width: 519px;
        margin: 0 auto;
    }
    &-cards{
        display: flex;
        gap: 32px;
        flex-wrap: wrap;
        margin-top: 46px;
    }
}

@media(max-width:850px){
    .team{
    margin-block: 45px;
    text-align: center;
    &-cards{
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 23px;
    }
}



}
</style>