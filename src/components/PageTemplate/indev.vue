<template>
    <div class="PageTemplate">
        <Header />
        <Content>
            <slot />
        </Content>
    </div>
</template>
<script>
import Header from '../Header/indev.vue'
import Content from '../Content/indev.vue'
export default {
    title: 'PageTemplate',
    components: {
        Header,
        Content
    }
}

</script>

<style lang="scss" scoped>
.PageTemplate {
}
</style>