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

<p>
  {#if user}
    <button on:click={logout}>Log out</button>
    <div>
      <button on:click={createSession}>Create Session</button>
    </div>
  {:else}
    <button on:click={login}>Log in</button>
  {/if}
</p>
<div>
  <div class="text-3xl">Previous Stories</div>
  <ol>
    <li>story 1</li>
    <li>story 2</li>
  </ol>

</div>
