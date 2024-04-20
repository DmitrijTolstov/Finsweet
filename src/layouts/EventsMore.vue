<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Events from '@/components/Events.vue';
</script>

<template>
    <section class="events">

        <div class="events-bg">
                <Header></Header>
                <div class="events-container">
                <div class="events-heading">
                    <h1 class="events-heading__title">
                        Say no to using plastic and save Earth
                    </h1>
                    <div class="events-heading__links">
                        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.6364 10.8182C20.6364 18.4545 10.8182 25 10.8182 25C10.8182 25 1 18.4545 1 10.8182C1 8.21424 2.03441 5.71695 3.87568 3.87568C5.71694 2.03441 8.21424 1 10.8182 1C13.4221 1 15.9194 2.03441 17.7607 3.87568C19.6019 5.71695 20.6364 8.21424 20.6364 10.8182Z" stroke="#70C174" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.822 14.0918C12.6295 14.0918 14.0948 12.6266 14.0948 10.8191C14.0948 9.01164 12.6295 7.54639 10.822 7.54639C9.01457 7.54639 7.54932 9.01164 7.54932 10.8191C7.54932 12.6266 9.01457 14.0918 10.822 14.0918Z" stroke="#70C174" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        <address class="events-heading__address">
                            8 Brewery Drive, Hudson, NH 03051, USA
                        </address>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2357 1V5.7999M7.63519 1V5.7999M1.63672 10.6001H23.2363M4.03667 3.40049H20.8363C22.1618 3.40049 23.2363 4.47499 23.2363 5.80044V22.6001C23.2363 23.9256 22.1618 25 20.8363 25H4.03667C2.71121 25 1.63672 23.9256 1.63672 22.6001V5.80044C1.63672 4.47499 2.71121 3.40049 4.03667 3.40049Z" stroke="#70C174" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        <data value="September 3, 2021 8:30 AM" class="events-heading__date">
                            September 3, 2021 8:30 AM
                        </data>
                    </div>
                </div>
            </div>
        </div>

            <div class="events-container">

            <div class="events-about">
                <h1 class="events-about__title">
                    About
                </h1>
                <p class="events-about__text">
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
                <p class="events-about__text">
                    Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                    Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.
                </p>
                <img src="@/assets/images/image-eventsMore.png" alt="" class="events-about__image">
                <p class="events-about__text">
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
            </div>

            <Events :direction="'column'"></Events>

            </div>
    </section>
    <Footer></Footer>

</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.events{
   
    &-bg{
        background-color: $third-green;
        margin-bottom: 96px;
    }
    &-heading{
        margin: 0 auto;
        &__address{
            margin-right: 48px;
            margin-left: 8px;
        }
        &__date{
            margin-left: 8px;
        }
        &__title{
            font-size: $heading1;
            font-weight: 700;
        }
        &__links{
            display: flex;
            margin-top: 48px;
            padding-bottom: 96px;
            align-items: center;
        }
    }
    &-container{
        max-width: 768px;
        margin: 0 auto;

    }
    &-about{
        &__title{
            font-size: $heading2;
            font-weight: 700;
            margin-bottom: 32px;
        }
        &__text{
            color: $secondary-text;
            margin-top: 32px;
            &:not(:last-child){
                margin-bottom: 16px;
            }
        }
    }
}

</style>