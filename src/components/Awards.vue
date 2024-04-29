<script setup>

const props = defineProps({
    img:{
        type:String,
        default:''
    },
    date:{
        type:Number,
        default:2021
    },
    title:{
        type:String,
        default:'some title'
    },
    text:{
        type:String,
        default:'Some text'
    }
})


</script>

<template>
    <div class="award">
        <img :src="`${props.img}`" alt="" class="awards__img">
        <h3 class="awards__date">{{ props.date }}</h3>
        <h4 class="awards__title">{{ props.title }}</h4>
        <p class="awards__text">{{ props.text }}</p>
    </div>

</template>

<style scoped lang='scss'>
.award{
    display: flex;
    flex-direction: column;
    gap:7px;
}

@media(max-width:850px){
    .award{
    display: block;
}

}
</style>