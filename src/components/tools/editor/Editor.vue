<template>
  <div>
    <div id="writing-area" class="shadow q-ma-lg">
      <!-- Separate to (1) into a component, along with all functions and props -->
      <div class="input title-input" @keydown.enter.prevent="newParagraph(-1)">
        <p 
          ref="title"
          @input="titleChange()"
          contenteditable="true" 
          class="element input-empty" 
          placeholder="Din titel..."  
        />
      </div>
      <!-- TODO 
        - Sort the content items array based on ID i.e. 1, 2, 3, 4 
        - Make a mutation that inserts a new item at ID + 1 position 
            i.e. takes all other items and changes their ID's to ID + 1
        - Make a mutation that removes the item at ID,
            then changes all other ID's after it to ID - 1,
            and finally selects the item at ID anew
        - Create a floating toolbar button that expands to the right,
            that allows the user to change item type
        - Create a floating button that has the position of mouseposition Y if selected text,
            that allows the user to add a comment or suggestion
            - Comment
              - Display floating chat bubble to the right
              - Allow user to type in said chat bubble
              - When user clicks a button comment the chat bubble will update
              - When user clicks X button a modal appears assure the user if it wants to delete the comment
                - Modal popup
                - Modal options
                - Modal functions
                  - Yes
                  - Cancel
            - Suggestion
              - Free form suggestion
                - Strike selected text
                - Prompt the user to type before strike with green text
                - When user deletes non-green text the text will be strikes out and cursor jump left one letter
              - Multiple phrasing suggestion
                - Strike selected text
                - Prompt the user to type with hint message "Clicka enter när du är färdig"
                - When user clicks enter
                  - The previous green text will be added as an option in dropdown
                  - The previous green text will be wiped
                  - The user will be prompted to type in the suggestion again
                - Dropdown button right of the green text
                  - Opens or folds the dropdown
                  - When user clicks a suggestion, said suggestion will be visible as the primary
              - Display a user icon when hovering over a suggestion
              - Display a chat bubble over the text when clicking the suggestion
                - Accept suggestion button
                  - The suggestions replaces the striked out text
                - Decline suggestion button
                  - The suggestion will be removed and added as a chat bubble to the right
                  - Message will be sent to the author of said suggestion
                  - The chat bubble will have a chat below it
                  - The user who deletes the suggestion will be prompted to write and explanation
                  - The creator can delete the suggestion by clicking the X button
                  - The creator can reinstate it by clicking the restore button
                    - The creator will be prompted to write an explanation that will be added to the chat bubble to the  
                      right
      -->
      <div 
        class="content-items"
        v-for="(item, key) in article.content"
        :key="key"
      >
        <component 
          :is="item.type" 
          :articleID="ID"
          :ID="key"
          :value="item.string"
        ></component>
        <!-- 
          v-model="content[i].string"
          :newCheck="content[i].new"
          :index="i"
          :ref="'item-' + i"
          @newParagraph="newParagraph($event)"
          @deleteParagraph="deleteParagraph($event)"
          @updateDone="updateDone($event)"
        -->
      </div>
      <!-- (1) -->
<!--       <q-separator inset class="q-mt-lg" />
      <div class="row justify-center q-pt-lg">
        <q-btn 
          icon="add"
          outline
          round
          color="primary"
        />
      </div> -->

      <div class="q-mt-xl"></div>
      <q-separator />

      <Sources 
        @setSourceLabel="setSourceLabel($event)"
        @setAuthors="setAuthors($event)"
        @setType="setType($event)" 
        @setTitle="setTitle($event)"
        @setEdition="setEdition($event)"
        @setPubPlace="setPubPlace($event)"
        @setOrg="setOrg($event)"
        @setLink="setLink($event)"
        @addNewSource="addNewSource()"
        @deleteSource="deleteSource($event)"
        @setDate="setDate($event)"
        @setPage="setPage($event)"
        :sources="sources" 
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Toolbar from 'components/tools/editor/editor_components/EditorToolbar.vue'
import Editor from 'components/tools/editor/editor_components/EditorWritingArea.vue'
import Sources from 'components/tools/editor/sources_components/Source.vue'
// TODO Add these to WritingArea component.
import Paragraph from 'components/tools/editor/editor_components/editor_elements/Paragraph.vue'
import ImageView from 'components/tools/editor/editor_components/editor_elements/Image.vue'

