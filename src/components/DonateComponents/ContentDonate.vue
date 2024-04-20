<script setup>
import Accordion from '@/components/Accordion.vue';
</script>

<template>
    <section class="content">
        <div class="container">
            <main class="content mb-192">
                <div class="content-main">
                    <h2 class="content-main__title">
                        How you can contribute to protect Earth
                    </h2>
                    <p class="content-main__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                    <Accordion></Accordion>
            </main>
            <article class="content">
                <h2 class="content__title">
                    How we use your donation
                </h2>
                <p class="content__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.
                </p>
                <p class="content__text">
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                </p>
            </article>
        </div>
    </section>
</template>

<style scoped lang='scss'>

@import '@/assets/vars.scss';

.content{
    display: flex;
    margin-bottom: 96px;
    gap: 96px;
    &-main{
        display: flex;
        flex-direction: column;
        max-width: 592px;
        &__title{
            font-size: $heading2;
            font-weight: 700;
            margin-bottom: 24px;
        }
    }
    &__title{
        font-size: $heading2;
        font-weight: 700;
    }
    &__text{
        width: 50%;
    }
}

.mb-192{
    margin-bottom: 192px;
}
</style>