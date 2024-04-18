<script setup>

import {  reactive } from 'vue';



const accordion = reactive(
    [
    {
        links: 'Overview',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse. ',
        isOpen: true,
        id:1
    },
    {
        links: 'Impact',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse. psum dolor sit amet, consectetur adipiscing elit. Suspendisse. ',
        isOpen: false,
        id:2
    },
    {
        links: 'What You get',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
        isOpen: false,
        id:3
    },
]
)

const activeText = computed(() =>{
    let text
    accordion.map(item => item.isOpen === true ? text = item.text : '')
    return text
})

const activeIsOpen = (index =>{
     let color
     accordion.map(item => item.isOpen === true && item.id === index + 1 ? color = '2px solid #70C174' : 'none')
     return color
})





function flagsUpdate(idx,arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i].id === idx + 1){
            arr[i].isOpen = true
        }else if(arr[i].isOpen === true){
            arr[i].isOpen = false
        }
    }
}

</script>

<template>
    <div class="accordion" >
        <a class="accordion__link" :style="{borderBottom:activeIsOpen(index)}" @click="flagsUpdate(index,accordion)" v-for="({links}, index) in accordion" :key="index">
        {{ links }}
        </a>
        <p class="accordion__text">{{ activeText }}</p>
    </div>
</template>

<style scoped lang='scss'>

.accordion{
    &__link{
        cursor: pointer;
        
        &:not(last-child){
            margin-right: 32px;
        }
    }
    &__text{
        margin-top: 32px;
    }
}


</style>