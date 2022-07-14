<template>
    <div>
        <PageTemplate>
            <nuxt-link to="/want-to-do/">
                <div>
                    やりたいこと掘り出しサイト
                </div>
            </nuxt-link>

        </PageTemplate>
    </div>
</template>

<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Index',
    components: {
        PageTemplate,
    }
}
</script>