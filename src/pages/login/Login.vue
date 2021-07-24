<template>
  <div>
    <button @click="googleSignIn">
      Sign In with Google
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
import { useStore } from 'vuex'

export default {
  name: "SignUp",
  methods: {
    googleSignIn: function() {
      // We'll create functionality here
    }
  },
};
</script>
