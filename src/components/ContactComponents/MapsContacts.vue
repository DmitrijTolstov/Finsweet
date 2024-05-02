<script setup>
</script>

<template>
<section class="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4335.212655327863!2d-86.06579270256057!3d39.79671124967381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1712521510389!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

</template>

<style scoped lang='scss'>
.maps{
    margin-top: 96px;
    iframe{
        border: 0;
        width: 100%;
        height: 40vh;
    }
}


@media(max-width:850px){

    .maps{
        margin-top: 45px;
    }
}


</style>