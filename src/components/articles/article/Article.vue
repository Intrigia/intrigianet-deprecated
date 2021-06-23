<template>
	<q-card class="article-card">
		<!-- This is the header of the card -->
		<ArticleHeader :status="status" />

		<!-- This is the body of the card -->
		<ArticleBody :title="title" :desc="desc" />

		<q-separator inset />

		<!-- This it the footer of the card -->
		<ArticleFooter :deadline="deadline" />

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
			type: Number,
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

		deadline: {
			type: String,
			default: 'Inte satt'
		},

		//Tab name
		tab: {
			type: String,
			required: true
		}
	},
	computed: {
		tabName() {
			return this.tab
		}
	}
	
}
</script>

<style scoped>
	.article-card {
		width: 370px;
	}

	.body {
		min-height: 110px;
	}
</style>