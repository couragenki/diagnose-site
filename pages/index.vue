<template>
    <div>
        <PageTemplate>
            <nuxt-link to="/want-to-do/">
                <div>
                    やりたいこと掘り出しサイト
                </div>
            </nuxt-link>

            {{ foo }}

            <div>Count:{{ count }}</div>
            <div>
                <button @click="() => inc()">increase</button>
                <button @click="() => dec()">decrease</button>
            </div>
        </PageTemplate>
    </div>
</template>

<script setup>
    const foo = useFoo()
    import { useCounter } from '~/composables/useCounter';
    const { count, inc, dec } = useCounter();
</script>

<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Index',
    components: {
        PageTemplate,
    }
}
</script>