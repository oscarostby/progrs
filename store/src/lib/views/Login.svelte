<script>
    import { auth } from "$lib/firebase";
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

    let emailElement;
    let passwordElement;
    
    async function crlogUser() {
        const email = emailElement.value;
        const password = emailElement.value;

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                // Login pls
                try {
                    await signInWithEmailAndPassword(auth, email, password);
                } catch (error) {
                    alert(error.message);
                }
            } else {
                alert(error.message);
            }
        }
    }
</script>

<div class="form-container">
    <form on:submit|preventDefault={crlogUser}>
        <label for="email">Email</label>
        <input id="email" type="text" bind:this={emailElement} />
        <label for="password">Password</label>
        <input id="password" type="password" bind:this={passwordElement} />
        <button type="submit">Submit</button>
    </form>
</div>

<style>
    .form-container {
        display: grid;
        place-items: center;
        height: 100vh;
        width: 100vw;
    }
    form {
        display: flex;
        padding: 1rem;
        background: #fff;
        flex-direction: column;
        gap: .1rem;

    }

</style>
