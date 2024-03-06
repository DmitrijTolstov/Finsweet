<script setup>


const props = defineProps({
  image:'',
  heading:'',
  text:''
})


</script>

<template>
    <ul class="list">
      <div class="list-image">
        <img :src="props.image" alt="">
      </div>
      <div class="list-content">
        <li class="list-content_heading">{{ props.heading }}</li>
        <p class="list-content_text">{{ props.text }}</p>
      </div>
    </ul>
</template>

<style scoped lang='scss'>
.list{
  display: flex;
  margin-top: 64px;
  align-items: baseline;
  &-image{
    margin-right: 30px;
  }  
  &-content{
    max-width: 332px;
    &_heading{
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    &_text{
      opacity: .4;
    }
  }
}
</style>