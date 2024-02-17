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


</script>

<template>
    <section class="events">
        <div class="container">
            <h2 class="events__title">Our Events</h2>
            <div class="events-cards">
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
    &-cards{
        display: flex;
        margin-bottom: 136px;
        margin-top: 48px;
        justify-content: space-between;
    }
    &__title{
        font-size: 40px;
    }
}

</style>