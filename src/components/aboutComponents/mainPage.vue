<script setup>
import AwardsAbout from './AwardsAbout.vue';
import Supporters from '@/components/Supporters.vue';
</script>

<template>
    <section class="about">
        <div class="about-bg"></div>
        <div class="container">

            <div class="about-content about-content_top">
                <div class="about-content_main">
                    <p class="about__text">
                Know about us
                </p>
                <h2 class="about-content__title">
                    We are a nonprofit team  working worldwide
                </h2>
                </div>
                <aside class="about-content_secondary">
                    <h4 class="about-content__supTitle">
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </h4>
                    <p class="about-content__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.
                    </p>
                </aside>
            </div>
            <div class="about-content about-content_down">
                <div class="about-content_banner">
                    <img class="about-content_banner__play" src="@/assets/images/play.svg" alt="">
                    <img class="about-content_banner__image" src="@/assets/images/background-about-banner.png" alt="">
                </div>
                <div class="about-content_business">
                    <div class="about-content_business_mission about-content_business__width">
                        <p class="about-content_business__supTitle">
                            our mission
                        </p>
                        <h3 class="about-content_business__title">
                            We make the world we save our own environment
                        </h3>
                        <p class="about-content_business__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>
                    <div class="about-content_business_vision about-content_business__width">
                        <p class="about-content_business__supTitle">
                            our Vision
                        </p>
                        <h3 class="about-content_business__title">
                            Plant more trees to make world air pollution free
                        </h3>
                        <p class="about-content_business__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>
                </div>
                <div class="supporters">
                    <Supporters></Supporters>
                </div>
                <AwardsAbout></AwardsAbout>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';

.about{
    padding-bottom: 96px;
    &-bg{
        &::after{
        content: ' ';
        position: absolute;
        top: 70%;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: $third-green;
        z-index: -1;
        width: 100%;
        height: 75%;
        }
    }
    
    &__text{
        @include text-line(left,96px)
    }
    &-content{
        &_secondary{
            max-width: 496px;
        }
        &_banner{
            position: relative;
            &__play{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 64px;
                height: 64px;
                cursor: pointer;
            }
            &__image{
                max-width: 100%
            }
        }
        &_top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 96px;
            margin-top: 32px;
        }
        &__supTitle{
            margin-bottom: 16px;
            font-weight: 700;
        }
        &__text{
            font-size: clamp(13px,3vw,16px);
            color: $secondary-text;
        }
        &__title{
            font-size: clamp(25px, 3.5vw,$heading2);
            font-weight: 700;
            margin-left: 96px;
            margin-top: 32px;
        }
        &_down{
            overflow: hidden;
        }
        &_business{
            margin-top: 96px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            &__title{
                font-size: clamp(15px,4vw,$heading3);
                margin-bottom: 6px;
                font-weight: 700;
            }
            &__supTitle{
                font-weight: 700;
                text-transform: uppercase;
                font-size: clamp(14px, 3vw, 20px);
                margin-bottom: 16px;
                color: $secondary-text;
            }
            &__text{
                font-size: clamp(13px,3vw,16px);
                color: $secondary-text;
            }
            &__width{
                max-width: 496px;
            }
        }
    }
}


@media(max-width:850px){

    .about{
    padding-bottom: 0;
    &-bg{
        &::after{
        top: 45%; 
        height: 50%;
        }
    }
    
    &-content{
        gap: 20px;
        
        &_top{
            margin-bottom: 45px;
        }
        &__title{
            margin-left: 0;
            margin-top: 32px;
        }
        &_down{
            overflow: hidden;
        }
        &_business{
            margin-top: 45px;
            gap: 20px;
            
        }
    }
}
.supporters{
    display: none;
}

}


@media(max-width:450px){

.about{

    &-content{
        flex-direction: column;
        &_business{
            flex-direction: column
        }
        &_banner{
            &__play{
                width: 34px;
                height: 34px;
            }
            &__image{
                max-width: 100%
            }
        }
    }
}



}
</style>