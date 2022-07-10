<template>
    <div>
        <PageTemplate>
            <div>
                <p>このページの使い方</p>
                <ol>
                    <li>
                        自分の中の欲望を知る
                    </li>
                    <li>
                        憧れている人、嫉妬している人を3名あげる
                    </li>
                    <li>
                        努力によって達成・実現できることを選ぶ
                    </li>
                    <li>
                        目標達成の必要条件を書き出す
                    </li>
                    <li>
                        徹底的にリサーチする
                    </li>
                    <li>
                        目標達成を数字で管理する
                    </li>
                </ol>
            </div>
            <nuxt-link to="/want-to-do/step1">
                <div>
                    スタートする
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
