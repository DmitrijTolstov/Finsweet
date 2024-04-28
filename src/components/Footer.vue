<script setup>
import Buttons from './Buttons.vue';
import logo from './logo.vue';
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-content_logo">
                    <logo></logo>
                </div>
                <div class="footer-content_links">
                    <ul class="footer-content_links__team footer-content_links__connection">
                        <li><p>Our team</p></li>
                        <li><router-link to="/about" >About us</router-link></li>
                        <li><router-link to="/about" >Team</router-link> </li>
                        <li><router-link to="/whatWeDo" >what We Do</router-link> </li>
                        <li><router-link to="/contact" >Contacts</router-link> </li>
                    </ul>
                    <ul class="footer-content_links__more footer-content_links__connection">
                        <li><p>More</p></li>
                        <li><router-link to="/project" >Projects</router-link> </li>
                        <li><router-link to="/events" >Events</router-link> </li>
                        <li><router-link to="/donate" >Donate</router-link> </li>
                        <li><router-link to="/blogs" >Blog</router-link> </li>
                    </ul>
                    <ul class="footer-content_links__connect footer-content_links__connection">
                        <li><p href="">Connect</p>  </li>
                        <li><a href="">Facebook</a> </li>
                        <li><a href="">Instagram</a> </li>
                        <li><a href="">Twitter</a> </li>
                        <li><a href="">Linkdin</a>  </li>
                    </ul>
                </div>
                <div class="footer-content_subscribe">
                    <h2 class="footer-content_subscribe__title">
                        Subscribe to get latest updates
                    </h2>
                    <div class="footer-content_email">
                        <input type="email" placeholder="Your email">
                        <Buttons class="footer-content_email__btn" :title="'Subscribe'" :color="'black'" :bgColor="'white'"></Buttons>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang='scss'>
@import '@/assets/vars.scss';

.footer{
    background-color: $black;
    color: $white;
    padding: 96px 0;
    &-content{
        display: flex;
        justify-content: space-between;
        &_links{
            display: flex;
            gap: 88px;
            &__connection{
                display: flex;
                flex-direction: column;
                gap: 24px;
                li{
                    &:not(:first-child){
                    opacity: .5;
                }
                }
            }
        }
        &_subscribe{
            &__title{
                font-size: clamp(25px,4vw,$heading2);
                max-width: 440px;
                margin-bottom: 32px;
            }
        }
        &_email{
            input{
                max-width: 69%;
                border: 1px solid rgba($off-white,.3);
                border-radius: 4px;
                padding: 11px 7px;
            }
            &__btn{
                margin-left: -2px;
            }
        }
    }
}



@media(max-width:850px){

    .footer{
    padding-block: 45px;
    &-content{
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        &_logo{
            display: none;
        }
        &_links{
            gap: 30px;
            }
        }
    }
}



</style>