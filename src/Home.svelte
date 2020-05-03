<script>
  import firebase from "firebase/app";
  import "firebase/auth";

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
</script>

<p>
  {#if user}
    <button on:click={logout}>Log out</button>
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
