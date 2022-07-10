<template>
    <div>
        <PageTemplate>
            <h2>ステップ2</h2>
            <nuxt-link to="/want-to-do/">
                <div>
                    ステップ3へ
                </div>
            </nuxt-link>

            {{ want }}
        </PageTemplate>
    </div>
</template>
<script setup>
    const foo = useFoo()
    import { useCounter } from '~/composables/useCounter';
    const { count, inc, dec } = useCounter();
    const {want, updateWant} = wantToDoStep1();
</script>

<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Want-To-Do',
    components: {
        PageTemplate,
    }
}
</script>
