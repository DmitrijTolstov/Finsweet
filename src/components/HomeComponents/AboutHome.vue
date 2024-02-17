<script setup>
import {ref} from 'vue'
import Buttons from '@/components/Buttons.vue';
</script>

<template>
    <div class="container">
        <section class="about">
            <div class="about-contents">
                <div class="about-content">
                    <p class="text-line">
                        Know About us
                    </p>
                    <h2 class="about-content_title">
                        We help nature smile and survive everywhere
                    </h2>
                    <p class="about-content_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
                    </p>
                    <p class="about-content_text">
                        ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <Buttons :title="'Learn more'" :bgColor="'#70C174'"></Buttons>
                </div>
                <div class="about-content_video">
                    <a href="#">
                        <img class="about-content_video__link" src="@/assets/images/play.svg" alt="">
                        <img src="@/assets/images/aboutHome-video.png" alt="">
                    </a>
                </div>
            </div>
            <div class="about-supporters">
                <p class="about-supporters_text">
                    our Supporters
                </p>
                <div class="about-supporters_logo">
                    <img src="@/assets/images/about-logo1.svg" alt="">
                    <img src="@/assets/images/about-logo2.svg" alt="">
                    <img src="@/assets/images/about-logo3.svg" alt="">
                    <img src="@/assets/images/about-logo4.svg" alt="">
                    <img src="@/assets/images/about-logo5.svg" alt="">
                    <img src="@/assets/images/about-logo2.svg" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.about{
    &-contents{
        display: flex;
        align-items: center;
    }
    &-content{
        margin-right: 96px;
        &_title{
            font-size: $heading2;
            font-weight: 700;
            margin: 32px 0;
        }
        &_text{
            margin-bottom: 48px;
        }
        &_video{
            position: relative;
            &__link{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                opacity: 0;
                transition: all 1s;
            }
            &:hover{
                .about-content_video__link{
                    opacity: 1;
                    transition: all 1s;
                }
            }
        }
    }
    &-supporters{
        margin-top: 64px;
        &_text{
            margin-bottom: 32px;
            text-transform: uppercase;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                height: 2px;
                background-color:$border ;
                width: 1094px;
                transform: translatey(-50%);
            }
        }
        &_logo{
            display: flex;
            justify-content: space-between
        }
    }
}

.text-line{
    @include text-line(left);
}
</style>