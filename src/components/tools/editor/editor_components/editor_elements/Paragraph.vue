<template>
  <div class="input-container">
    <p
      @focus="select()"
      class="input"
      ref="editable"
      :id="ID"
      contenteditable="true"
      @input="contentChange()"
      @keydown.enter.prevent="newParagraph()"
      @keydown.delete="deleteParagraph()"
      placeholder="Skriv här..."
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    articleID: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: null,
    },
    ID: {
      type: String,
      required: true
    },
  },
  mounted() {
    // Sets the innerText of the paragraph to the value passed down from v-model on init
    this.$refs.editable.innerText = this.value
  },
  methods: {
    ...mapActions('articles', ['updateContent', 'newContentItem']),
    select() {
      // Next tick is needed to wait for DOM changes before the element can be selected
      this.$nextTick(() => {
        var el = this.$refs.editable
        var range = document.createRange()
        var sel = window.getSelection();
        range.selectNodeContents(el);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      })
    },
    contentChange() {
      this.updateContent({ ID: this.articleID, content_ID: this.ID, content: this.$refs.editable.innerText })
    },
    // Custom event call for new paragraph / component on enter keypress
    newParagraph() {
      this.newContentItem({ ID: this.articleID, content_ID: this.ID, type: 'paragraph' })
    },
    // Custom event call for deleting the paragraph / component when the value (the text) is zero on keydown
    deleteParagraph() {
      
    }
  },
  watch: {
    value: function(val) {
      if (this.$refs.editable.innerText != val) {
        this.$refs.editable.innerText = val
      }
    }
  }
}
</script>


<style scoped>
  /** Title input **/
  .title-input {
    font-size: 2.125rem !important;
  }
  /** Input **/
  .input-container {
    border: none !important;
    width: 100%;
    font-size: 1.3125rem;
    margin-top: 10px;
  }
  .input-container [contenteditable]:focus {
    outline: 0px solid transparent;
  }
  .input {
    z-index: 10;
  }
  .input[placeholder]:empty:not(:focus):before { /* Adds the placeholder attribute text */
    content: attr(placeholder);
    color: grey;
    pointer-events: none;
  }
</style>
