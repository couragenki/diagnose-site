<template>
    <div class="content">
        <slot />
    </div>
</template>
<script>
export default {
    title: 'Content'
}
</script>

<style lang="scss" scoped>
.content {
    max-width: 1280px;
    margin: 0 auto;
}
</style>