<script>
    import { db } from "$lib/firebase";
    import { collectionStore } from "sveltefire";

    const products = collectionStore(db, "products");
</script>

<div class="products">
    {#each $products as product}
        <div class="product">
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
            <span class="description">{product.description}</span>
            <br/>
            <span class="price">${product.price}</span>
        </div>
    {/each}
</div>


<style>
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        padding: 1rem;
    }
    .product {
        background: #565656;
        padding: 1rem;
    }
    .product > img {
        object-fit: cover;
        aspect-ratio: 9/16;
        width: 100%;
        height: 5rem;
        object-position: center;
    }
    .product > h1 {
        color: #ccc;
    }
    .product > .price {
        color: #0F0;
    }
    .product > .description {
        color: #ccc;
    }
</style>

