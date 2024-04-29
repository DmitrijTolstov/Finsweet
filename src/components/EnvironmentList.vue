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
  &-image{
    margin-right: 30px;
  }  
  &-content{
    max-width: 332px;
    &_heading{
      font-size: clamp(18px,2vw,24px);
      font-weight: 700;
      margin-bottom: 6px;
    }
    &_text{
      font-size: clamp(13px,3vw,16px);
      opacity: .4;
    }
  }
}



@media(max-width:850px){

.list{
  margin-top: 20px;
  &-content{
    max-width: 300px
  }
}


}
</style>