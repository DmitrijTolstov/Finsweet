<script setup>

const business = [
    {
        image:'src/assets/images/projects-icons/image1.png',
        title:'200+ Plantation in 1 week',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        image:'src/assets/images/projects-icons/image2.png',
        title:'230 People Have donated',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        image:'src/assets/images/projects-icons/image3.png',
        title:'30+ people joined ',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        image:'src/assets/images/projects-icons/image4.png',
        title:'$324 Raised for this initiate',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
]


</script>

<template>
            <div class="ourBusiness-container">
                <div class="ourBusiness-content" v-for="({title,text,image}, index) in business" :key="index">
                    <div class="ourBusiness-content__header">
                        <img width="28px" height="28px" :src="image" alt="">
                        <h4 class="ourBusiness-content__title">{{ title }}</h4>
                    </div>
                    <p class="ourBusiness-content__text">{{ text }}</p>
                </div>
            </div>
</template>

<style scoped lang='scss'>

.ourBusiness{
    &-container{
        margin: 0 auto;
        max-width: 70%;
        display: flex;
        flex-wrap: wrap;
        gap: 48px;
        justify-content: space-evenly;
    }

    &-content{
        max-width:450px;
        &__header{
            display: flex;
            margin-left: -54px;
            gap: 26px;
        }
        &__title{
            font-size:clamp(16px,4vw,24px);
            font-weight:700;
            margin-bottom:8px;
        }
        &__text{
            font-size: clamp(13px,3vw,16px);
        }
    }
}


@media(max-width:850px){

.ourBusiness{
    &-container{
        gap: 20px;
    }
    &-content{
        &__header{
            margin-left: -46px;
        }
    }
}

}
</style>