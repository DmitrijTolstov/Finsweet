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
    },
    display:'',
    gap:''
})

</script>

<template>
    <div :style="`display: ${props.display}; gap:${props.gap}`"  class="card">
        <img :src="props.images" class="card__image">
        <div class="card-content">
            <h4 class="card__title">{{ props.title }}</h4>
            <p class="card__text">{{props.text}}</p>
        </div>
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
        font-weight: 700;
    }
    &__text{
        color: $secondary-text;
    }
}

@media (max-width:1310px){

    .card{
        &__image{
            width: 100%;
        }
    }
}

</style>