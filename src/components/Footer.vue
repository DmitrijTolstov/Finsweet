<script setup>
import Buttons from './Buttons.vue';
import logo from './logo.vue';
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <logo></logo>
                <div class="footer-content_links">
                    <ul class="footer-content_links__team footer-content_links__connection">
                        <li><a href=""> Our team</a></li>
                        <li><a href=""> About us</a></li>
                        <li><a href="">Team</a> </li>
                        <li><a href="">What we do</a> </li>
                        <li><a href="">Contact</a> </li>
                    </ul>
                    <ul class="footer-content_links__more footer-content_links__connection">
                        <li><a href="">More</a> </li>
                        <li><a href="">Projects</a> </li>
                        <li><a href="">Events</a> </li>
                        <li><a href="">Donate</a> </li>
                        <li><a href="">Blog</a> </li>
                    </ul>
                    <ul class="footer-content_links__connect footer-content_links__connection">
                        <li><a href="">Connect</a>  </li>
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
        align-items: start;
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
                font-size: $heading2;
                max-width: 440px;
                margin-bottom: 32px;
            }
        }
        &_email{
            input{
                width: 69%;
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
</style>