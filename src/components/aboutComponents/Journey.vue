<script setup>
</script>

<template>
    <section class="journey">
        <div class="container">
            <div class="journey-container">
                <div class="journey-container-content">
                    <p class="journey-container-content__heading">
                        OUR JOURNEY 
                    </p>
                    <h2 class="journey-container-content__title">
                        How we raised 34M
                    </h2>
                    <p class="journey-container-content__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
                    </p>
                    <div class="journey-container-content_quantity">
                        <ul>
                            <li>34M+</li>
                            <p>Donation Received</p>
                        </ul>
                        <ul>
                            <li>400+</li>
                            <p>Volunters</p>
                        </ul>
                        <ul>
                            <li>40K+</li>
                            <p>Trees planted</p>
                        </ul>
                    </div>
                </div>
                <div class="journey-container_images">
                    <img src="@/assets/images/journey.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.journey{
    margin: 96px 0;
    color: $white;
    &-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 64px 0 64px 90px;
        background-color: $black;
        border-radius: 12px;
        gap: 48px;
        &-content{
            &__heading{
                font-weight: 700;
                margin-bottom: 16px;
                text-transform: uppercase;
                line-height: 19px;
            }
            &__title{
                font-size: clamp(25px,3vw,$heading2);
                margin-bottom: 16px;
            }
            &__text{
                font-size: clamp(13px,3vw,16px);
                margin-bottom: 32px;
                opacity: .5;
            }
            &_quantity{
                display: flex;
                gap: 32px;
                ul{
                    li{
                        font-size: clamp(16px,4vw,24px);
                        margin-bottom: 5px;
                    }
                    p{
                        font-size: clamp(13px,3vw,16px);
                        opacity: .5;
                    }
                }
            }
    }
}
}


@media(max-width:850px){


    .journey{
    margin-block: 45px;
    &-container{
        padding: 20px;
        gap: 20px;
        flex-direction: column;
    &_images{
        img{
            max-width: 100%
        }
    }
}
}



}


</style>