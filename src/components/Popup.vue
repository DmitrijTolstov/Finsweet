<script setup>
import Buttons from '@/components/Buttons.vue';
import { reactive } from 'vue';


const formInputs = reactive(
    {
        firstName:'',
        lastName:'',
        email:'',
        message:''
    }
)

const bodyStyle = (() =>{

    const oldWidth = document.body.clientWidth

    document.body.style.overflow = 'hidden'

    const mewWidth = document.body.clientWidth

    if(oldWidth < mewWidth ){
        document.body.style.paddingRight = '17px'
    }


})


const props = defineProps({
    togglePopup: Function
})


</script>

<template>
    <div class="popup"   >

    <div class="join">
        <div @click="togglePopup()"  class="join-close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M1 1L13 13" stroke="white" stroke-width="1.5"/>
            </svg>
        </div>
        <h2 class="join__title">
            Join as a volunteer
        </h2>
        <p class="join__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros elementum tristique. 
        </p>
        
        <form action="" class="form" method="post">

            <div class="form_names">
                <div class="form_inputs">
                    <label for="firstname">First Name</label>
                    <input v-model="formInputs.firstname" required name="firstname" type="text">
                </div>
                <div class="form_inputs">
                    <label for="lastName">Last Name</label>
                    <input v-model="formInputs.lastName" required name="lastName" type="text">
                </div>
            </div>
            <div class="form_inputs">
                <label for="email">Email</label>
                <input v-model="formInputs.email" required name="email" type="email">
            </div>
            <div class="form_inputs">
                <label @click="bodyStyle()" for="message">Message</label>
                <textarea v-model="formInputs.message"  required name="message" placeholder="Type your Messege"></textarea>
            </div>
            <Buttons  type="submit" :bg-color="'#70C174'" :title="'Send message'" class="form-btn" disabled></Buttons>
        </form>
    </div>
</div>

</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';
.popup{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(0,0,0,.3);

}

.join{
    padding:48px;
    height: 680px;
    width: 640px;
    border-radius:10px;
    z-index:100;
    position:absolute;
    background-color:white;
    
    &__title{
        font-size: $heading2;
        margin-bottom: 16px;
    }
    &__text{
        color:$secondary-text;
    }
    &-close{
        width: 32px;
        height:32px;
        background-color: black;
        border-radius:4px;
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        right:20px;
        top:20px;
        cursor:pointer;
    }
    .form{
        margin-top:32px;

        &_names{
            display:flex;
            gap: 32px;
        }
        &_inputs{
            display:flex;
            flex-direction: column;
            margin-bottom:32px;
            textarea{
                resize:none;
                width:544px;
                height: 156px;
                outline:none;
                border: 1px solid $border;
                margin-top:16px;
                padding:20px;
            }
            input{
                border-bottom: 1px solid $border;
                margin-top:16px;
            }
        }
    }
}
</style>