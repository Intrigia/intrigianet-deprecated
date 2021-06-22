<template>
	<q-card class="article-card">
		<!-- This is the header of the card -->
		<q-item>
			<q-item-section>
				<div>
					<q-chip outline color="primary" icon="inventory_2" >
						{{ tabName }}
					</q-chip>
				</div>
			</q-item-section>
		</q-item>

		<q-separator inset />

		<!-- This is the body of the card -->
		<q-card-section class="body q-pt-xs">
			<div class="text-h5 q-mt-sm q-mb-xs"> {{ title }} </div>
			<div class="text-caption text-grey-8"> {{ desc }} </div>
		</q-card-section>

		<q-separator inset />

		<!-- This it the footer of the card -->
		<q-card-actions>
			<q-btn flat round icon="event" />
			<q-item-label class="q-mr-md"> {{ deadline }} </q-item-label>

			<q-separator vertical inset />
			<q-space></q-space>


			<q-btn 
				flat
				on-right
				color="primary" 
				label="Redigera"
			/>
		</q-card-actions>
	</q-card>
</template>

<script>
export default {
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