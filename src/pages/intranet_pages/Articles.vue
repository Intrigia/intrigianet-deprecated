<template>
	<q-page class="article-view">

		<div class="article-view-header">
			<Tabs @changeTab="setTab($event)" :tab="tab" />
			<q-separator />
		</div>

		<TabPages :tab="tab" />
		<div class="space"></div>
	</q-page>
</template>

<script>
import Tabs from 'components/articles/view/ArticleTabs.vue'
import TabPages from 'components/articles/view/ArticleViews.vue'
import Add from 'components/articles/view/ArticleViewAddButton.vue'

export default {
	components: {
		Tabs,
		TabPages,
		Add
	},
	name: 'Articles',
	data () {
    return {
      tab: 'all_articles'
    }
  },
	methods: {
		setTab(val) {
			console.log(val)
			this.tab = val
		}
	}
}
</script>

<style scoped>
	.article-view-header {
		position: sticky;
    top: 50px;
		z-index: 100;
	}

	.space {
		height: 200vh;
	}
</style>