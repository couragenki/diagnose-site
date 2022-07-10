<template>
    <div>
        <PageTemplate>
            <h2>ステップ１自分の中の欲望を知る</h2>
            <nuxt-link to="/want-to-do/step2">
                <div>
                    step2へ
                </div>
            </nuxt-link>
        </PageTemplate>
    </div>
</template>
<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Want-To-Do',
    components: {
        PageTemplate,
    },
}
</script>
