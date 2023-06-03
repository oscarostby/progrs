<script>
    import { auth } from "$lib/firebase";
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

    let emailElement;
    let passwordElement;

    async function crlogUser() {
        const email = emailElement.value;
        const password = passwordElement.value;

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                // User already exists, proceed to login
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

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
    }

    .login-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .login-form {
        max-width: 400px;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .login-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .login-title {
        font-size: 2rem;
        font-weight: bold;
        color: #333333;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        font-size: 1rem;
        font-weight: bold;
        color: #666666;
        margin-bottom: 0.5rem;
    }

    .form-group input[type="text"],
    .form-group input[type="password"] {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        background-color: #f8f8f8;
        color: #333333;
        transition: background-color 0.3s ease;
    }

    .form-group input[type="text"]:focus,
    .form-group input[type="password"]:focus {
        background-color: #e6e6e6;
    }

    .login-submit-button {
        display: inline-block;
        padding: 1rem;
        font-size: 1rem;
        font-weight: bold;
        color: #ffffff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .login-submit-button:hover {
        background-color: #0056b3;
    }

    .login-footer {
        text-align: center;
        margin-top: 1.5rem;
        color: #666666;
    }

    .login-footer a {
        color: #007bff;
        text-decoration: none;
    }
</style>

<div class="login-container">
    <form class="login-form" on:submit|preventDefault={crlogUser}>
        <div class="login-header">
            <h2 class="login-title">Login</h2>
        </div>

        <div class="form-group">
            <label for="username">Email</label>
            <input type="text" id="username" name="username" required bind:this={emailElement}>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required bind:this={passwordElement}>
        </div>

        <button type="submit" class="login-submit-button">Login</button>

        <div class="login-footer">
            Don't have an account? <a href="#">Sign up</a>
        </div>
    </form>
</div>
