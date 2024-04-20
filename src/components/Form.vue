<script setup>
import Buttons from '@/components/Buttons.vue';

</script>

<template>
    <form action="" class="form">
        <div class="form-boxName space-between ">
            <div class="boxName d-flex">
                <label for="fName">First Name</label>
                <input type="text" class="boxName_fName">
            </div>
            <div class="boxName d-flex">
                <label for="lName">Last Name</label>
                <input type="text" class="boxName_lName">
            </div>
        </div>
        <div class="form-boxAdditionally space-between ">
            <div class="additionally d-flex">
                <label for="email">Email Id</label>
                <input type="text" class="additionally_email">
            </div>
            <div class="additionally d-flex">
                <label for="subject">Subject</label>
                <input type="text" class="additionally_subject">
            </div>
        </div>
       <div>
        <label for="message">Message</label>
        <textarea name="" id="" placeholder="Type your Message" ></textarea>
       </div>
        <Buttons disabled :bg-color="'#70C174'" :title="'Send message'" class="form-btn"></Buttons>
    </form>

</template>

<style scoped lang='scss'>
.form{
    display:flex;
    flex-direction: column;
    gap:32px;
    max-width: 768px;
    margin: 0 auto;
    input{
        border-bottom:1px solid #E5E5E5;
        min-width:368px
        }
    label{
        margin-bottom:8px;
                opacity:.5
        }
        &-btn{
            width: 25%;
            margin:0 auto;
        }
    textarea{
        border: 1px solid #E5E5E5;
        min-width: 768px;
        min-height: 156px;
        padding:20px;
        outline: none;  
        resize: none;      
    }
}

.d-flex{
    display:flex;
    flex-direction:column;
}
.space-between{
    display:flex;
    justify-content: space-between;
}
</style>