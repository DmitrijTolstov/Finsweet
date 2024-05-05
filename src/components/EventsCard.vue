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
        <router-link to="/events">
            <button class="card__btn"></button>
        </router-link>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.card{
    max-width: clamp(400px, 45vw, 620px);
    display: flex;
    justify-content: space-between;
    background-color: $secondary-green;
    padding-inline: clamp(20px, 2vw, 40px);
    padding-block:  clamp(20px, 2vw, 40px);
    align-items: center;
    gap: 24px;
    border-radius: 8px;
    &-date{
        margin-top: -10px;
        align-self: flex-start;
            &__num{
                font-size: clamp(30px,3vw, $heading2);
            }
        }
    &-content{
        width:381px;
        align-self: flex-start;
        &__paragraph{
            font-size: clamp(11px, 1vw, 16px);
            @include text-line(right,0, 185px)
        }
        &__title{
            font-size: clamp(15px, 2vw, $heading3);
            line-height: 1.2;
            margin-top: 8px;
            font-weight: 700;
        } 
    }
    &__btn{
        background:center no-repeat url(@/assets/images/Arrow.svg) $white;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin: auto;
    }
}


@media (max-width:1310px){

    .card{
        
     &-date{
         margin-top: -6px;
         }
     &-content{
         align-self: flex-start;
         &__title{
             line-height: 1.2;
             margin-top: 8px;
         } 
     }
    
}
}

@media (max-width:850px){

.card{
 &-date{
     margin-top: -6px;
     }
 &-content{
     align-self: flex-start;
     &__paragraph{
            @include text-line(right,0, 65px)
        }
     &__title{
         line-height: 1.2;
         margin-top: 8px;
     } 
 }

}
}

@media (max-width:430px){

.card{
    text-align: center;
    border-radius: 50%;
    display: block;
    div{
            margin-bottom: 15px;
        }
    &-content{
        max-width: clamp(170px, 30vw, 380px) ;
     &__paragraph{
        margin-left: 0;
        position: static;
        }
 }
}
}

</style>