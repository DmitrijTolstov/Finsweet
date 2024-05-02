<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';


</script>

<template>
    <Header></Header>
    <section class="blogs">
        <div class="container">
            <div class="blogs-header">
                <data class="blogs-header__date">
                    21 DEC 2021
                </data>
                <h1 class="blogs-header__title">
                    Is climate change happening faster <br> than expected?
                </h1>
                <p class="blogs-header__text">
                    Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit.
                </p>
                <img class="blogs-header__img" src="@/assets/images/image-news.png" alt="">
            </div>
            <div class="blogs-container">
            <div class="blogs-main">
                <h2 class="blogs-main__title">
                    Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque
                </h2>
                <p class="blogs-main__text">
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
                <p class="blogs-main__text">
                    Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                    Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.

                </p>
                <p class="blogs-main__text">
                    Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.

                </p>
            </div>
            <div class="blogs-secondary">
                <h3 class="blogs-secondary__title">
                    Transform Your Idea Into Reality with Ether a Leading Digital Agency
                </h3>
                <ul class="blogs-secondary__lists">
                    <li class="blogs-secondary__list">
                        Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis.
                    </li>
                    <li class="blogs-secondary__list">
                        Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                    </li>
                    <li class="blogs-secondary__list">
                        Mauris morbi sed dignissim a in nec aliquam fringilla et. 
                    </li>
                    <li class="blogs-secondary__list">
                        Consectetur feugiat quis hac enim nullam in enim.
                    </li>
                </ul>
                <h3 class="blogs-secondary__title">
                    Transform Your Idea Into Reality with Ether a Leading Digital Agency
                </h3>
                <p class="blogs-secondary__text">
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
                <p class="blogs-secondary__text">
                    Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                </p>
            </div>
            </div>
        </div>
    </section>
    <Footer></Footer>

</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.blogs{
    color: $secondary-text;
    &-header{
        text-align: center;
        margin-bottom: 96px;
        &__date{
            font-weight: 500;
            margin-bottom: 32px;
            color: $primary-text;
        }
        &__title{
            font-size: clamp(40px,4vw,$heading1);
            font-weight: 700;
            margin-bottom: 16px;
            color: $primary-text;
        }
        &__text{
            font-size: clamp(13px,3vw,16px);
            margin-bottom: 48px;
            color: $secondary-text;
        }

    }
    &-main{
        &__title{
            color: $primary-text;
            font-size: clamp(35px,4vw,$heading2);
            margin-bottom: 32px;
            font-weight: 700;
        }
        &__text{
            font-size: clamp(13px,3vw,16px);
            margin-bottom: 32px;
            &:not(:last-child){
                margin-bottom: 16px;
            }
        }

    }
    &-secondary{
        margin-bottom: 96px;
        &__title{
            color: $primary-text;
            font-size: clamp(25px,4vw, $heading3);
            font-weight: 700;
            margin-bottom: 16px;
        }
        &__lists{
            margin: 16px 0 32px 30px ;
        }
        &__list{
            list-style-type: disc;
        }
        &__text{
            &:not(:last-child){
                margin-bottom: 16px;
            }
        }
    }
    &-container{
        max-width: 1034px;
        margin: 0 auto;
        padding-inline: 10px;
    }
}


@media(max-width:850px){

    .blogs{
    &-header{
        margin-bottom: 45px;
        &__date{
            margin-bottom: 15px;
        }
        &__text{
            margin-bottom: 13px;
        }
        &__img{
            max-width: 100%;
            min-height: 200px;
        }
    }
    &-main{
        &__title{
            margin-bottom: 15px;
        }
        &__text{
            margin-bottom: 13px;
        }

    }
    &-secondary{
        margin-bottom: 45px;
        &__lists{
            margin: 16px 0 32px 30px ;
        }
        &__list{
            list-style-type: disc;
        }
        &__text{
            &:not(:last-child){
                margin-bottom: 16px;
            }
        }
    }
}





}




</style>