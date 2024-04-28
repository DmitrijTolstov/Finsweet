<script setup>
import EventsCard from './EventsCard.vue';

const cards = [
    {
        title:'Say no to plastic usage and save the planet',
        month:'SEP',
        monthDate:23,
    },
    {
        title:'Weekly cleaning program',
        month:'SEP',
        monthDate:25,
    }
]

const props = defineProps({
    direction: String
})


</script>

<template>
    <section class="events">
        <div class="container">
            <h2 class="events__title">Our Events</h2>
            <div class="events-cards" :style="{flexDirection:direction}">
                <EventsCard v-for="({title,month,monthDate} = cards, index) in cards" :key="index"
                :title="title"
                :month="month"
                :date="monthDate"
                >
            </EventsCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>
.events{
    margin: 96px 0;
    &-cards{
        display: flex;
        margin-bottom: 136px;
        margin-top: 48px;
        gap: 15px;
        justify-content: space-between;
    }
    &__title{
        font-size: 40px;
    }
}


@media(max-width:850px){
    .events{
        &-cards{
            flex-direction: column;
            align-items: center;
            justify-content: baseline;
        }
    }
}

</style>