export default {
  watch: {
    'article': () => {
      console.log("Hello World")
    }
  },
  props: ['article', 'ID'],
  components: {
    Toolbar,
    Editor,
    Sources,
    Paragraph,
    ImageView
  },
  data() {
    return {
      localTitle: '',
      sources: []
    }
  },
  mounted() {
    this.$refs.title.innerText = this.article.title
  },
  methods: {
    ...mapActions('articles', ['updateContent']),
    titleChange() {
      this.updateContent({ ID: this.ID, title: this.$refs.title.innerText })
    },
    // // Writing Area
    updateDone(i) {
      this.content[i].new = false
    },
    // Inserts the new paragraph, with new property into the slot below focused component index
    newParagraph(i) {
      this.content.splice(i+1, 0, {
        string: '',
        type: 'Paragraph',
        new: true
      })
      // $nextTick is needed since the new ref hasn't been created and, thus cannot be used until the nex tick.
      this.$nextTick(() => {
        // Sets focus on the newly created paragraph.
        this.$refs['item-' + (i+1)][0].$refs.editable.focus()
      })
    },
    deleteParagraph(i) {
      /* 
      This removes the item from the content array, and thus also the element from the DOM.
      However, the reference is still there, albeit empty.
      */ 
      this.content.splice(i, 1)
      /* 
      In order to do any updates regarding the DOM we have to let it wait at least 1 ms.
      TODO check if there are any better solutions as this might be affected on slower browser speeds.
      */
/*       setTimeout(() => {
        console.log(this.$refs)
        // Gets the refs and reverses the array that Object.keys creates. This makes the array bottom to top.
        var refsArr = Object.keys(this.$refs).reverse()
        console.log(refsArr)
        // Removes the last item in the content array, i.e. the paragraph with the delete key event.
        refsArr.shift()
        console.log(refsArr)
        // Loops through the rest of the items to check which one can be selected after.
        for (const key of refsArr) {
          // If the item checked is an image or any other non-writable element, it will return undefined as there are no refs thus not [0] item.
          console.log(this.$refs[key][0])
          if(this.$refs[key].length > 0 && this.$refs[key][0].$refs['editable'] != undefined) {
            // Focuses on the key / selected element that passed the check from above.
            this.$refs[key][0].$refs.editable.focus()
            break;
          }
        }
      }, 1) */
    },
    // Sources
    setSourceLabel(label) {
      this.sources[label.index].label = label.label
    },
    setType(type) {
      this.sources[type.index].type = type.type
      this.sources[type.index].label = ''
      if (this.sources[type.index].type == 'TypeVideo') {
        this.sources[type.index].authors = []
      }
      this.sources[type.index].page = ''
      this.sources[type.index].edition = ''
      this.sources[type.index].publication_place = ''
      this.sources[type.index].date = ''
      this.sources[type.index].link = ''
    },
    setAuthors(authors) {
      this.sources[authors.index].authors = authors.authors
    },
    setTitle(title) {
      this.sources[title.index].title = title.title
    },
    setEdition(edition) {
      this.sources[edition.index].edition = edition.edition
    },
    setPubPlace(publication_place) {
      this.sources[publication_place.index].publication_place = publication_place.publication_place
    },
    setOrg(org) {
      this.sources[org.index].org = org.org
    },
    setDate(date) {
      this.sources[date.index].date = date.date
    },
    setLink(link) {
      this.sources[link.index].link = link.link
    },
    setPage(page) {
      this.sources[page.index].page = page.page
    },
    addNewSource() {
      // If created outside of this function the contents will be mutated
      const sourceTemplate = {
        label: '',
        type: '',
        authors: [],
        title: '',
        org: '',
        link: '',
        date: '',
        edition: '',
        publication_place: '',
        page: ''
      }
      this.sources.push(sourceTemplate)
    },
    deleteSource(index) {
      this.sources.splice(index, 1)
    }
  },
  watch: {
    article: {
      handler(oldVal, newVal) {
        if (this.$refs.title.innerText != newVal.title) {
          this.$refs.title.innerText = newVal.title
        }
      },
      deep: true
    }
  },
}
</script>

<style scoped>
  /*** Editor ***/
  #writing-area {
    width: 916px;
    min-height: 944px;
    background: white;
    padding: 50px 100px;
  }
  /** Title input **/
  .title-input {
    font-size: 2.125rem !important;
    margin-top: 10px;
    border: none !important;
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    border: none;
    color: #181e2b !important;
    resize: none;
    min-height: 2.125rem;
  }
  /** Input **/
  .input .element[contenteditable]:focus {
    outline: 0px solid transparent;
  }
  .input-empty[placeholder]:empty:before {
    content: attr(placeholder);
    color: grey;
  }
</style>
