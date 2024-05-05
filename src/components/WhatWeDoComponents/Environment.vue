<script setup>
import EnvironmentList from '@/components/EnvironmentList.vue';

const imgUrls = import.meta.glob('@/assets/images/icons/*.png', {
  import: 'default',
  eager: true
})

const createCards = () =>{

let card = [
{
    heading:'Build healthy cities',
    text:'orem ipsum dolor sit amet, consectetur adipiscing elit. '
},
{
    heading:'Protect land and water',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
},
{
    heading:'Tree plantation',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
},
{
    heading:'Water sustainability',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
},
{
    heading:'Animal safety',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
},
{
    heading:'Biodiversity',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
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
    <section class="environment">
        <div class="container">
            <h2 class="environment__heading">What we do for the environment</h2>
            <div class="environment-content">
                <EnvironmentList
                v-for="(item, index) in createCards()" :key="index"
                :image="item.images"
                :heading="item.heading"
                :text="item.text"
                ></EnvironmentList>
            </div>
        </div>
    </section>
</template>
<style scoped lang='scss'>
@import '@/assets/vars.scss';
.environment{
    padding: 96px;
    background-color: $third-green;
    &__heading{
        font-size: clamp(35px,3vw,$heading2);
        font-weight: 700;
    }
    &-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 48px;
    }
}


@media(max-width:850px){

.environment{
    padding: 20px;
    &-content{
        gap: 20px;
    }
}


}
</style>