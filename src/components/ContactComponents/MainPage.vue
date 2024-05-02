<script setup>
import Header from '@/components/Header.vue';
import NewsCard from '@/components/NewsCard.vue';

const offices = [
    {
        title:`Let's talk!` ,
        text:'hello@finsweet.com',
    },
    {
        title:'Headoffice',
        text:'8 Brewery Drive, Hudson, NH 03051 USA',
    },
    {
        title:'Branch Office',
        text:'178 Marconi St., Venice, 34293 Italy',
    },
]




</script>

<template>
    <section class="contact">
    <Header></Header>
        <div class="container">
            <div class="contact-container">
                <div class="contact-content">
                        <p class="contact-content__heading">
                            Contact us
                        </p>
                        <div class="pl-96">
                            <h2 class="contact-content__title">
                                We'd love to hear from you
                            </h2>
                            <p class="contact-content__text">
                                Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
                            </p>
                        </div>
                </div>
                <article class="contact-blogs">
                    <NewsCard v-for="(office, index) in offices" :key="index"
                    :title="office.title"
                    :text="office.text"
                    ></NewsCard>
                    <ul class="contact-blogs_links">
                        <li class="contact-blogs_links__link">
                            <a href="">
                                <svg class="card-social_link__facebook" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M20 9.99512C20 4.47227 15.5229 -0.00488281 10 -0.00488281C4.47715 -0.00488281 0 4.47227 0 9.99512C0 14.9863 3.65684 19.1234 8.4375 19.8736V12.8857H5.89844V9.99512H8.4375V7.79199C8.4375 5.28574 9.93047 3.90137 12.2146 3.90137C13.3084 3.90137 14.4531 4.09668 14.4531 4.09668V6.55762H13.1922C11.95 6.55762 11.5625 7.32852 11.5625 8.12012V9.99512H14.3359L13.8926 12.8857H11.5625V19.8736C16.3432 19.1234 20 14.9863 20 9.99512Z" fill="#1D2130"/>
                                </svg>
                            </a>
                        </li>
                        <li class="contact-blogs_links__link">
                            <a href="">
                                <svg class="card-social_link__twitter" width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.2918 17.1202C13.8371 17.1202 17.9652 10.8675 17.9652 5.44677C17.9652 5.27099 17.9613 5.0913 17.9535 4.91552C18.7566 4.33477 19.4496 3.61543 20 2.7913C19.2521 3.12405 18.458 3.34137 17.6449 3.43583C18.5011 2.92264 19.1421 2.11645 19.4492 1.16669C18.6438 1.64402 17.763 1.98073 16.8445 2.1624C16.2257 1.50485 15.4075 1.06948 14.5164 0.923596C13.6253 0.777708 12.711 0.929429 11.9148 1.3553C11.1186 1.78117 10.4848 2.45747 10.1115 3.27965C9.73825 4.10182 9.64619 5.02407 9.84961 5.9038C8.21874 5.82196 6.62328 5.39831 5.16665 4.6603C3.71002 3.9223 2.42474 2.88642 1.39414 1.61982C0.870333 2.52292 0.710047 3.59159 0.945859 4.60863C1.18167 5.62567 1.79589 6.51476 2.66367 7.09521C2.01219 7.07452 1.37498 6.89912 0.804688 6.58349V6.63427C0.804104 7.58201 1.13175 8.50071 1.73192 9.23419C2.3321 9.96768 3.16777 10.4707 4.09687 10.6577C3.49338 10.8228 2.85999 10.8469 2.2457 10.728C2.50788 11.5431 3.01798 12.256 3.70481 12.7672C4.39164 13.2784 5.22093 13.5624 6.07695 13.5796C4.62369 14.7211 2.82848 15.3403 0.980469 15.3374C0.652739 15.3369 0.325333 15.3168 0 15.2772C1.87738 16.4817 4.06128 17.1214 6.2918 17.1202Z" fill="#1D2130"/>
                                </svg>
                            </a>
                        </li>
                        <li class="contact-blogs_links__link">
                            <a href="">
                                <svg class="card-social_link__linkedIn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5195 -0.00488281H1.47656C0.660156 -0.00488281 0 0.639648 0 1.43652V18.5498C0 19.3467 0.660156 19.9951 1.47656 19.9951H18.5195C19.3359 19.9951 20 19.3467 20 18.5537V1.43652C20 0.639648 19.3359 -0.00488281 18.5195 -0.00488281ZM5.93359 17.0381H2.96484V7.49121H5.93359V17.0381ZM4.44922 6.19043C3.49609 6.19043 2.72656 5.4209 2.72656 4.47168C2.72656 3.52246 3.49609 2.75293 4.44922 2.75293C5.39844 2.75293 6.16797 3.52246 6.16797 4.47168C6.16797 5.41699 5.39844 6.19043 4.44922 6.19043ZM17.043 17.0381H14.0781V12.3975C14.0781 11.292 14.0586 9.86621 12.5352 9.86621C10.9922 9.86621 10.7578 11.0732 10.7578 12.3193V17.0381H7.79688V7.49121H10.6406V8.7959H10.6797C11.0742 8.0459 12.043 7.25293 13.4844 7.25293C16.4883 7.25293 17.043 9.22949 17.043 11.7998V17.0381Z" fill="#1D2130"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';

.contact{
    background-color:$off-white;
    margin-bottom: 96px;
    &-container{
        display:flex;
        gap: 96px;
    }
    &-content{
        max-width: 480px;
        &__heading{
            @include text-line();
            margin-bottom: 32px;
        }
        &__title{
            font-size: clamp(35px,4vw,$heading2);
            margin-bottom: 34px;
            font-weight: 700;
        }
        &__text{
            opacity: .4;
            margin-bottom: 32px;
        }
    }
    &-container{
        display:flex
    }
    &-blogs_links{
        margin: 32px 0 96px;
        display:flex;
        gap: 20px;
    }
}
.pl-96{
    padding-left: 96px
}



@media(max-width:850px){

    .contact{
    margin-bottom: 45px;
    &-container{
        gap: 10px;
    }
    &-content{
        &__heading{
            margin-bottom: 16px;
        }
        &__text{
            opacity: .4;
            margin-bottom: 32px;
        }
    }
    &-blogs_links{
        margin-block: 32px 45px;
    }
}





.pl-96{
    padding-left: 0;
}


}
</style>