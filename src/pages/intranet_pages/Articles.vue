<template>
	<q-page class="article-view">
		<q-btn
			style="position: fixed; bottom: 0; right: 0; z-index: 10;"
			class="q-ma-lg"
			round
			color="primary"
			size="xl"
			icon="add"
			v-if="windowWidth <= 940"
      @click="newArticlePrompt = true"
		/>
		<div class="article-view-header shadow">
			<!-- Tabs (1) -->
			<Tabs 
				@changeTab="setTab($event)" 
        @activateModal="activateModal()"
				:tabs="tabs" 
				:selectedTab="tab.name" 
				:windowWidth="windowWidth"
			/>
		</div>

		<!-- Tab Pages (2) -->
		<TabPages 
			class="bg-secondary article-views" 
			:tabs="tabs" 
			:tab="tab.name" 
			:articles="articles" 
		/>

    <!-- This is the prompt when clicking either add button (3)  -->
		<Modal :prompt="newArticlePrompt" @disablePrompt="disablePrompt($event)"/>

	</q-page>
</template>

<script>
import Modal from 'components/articles/NewArticleModal.vue'
import Tabs from 'components/articles/view/ArticleTabs.vue'
import TabPages from 'components/articles/view/ArticleViews.vue'

export default {
	name: 'Articles',
	components: {
		Tabs, // ArticleTabs.vue
		TabPages, // ArticleViews.vue
		Modal, // NewArticleModal.vue
	},
	created() {
		/* 
		Adding eventListener for window width for the custom css and v-if statement 
		for tabs (1) and tab pages (2)
		*/
		window.addEventListener('resize', this.resizeHanlder)
		this.resizeHanlder()

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
  destroyed() {
    window.addEventListener('resize', this.resizeHanlder)
  },
	methods: {
    // Turns the newArticlePrompt to true responding to custom event at (1)
    activateModal() {
      this.newArticlePrompt = true
    },  
		// Turns tab name to the $event value from custom event at Tabs (2)
		setTab(val) {
			this.tab.name = val
		},
		// Turns newArticlePrompt to the $event value from custom event at Modal (3)
		disablePrompt(val) {
			this.newArticlePrompt = val
		},
		// Get a random date just to place as a placeholder
		randomDate(start, end) {
    	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
		},
		// A method for setting the data property windowWidth to window.innerWidth
		resizeHanlder() {
			this.windowWidth = window.innerWidth
		},
	},
	data () {
    return {
			newArticlePrompt: false,
			windowWidth: null,
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