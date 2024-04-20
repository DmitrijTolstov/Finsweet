<script setup>
import OurBusiness from '@/components/ProjectsComponents/OurBusiness.vue';

</script>

<template>
    <section class="projects">
        <div class="container">
            <div class="projects-container">
            <p class="projects__heading">
                Our project
            </p>
            <h1 class="projects__title">
                Weekly cleanliness program in city
            </h1>
            <p class="projects__text">
                Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
            </p>
            <p class="projects__text">
                Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.
            </p>
            <p class="projects__text">
                Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.
            </p>
            <img src="@/assets/images/project-news.png" alt="">
            <article class="projects-news">
                <h2 class="projects-news__title">
                    Some cool heading
                </h2>
                <p class="projects__text ">
                    Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis, ultrices ut dui.
                </p>
                <ul class="projects-news_lists">
                    <li class="projects-news__list">
                        Posuere sed pulvinar enim faucibus justo, cursus. 
                    </li>
                    <li class="projects-news__list">
                        In diam facilisi at sit convallis blandit blandit in.
                    </li>
                    <li class="projects-news__list">
                        Maecenas odio orci lectus urna ante consequat erat non morbi.
                    </li>
                </ul>
                <p class="projects__text">
                    Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi.
                </p>
            </article>
        </div>
        </div>
        <div class="ourBusiness">
            <OurBusiness></OurBusiness>
        </div>
    </section>
</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';

.projects{
    &-container{
        max-width: 832px;
        margin:0 auto;
    }
    &__heading{
        @include text-line(left,0);
        margin-bottom:32px;
    }
    &__title{
        font-size: $heading1;
        font-weight:700;
        margin-bottom:32px;
    }
    &__text{
        margin-bottom:32px;
        opacity:.5;
    }
    &-news{
        &__title{
            font-size: $heading2;
            font-weight: 700;
            margin-top:32px;
            margin-bottom:16px;
        }
        &_lists{
            margin:32px 0;
        }
        &__list{
            list-style-type: disc;
            margin-left:17px;
        }
    }
}
.ourBusiness{
    background-color: $off-white ;
    padding: 96px 0;
}
</style>