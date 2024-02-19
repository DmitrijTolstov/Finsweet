<script setup>
import Supporters from '../Supporters.vue';
</script>

<template>
    <section class="about">
        <div class="container">
            <p class="about__text">
                Know about us
            </p>
            <div class="about-content about-content_top">
                <h2 class="about-content__title">
                    We are a nonprofit team <hr> working worldwide
                </h2>
                <p class="about-content__text">
                    <b>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.
                </p>
            </div>
            <div class="about-content about-content_down">
                <div class="about-content_banner">
                    <img class="about-content_banner__play" src="@/assets/images/play.svg" alt="">
                    <img src="@/assets/images/background-about-banner.png" alt="">
                </div>
                <div class="about-content_business">
                    <div class="about-content_business_mission about-content_business__width">
                        <p class="about-content_business__text">
                            our mission
                        </p>
                        <h3 class="about-content_business__title">
                            We make the world we save our own environment
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>
                    <div class="about-content_business_vision about-content_business__width">
                        <p class="about-content_business__text">
                            our Vision
                        </p>
                        <h3 class="about-content_business__title">
                            Plant more trees to make world air pollution free
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>
                </div>
                <Supporters></Supporters>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';

.about{
    position: relative;
    padding-bottom: 96px;
    &::after{
      content: ' ';
      position: absolute;
      top: 40%;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: $third-green;
      z-index: -1;
    }
    &__text{
        @include text-line(left)
    }
    &-content{
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
        }
        &_top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 96px;
            margin-top: 32px;
        }
        &__text{
            max-width: 496px;
            b{
                display: block;
                margin-bottom: 16px;
                font-size: $heading4;
            }
        }
        &__title{
            font-size: $heading2;
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
                font-size: $heading3;
                margin-bottom: 6px;
                font-weight: 700;
            }
            &__text{
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 16px;
            }
            &__width{
                max-width: 496px;
            }
        }
    }
}
</style>