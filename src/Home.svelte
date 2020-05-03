<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";
  import { navigateTo } from "svelte-router-spa";

  let sessions = [];
  let user;

  firebase.auth().onAuthStateChanged(function(u) {
    user = u;
    if (user) {
      getListofSessions();
    }
  });

  function viewSession(id) {
    navigateTo("/sessions/" + id);
  }

  function getListofSessions() {
    firebase
      .firestore()
      .collection("sessions")
      .where("ownerId", "==", user.uid)
      .get()
      .then(function(querySnapshot) {
        let list = [];
        querySnapshot.forEach(function(doc) {
          list.push({
            id: doc.id,
            ...doc.data()
          });
        });
        sessions = list;
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }

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
        ownerId: user.uid,
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
<div class="text-3xl py-8">Previous Sessions</div>
<ol>
  {#each sessions as item}
    <li>
      {item.createdDate.toDate().toString()}
      <button
        on:click={() => viewSession(item.id)}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded">
        View
      </button>
    </li>
  {/each}
</ol>
