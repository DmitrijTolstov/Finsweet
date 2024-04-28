<script setup>
import {ref} from 'vue'
import Buttons from '@/components/Buttons.vue';
import Supporters from '../Supporters.vue';
</script>

<template>
    <div class="container">
        <section class="about">
            <div class="about-contents">
                <div class="about-content">
                    <p class="text-line">
                        Know About us
                    </p>
                    <div class="about-content_left">
                        <h2 class="about-content_title">
                        We help nature smile and survive everywhere
                    </h2>
                    <p class="about-content_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
                    </p>
                    <p class="about-content_text">
                        ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <router-link to="/about" >
                        <Buttons :title="'Learn more'" :bgColor="'#70C174'"></Buttons>
                    </router-link>
                    </div>
                </div>
                <div class="about-content_video">
                    <a href="#">
                        <img class="about-content_video__link" src="@/assets/images/play.svg" alt="">
                        <img src="@/assets/images/aboutHome-video.png" alt="">
                    </a>
                </div>
            </div>
            <Supporters class="about-supporters"></Supporters>
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
        &_left{
            margin-left: 96px;
        }
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
        display: none;
    }
}

.text-line{
    @include text-line(left);
}


@media(max-width:900px){
.about{

    &-contents{
        margin-right: 0;
        margin-bottom: 40px;
    }

    &-content{
        margin-right: 30px;
        &_title{
            font-size: clamp(25px,5vw,$heading2);
            margin-block: 20px;
        }
        &_text{
            margin-bottom: 15px;
        }
        &_left{
            margin-bottom: 60px;
            margin-left: 0;
        }
    }
}
}

@media(max-width:450px){
    .about{
        &-contents{
            flex-wrap: wrap;
        }

&-content{
    &_left{
        margin-bottom: 20px;
    }
    &_video{
        img{
            max-width: 100%;
        }
    }
}
}



}
</style>