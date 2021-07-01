<template>
  <div>
    <div id="writing-area" class="shadow q-ma-lg">
      <!-- Separate to (1) into a component, along with all functions and props -->
      <div class="input title-input" @keydown.enter.prevent="newParagraph(-1)">
        <p ref="title" class="element input-empty" placeholder="Din titel..." @input="titleChange()" contenteditable="true">  
          {{ localTitle }}
        </p>
      </div>
      <div 
        class="content-items"
        v-for="(item, i) in content"
        :key="i"
      >
        <component 
          :is="item.type" 
          v-model="content[i].string"
          :newCheck="content[i].new"
          :index="i"
          :ref="'item-' + i"
          @newParagraph="newParagraph($event)"
          @deleteParagraph="deleteParagraph($event)"
          @updateDone="updateDone($event)"
        ></component>
      </div>
      <!-- (1) -->

      <div class="q-mt-xl"></div>
      <q-separator />

      <Sources 
        @setSourceLabel="setSourceLabel($event)"
        @setAuthors="setAuthors($event)"
        @setType="setType($event)" 
        @setTitle="setTitle($event)"
        @setSource="setSource($event)"
        @setLink="setLink($event)"
        @addNewSource="addNewSource()"
        @deleteSource="deleteSource($event)"
        @setDate="setDate($event)"
        :sources="sources" 
      />
      <!--         @setSourceLabel="setSourceLabel($event)"
        @setAuthors="setAuthors($event)"
        @setType="setType($event)" 
        @setTitle="setTitle($event)"
        @setSource="setSource($event)"
        @addNewSource="addNewSource()"
        @deleteSource="deleteSource($event)"
        @setDate="setDate($event)" -->
    </div>
  </div>
</template>

<script>
import Toolbar from 'components/tools/editor/editor_components/EditorToolbar.vue'
import Editor from 'components/tools/editor/editor_components/EditorWritingArea.vue'
import Sources from 'components/tools/editor/sources_components/Source.vue'
// TODO Add these to WritingArea component.
import Paragraph from 'components/tools/editor/editor_components/editor_elements/Paragraph.vue'
import ImageView from 'components/tools/editor/editor_components/editor_elements/Image.vue'

export default {
  props: ['title'],
  components: {
    Toolbar,
    Editor,
    Sources,
    Paragraph,
    ImageView
  },
  mounted() {
    this.localTitle = this.title
  },
  data() {
    return {
      localTitle: '',
      content: [
        {
          string: '',
          type: 'Paragraph',
        },
        {
          string: '',
          type: 'ImageView'
        },
      ],
      sources: []
    }
  },
  methods: {
    // // Writing Area
    titleChange() {
      this.$emit('titleChange', this.$refs.title.innerText)
    },
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
      setTimeout(() => {
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
      }, 1)
    },
    // Sources
    setSourceLabel(label) {
      this.sources[label.index].label = label.label
    },
    setType(type) {
      this.sources[type.index].type = type.type
    },
    setAuthors(authors) {
      this.sources[authors.index].authors = authors.authors
    },
    setTitle(title) {
      this.sources[title.index].title = title.title
    },
    setSource(source) {
      this.sources[source.index].source = source.source
    },
    setDate(date) {
      this.sources[date.index].date = date.date
    },
    setLink(link) {
      this.sources[link.index].link = link.link
    },
    addNewSource() {
      // If created outside of this function the contents will be mutated
      const sourceTemplate = {
        label: '',
        type: '',
        authors: [],
        title: '',
        source: '',
        link: '',
        date: '',
        page: '',
        ISBN: '',
      }
      this.sources.push(sourceTemplate)
    },
    deleteSource(index) {
      this.sources.splice(index, 1)
    }
  }
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
