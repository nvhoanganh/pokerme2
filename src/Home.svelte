<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";
  import { navigateTo } from "svelte-router-spa";

  let user;
  firebase.auth().onAuthStateChanged(function(u) {
    user = u;
    if (user) {
      console.log(user);
    } else {
      console.log("user is not logged in");
    }
  });

  function login() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  function logout() {
    firebase.auth().signOut();
  }

  function createSession() {
    const db = firebase.firestore();
    db.collection("sessions")
      .add({
        ownerName: user.displayName,
        createdDate: new Date()
      })
      .then(function(docRef) {
        navigateTo("/sessions/" + docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
</script>

{#if user}
  <button
    on:click={logout}
    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    Logout
  </button>
  <button
    on:click={createSession}
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Create Session
  </button>
{:else}
  <button
    on:click={login}
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Login
  </button>
{/if}
<div class="text-3xl py-8">Previous Stories</div>
<ol>
  <li>story 1</li>
  <li>story 2</li>
</ol>
