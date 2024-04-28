<script setup>
import Buttons from '@/components//Buttons.vue';
</script>

<template>
    <div class="banner">
        <div class="container">
            <div class="banner-box">
                <h1 class="banner-box__text">
                    Save the environment today for a better tomorrow
                </h1>
                <div class="banner-box_buttons">
                    <router-link to="/whatWeDo">
                    <Buttons :color="'black'" :bgColor="'white'" :title="'What we do'"></Buttons>
                    </router-link>
                    <Buttons class="video"  :title="'Play Video'"></Buttons>
                </div>
            </div>
                <div class="banner-statistics">
                    <p>23,800 trees planted</p>
                    <div class="line"></div>
                    <p>5840 donations collected</p>
                </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';
.banner{
    background-image: url('@/assets/images/banner.png');
    background-size: cover;
    background-position: center;
    margin-block-start: -96px;
    padding: 128px 110px 64px 110px;
    margin-bottom: 96px;
    &-box{
        padding-bottom: 192px;
        max-width: 640px;
        &__text{
            font-weight: 700;
            font-size: $home-heading;
            color: $white;
        }
        &_buttons{  
            margin-top: 48px;
        }
    }
    &-statistics{
        display: flex;
        color: $white;
        justify-content: space-between;
        gap: 24px;
        align-items: center;
    }
}

.video{
    margin-left: 24px;
    background-image: url('src/assets/images/play.svg');
    background-repeat: no-repeat;
    background-position: -100px;
    background-color: inherit;
    text-align: center;
    transition: all .3s linear;
    min-height:  43px;
    &:hover{
        background-color: rgba(255,255,255,.1);
        background-position: center;
        font-size:0px;
    }
}

.line{
    width: 70%;
    height: 1px;
    background-color:$border
}


@media(max-width:900px){

    .banner{
        padding: 60px 10px 64px 10px;
        margin-bottom: 60px;
        &-box{
            padding-bottom: 90px;

            &__text{

                font-size: clamp(30px, 6vw, $home-heading);
            }

            &_buttons{
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                .video{
                    margin-left: 0;
                    min-width: 147px;
                }
            }
        }
    }


}
</style>