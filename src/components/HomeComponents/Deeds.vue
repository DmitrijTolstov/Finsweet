<script setup>

</script>

<template>
    <section class="deeds">
        <div class="container">
            <div class="deeds-contents">
                <div class="deeds-content">
                    <p class="text-line">
                        What we do
                    </p>
                    <div class="deeds-content_left">
                        <h2 class="deeds-content_title">
                        We care for earth, care for the coming birth
                    </h2>
                    <p class="deeds-content_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <ul class="deeds-content_list">
                        <li class="deeds-content_list__item">
                            Build Healthy Cities
                        </li>
                        <p class="deeds-content_list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                        <li class="deeds-content_list__item">
                            Tree Plantation
                        </li>
                        <p class="deeds-content_list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                        <li class="deeds-content_list__item">
                            Protect Land and Water
                        </li>
                        <p class="deeds-content_list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                        <li class="deeds-content_list__item">
                            Animal Safety
                        </li>
                        <p class="deeds-content_list__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </ul>
                    </div>
                </div>
                <div class="deeds-content_image">
                        <img src="@/assets/images/deeds.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.deeds{
    background-color: $third-green;
    margin-top: 64px;
    padding-top: 94px;
    padding-bottom: 96px;
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
            font-size: clamp(25px , 4vw, $heading2);
            font-weight: 700;
            margin: 32px 0 16px 0;
        }
        &_text{
            margin-bottom: 32px;
            font-size: clamp(13px, 2vw,16px);
            color: $secondary-text;
        }
        &_list{
            max-width: 460px;
            border-left:1px solid $border ;
            padding-left: 24px;
            &__item{
                margin-bottom: 14px;
                font-size: clamp(16px, 2vw,$heading3);
                font-weight: 700;
                &:nth-child(1){
                    background: url(@/assets/images/listIcon1.svg) left center no-repeat;
                    padding-left: 52px;
                }
                &:nth-child(3){
                    background: url(@/assets/images/listIcon2.svg) left center no-repeat;
                    padding-left: 52px;
                }
                &:nth-child(5){
                    background: url(@/assets/images/listIcon3.svg) left center no-repeat;
                    padding-left: 52px;
                }
                &:nth-child(7){
                    background: url(@/assets/images/listIcon4.svg) left center no-repeat;
                    padding-left: 52px;
                }
            }
            &__text{
                font-size: clamp(13px, 2vw, 16px);
                padding-left: 52px;
                color: $secondary-text;
                &:not(:last-child){
                    margin-bottom: 24px;
                }
                
            }
        }
    }
}

.text-line{
    @include text-line(left);
}

@media(max-width:850px){
    .deeds{
        margin-top: 0;
        padding-block: 45px;
        &-content{
            margin-right: 0;

            &_left{
                margin-left: 0;
            }

            &_image{
                display: none;
            }
        }
    }


}


</style>