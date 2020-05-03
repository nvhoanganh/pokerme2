<script>
  import firebase from "firebase/app";
  import "firebase/auth";

  export let name;

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

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main class="container shadow-lg">
  <h1>Hello {name}!</h1>
  <p>
    {#if user}
      <button on:click={logout}>Log out</button>
    {:else}
      <button on:click={login}>Log in</button>
    {/if}
  </p>
  <div>
    <ul>
      <li>story</li>
    </ul>

  </div>

</main>
