<script setup>
import {ref} from 'vue'

const props = defineProps({
    bgColor:{
        type:String,
        default:null
    },
    title:{
        type:String,
        default:"Donate",
    },
    color:{
        type:String,
        default:'white'
    },
})

</script>

<template>
    <button :style="{backgroundColor:bgColor, color:color}" class="btn" > {{ title }}</button>
</template>

<style scoped lang='scss'>
.btn{
    padding: 12px 32px;
    background-color: black;
    border-radius: 4px;
}
</style>