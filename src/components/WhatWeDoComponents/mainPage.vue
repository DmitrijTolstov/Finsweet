<script setup>
</script>

<template>
    <section class="WhatWeDo">
        <div class="container">
            <div class="WhatWeDo-container">
                <div class="WhatWeDo-content">
                    <p class="WhatWeDo-content__heading">
                        What We Do 
                    </p>
                        <h2 class="WhatWeDo-content__title">
                            We are working <hr> worldwide
                        </h2>
                        <p class="WhatWeDo-content__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                </div>
                <div class="WhatWeDo-container_image">
                    <img src="@/assets/images/WhatWeDo.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.WhatWeDo{
    margin-bottom: 96px;
    &-container{
        display:flex;
        justify-content: space-between;
        gap: 110px;
    }
    &-content{
        &__heading{
            @include text-line();
            margin-bottom: 32px;
        }
        &__title{
            font-size: clamp(35px, 3vw,$heading2);
            margin-bottom: 34px;
            font-weight: 700;
        }
        &__text{
            font-size: clamp(13px, 3vw,16px);
            opacity: .4;
        }
    }
}

@media(max-width:850px){

.WhatWeDo{
    margin-bottom: 45px;
    &-container{
        flex-direction: column;
        gap: 30px;
        &_image{
            align-self: end;
            img{
                max-width: 100%
            }
    }
    }
    &-content{
        max-width: 60%;
        &__heading{
            @include text-line();
            margin-bottom: 16px;
        }
        &__title{
            margin-bottom: 17px;
        }
    }
    
}



}

</style>