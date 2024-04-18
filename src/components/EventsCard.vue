<script setup>
const props = defineProps({
    date:{
        type:Number,
        default:'0',
        required:true
    },
    month:{
        type:String,
        default:'Sep',
        required:true
    },
    title:{
        type:String,
        default:'Say no to plastic usage and save the planet',
        required:true
    },
    
})


</script>

<template>
    <div class="card">
        <div class="card-date">
            <h2 class="card-date__num">{{ props.date }}</h2>
            <p class="card-date__month">{{ props.month }}</p>
        </div>
        <div class="card-content">
            <p class="card-content__paragraph">Next Events</p>
            <h3 class="card-content__title">{{ props.title }}</h3>
        </div>
        <button class="card__btn"></button>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.card{
    display: flex;
    justify-content: space-between;
    background-color: $secondary-green;
    align-items: start;
    padding: 40px;
    gap: 24px;
    border-radius: 8px;
    &-date{
        margin-top: -10px;
            &__num{
                font-size: $heading2;
            }
        }
    &-content{
        width:381px;
        &__paragraph{
            @include text-line(right,0, 185px)
        }
        &__title{
            font-size: $heading3;
            line-height: 42px;
            margin-top: 8px;
        } 
    }
    &__btn{
        background:center no-repeat url(src/assets/images/Arrow.svg) $white;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin: auto;
    }
}

</style>