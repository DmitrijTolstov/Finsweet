<script setup>
import News from '@/components/News.vue';
</script>

<template>
    <div class="news">
        <News 
                :title="'Read our Recent News'"
                :text="'Edit this text to make it your own. To edit, simply click directly on the text to start We are served'"
                :textShow="true"
                >
        </News>
</div>
</template>

<style scoped lang='scss'>
.news{
    text-align:center;
}
</style>