<template>
    <div>
        <PageTemplate>
            <h2>ステップ2</h2>
            <nuxt-link to="/want-to-do/">
                <div>
                    ステップ3へ
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
    }
}
</script>
