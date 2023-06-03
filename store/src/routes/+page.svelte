<script>
    import { auth } from '$lib/firebase';
    import { userStore } from 'sveltefire';
    import Login from "$lib/views/Login.svelte";
    import Products from "$lib/views/Products.svelte";
    import "$lib/app.css";

    const user = userStore(auth);

</script>

{#if $user === null}
    <Login />
{:else}
    <Products />
{/if}
