<script setup>
const props = defineProps({
    images:{
        type:String,
        default: null
    },
    title:{
        type:String,
        require:true,
        default:'title'
    },
    text:{
        type:String,
        require:true,
        default:'lorem ipsum'
    }
})

</script>

<template>
    <div class="card">
        <img :src="props.images" class="card__image">
        <h4 class="card__title">{{ props.title }}</h4>
        <p class="card__text">{{props.text}}</p>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.card{
    &__image{
        border-radius: 8px;
    }
    &__title{
        margin-top: 16px;
        margin-bottom: 8px;
        font-size: $heading4;
    }
    &__text{
        opacity: .4;
    }
}
</style>