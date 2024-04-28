<script setup>
import Buttons from '@/components/Buttons.vue'
import { ref } from 'vue';

import { Form, Field, ErrorMessage  } from 'vee-validate';


const formInputs = ref(
    {
        firstName:'',
        lastName:'',
        email:'',
        message:''
    }
)



const validateName = (value) =>{

        if(value.length === 0){

            return 'This field is required';
        }
      if(value.length < 4){

        return 'This field must be a valid name';

      }else{
        
        return true
      }
      

}

const  validateEmail = (value) =>{
      if (!value) {

        return 'This field is required';
      }

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

      if (!regex.test(value)) {

        return 'This field must be a valid email';
      }

      return true;
    }


const props = defineProps({
    togglePopup: Function
})

const send = (() =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            firstName: formInputs.value.firstName,
            lastName: formInputs.value.lastName,
            email: formInputs.value.email,
            message: formInputs.value.message,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

})




</script>

<template>
    <div class="popup" >
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
        
        <Form class="form">

            <div class="form_names">
                <div class="form_fields">
                    <label for="firstName">First Name</label>
                    <Field :rules="validateName" v-model="formInputs.firstName" name="firstName" type="text"/>
                        <ErrorMessage name="firstName" />
                </div>
                <div class="form_fields">
                    <label for="lastName">Last Name</label>
                    <Field  :rules="validateName" v-model="formInputs.lastName" required name="lastName" type="text"/>
                    <ErrorMessage name="lastName" />
                </div>
            </div>
            <div class="form_fields  form_fields__email">
                <label for="email">Email</label>
                <Field :rules="validateEmail" v-model="formInputs.email" required name="email" type="email"/>
                <ErrorMessage name="email" />
            </div>
            <div class="form_fields">
                <label  for="message">Message</label>
                <textarea required name="message" v-model="formInputs.message" placeholder="Type your Messege"></textarea>
            </div>
            <Buttons @click.prevent="send()"  type="submit" :bg-color="'#70C174'" :title="'Send message'" class="form-btn"></Buttons>
        </Form>
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
    height: 740px;
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
            height: 115px;
        }
        &_fields{
            display:flex;
            flex-direction: column;
            margin-bottom:32px;
            width: 230px;
            &__email{
                height: 83px;
            }
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
                margin-top:16px;
                margin-bottom: 8px;
                &:focus{
                    box-shadow: 0px 0px 9px 2px rgba(17, 126, 210, 0.4)
                }
            }
        }
    }
}


[role="alert"]{
    color: red;
}
</style>