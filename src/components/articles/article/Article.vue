<template>
	<q-card class="article-card" flat bordered>
		<q-item>
			<q-item-section>
				<q-item-label>Status:</q-item-label>
				<q-item-label caption>
					{{ status }}
				</q-item-label>
			</q-item-section>
		</q-item>

		<q-separator />
		<q-card-section class="body q-pt-xs">
			<div class="text-h5 q-mt-sm q-mb-xs"> {{ title }} </div>
			<div class="text-caption text-grey-8"> {{ desc }} </div>
		</q-card-section>

		<q-separator />

		<q-card-actions>
			<q-btn flat round icon="event" />
			<q-btn flat>
				7:30PM
			</q-btn>
			<q-btn flat
				color="primary" 
				label="Redigera"
			/>
		</q-card-actions>
	</q-card>
</template>

<script>
export default {
	props: {
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
		}
	},
	
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