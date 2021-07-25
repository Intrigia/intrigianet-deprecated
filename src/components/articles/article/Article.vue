<template>
	<q-card class="article-card">
		<ArticleHeader :status="status" />

		<ArticleBody :title="title" :desc="desc" />

		<q-separator inset />

		<ArticleFooter :ID="ID" :deadline="deadline" :title="title" />

	</q-card>
</template>

<script>
import ArticleHeader from 'components/articles/article/article_components/ArticleHeader.vue'
import ArticleBody from 'components/articles/article/article_components/ArticleBody.vue'
import ArticleFooter from 'components/articles/article/article_components/ArticleFooter.vue'

export default {
	components: {
		ArticleHeader,
		ArticleBody,
		ArticleFooter
	},
	props: {
		//Props from the article data looped through the v-for
		ID: {
			type: String,
			required: true
		},

		title: {
			type: String,
			required: true
		},

		desc: {
			type: String,
			default: ''
		},

		status: {
			type: String,
			required: true
		},

		deadline: [Date, String]
	},
	
}
</script>

<style scoped>
	.body {
		height: 150px;
	}
	.article-card {
		padding-top: 0.1px;
	}
</style>