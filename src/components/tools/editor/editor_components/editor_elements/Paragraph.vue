<template>
  <div class="input-container">
    <p
      @focus="select()"
      class="input"
      ref="editable"
      :id="index"
      contenteditable
      @input="$emit('input', $refs.editable.innerText)"
      @keydown.enter.prevent="newParagraph()"
      @keydown.delete="deleteParagraph()"
      placeholder="Skriv här..."
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    index: {
      type: Number,
      required: true
    },
    newCheck: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // Sets the innerText of the paragraph to the value passed down from v-model on init
    this.$refs.editable.innerText = this.value
  },
  methods: {
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
    // Custom event call for new paragraph / component on enter keypress
    newParagraph() {
      this.$emit('newParagraph', this.index)
    },
    // Custom event call for deleting the paragraph / component when the value (the text) is zero on keydown
    deleteParagraph() {
      if(this.value.length == 0) {
        this.$emit('deleteParagraph', this.index)
      }
    }
  },
  watch: {
    value: function() {
      var el = this.$refs.editable
      var range = document.createRange()
      var sel = window.getSelection();
      if(this.newCheck == true) {
        // Gets the value that is changed with the v-model
        var someValue = this.value
        // Sets the innerText of the paragraph to the value from v-model
        this.$refs.editable.innerText = this.value
        // Offsetting the caret position that is not at 1 because of the above
        range.selectNodeContents(el);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      // Emits a call for the custom event that turns newCheck to false, i.e. that it is no longer new because it has been edited
      this.$emit('updateDone', this.index)
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
