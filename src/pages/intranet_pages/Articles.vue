<template>
	<q-page class="article-view">

		<div class="article-view-header shadow">
			<Tabs @changeTab="setTab($event)" :tabs="tabs" :selectedTab="tab.name" />
		</div>

		<TabPages class="bg-secondary article-views" :tabs="tabs" :tab="tab.name" :articles="articles" />

	</q-page>
</template>

<script>
import Tabs from 'components/articles/view/ArticleTabs.vue'
import TabPages from 'components/articles/view/ArticleViews.vue'

export default {
	name: 'Articles',
	components: {
		Tabs, // ArticleTabs.vue
		TabPages, // ArticleViews.vue
	},
	created() {
		// Start date for the placeholder date function
    const start = new Date(2020, 1, 1, 1, 1, 1)
		// End date, latest possible deadline
		const end = new Date(2022, 12, 30, 23, 40, 40)

		const allArticles = Object.keys(this.articles)
    allArticles.forEach(el => {
      for (var y = 1; y < this.articles[el].length; y++) {
        this.articles[el][y].deadline = this.randomDate(start, end)
      }
    });
  },
	methods: {
		setTab(val) {
			this.tab.name = val
		},
		randomDate(start, end) {
    	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
		}
	},
	data () {
    return {
			// Months, days,  and their abbreviations
			// Selected tab
      tab: {
				name: 'all_articles',
				label: 'Alla artiklar'
			},
			// Selection of tabs
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
			],
			// Articles has to be an array for this method of looping with a v-for inside a v-for
      /* 
      The names of articles properties (who in themselves are arrays with objects) 
      also have to correspond with the tab names and vice versa
      */
			articles: {
        all_articles: [
          {
            ID: 1,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Granskas',
          },
          {
            ID: 2,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Granskas',
          },
          {
            ID: 3,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Utkast',
          },
          {
            ID: 4,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Publicerad',
          }
        ],
        unsent_articles: [
          {
            ID: 1,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Utkast',
          },
          {
            ID: 2,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Förfrågan skickad',
          },
          {
            ID: 3,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Beviljad',
          },
          {
            ID: 4,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Avslagen',
          }
        ],
        reviewed_articles: [
          {
            ID: 1,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Granskas',
          },
          {
            ID: 2,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Granskad',
          },
          {
            ID: 3,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Granskas',
          },
          {
            ID: 4,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Granskas',
          }
        ],
        published_articles: [
          {
            ID: 1,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Redo för publicering',
          },
          {
            ID: 2,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Publicerad',
          },
          {
            ID: 3,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Publicerad',
          },
          {
            ID: 4,
            title: 'Some long article title',
            desc: 'Some description',
            deadline: '',
            status: 'Publicerad',
          }
        ]
      }
    }
  },
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

	.article-views {
		min-height: 87.5vh;
	}
</style>