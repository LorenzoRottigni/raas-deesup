<script lang="ts">
import type { Product } from "../types/vendure";

export let product: Product
</script>

<article>
    <div class="product-card">
        <img src={product?.featuredAsset?.preview} alt={`${product.name} preview`}>
        <div>
            <p>{product?.name?.split?.(',')?.[0]}</p>
            <span>{product?.name?.split?.(',')?.[1]}</span>
        </div>
    </div>
</article>

<style lang="sass">
.product-card
    max-width: 400px
    border: solid 1px black
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    img
        width: 100%
        height: auto
        object-fit: cover
    & > div
        padding: 1rem
        display: flex
        flex-direction: column
        align-items: center
        gap: 1rem
        p
            font-size: 18px
            font-weight: bold
            text-align: center
        span
            font-size: 14px
            margin: 0 auto
</style>