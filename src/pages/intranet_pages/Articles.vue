<template>
	<q-page class="article-view">

		<div class="article-view-header">
			<Tabs @changeTab="setTab($event)" :tabs="tabs" :selectedTab="tab.name" />
			<q-separator />
		</div>

		<TabPages :tabs="tabs" :tab="tab.name" />

	</q-page>
</template>

<script>
import Tabs from 'components/articles/view/ArticleTabs.vue'
import TabPages from 'components/articles/view/ArticleViews.vue'

export default {
	components: {
		Tabs, // ArticleTabs.vue
		TabPages, // ArticleViews.vue
	},
	name: 'Articles',
	data () {
    return {
      tab: {
				name: 'all_articles',
				label: 'Alla artiklar'
			},
			tabs: [
				{
					name: 'all_articles',
					label: 'Alla artiklar'
				},
				{
					name: 'unsent_articles',
					label: 'Utkast'
				},
				{
					name: 'reviewed_articles',
					label: 'Inskickade artiklar'
				},
				{
					name: 'published_articles',
					label: 'Publicerade artiklar'
				}
			]
    }
  },
	methods: {
		setTab(val) {
			console.log(val)
			this.tab.name = val
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