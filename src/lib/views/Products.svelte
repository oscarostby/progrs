<script>
    import { db } from "$lib/firebase";
    import { collectionStore } from "sveltefire";

    const products = collectionStore(db, "products");
</script>

<div class="background">
    <div class="container">
        <h1 class="page-title">Tanks</h1>
        <div class="products">
            {#each $products as product}
                <div class="product">
                    <div class="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div class="product-details">
                        <h2 class="product-title">{product.title}</h2>
                        <p class="product-description">{product.description}</p>
                        <div class="product-price-container">
                            <span class="product-price">${product.price}</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <footer class="footer">
            <p class="footer-text">Orker ikke mere firebase!.</p>
        </footer>
    </div>
</div>

<style>
    .background {
        background-color: #111;
        padding: 2rem;
        min-height: 100vh;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .page-title {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        text-align: center;
        margin-bottom: 2rem;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
    }

    .product {
        background-color: #f8f8f8;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .product-image {
        height: 50%;
        overflow: hidden;
    }

    .product-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .product-details {
        padding: 1.5rem;
    }

    .product-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.5rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .product-description {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 1.5rem;
        text-align: center;
        line-height: 1.4;
    }

    .product-price-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    }

    .product-price {
        font-size: 1.3rem;
        font-weight: bold;
        color: #007bff;
        letter-spacing: 1px;
    }

    .product-button {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .product-button:hover {
        background-color: #0056b3;
    }

    .footer {
        margin-top: 2rem;
        text-align: center;
    }

    .footer-text {
        color: #fff;
        font-size: 0.9rem;
    }
</style>
