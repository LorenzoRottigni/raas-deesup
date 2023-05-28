<script lang="ts">
import molteni_hero from '$lib/images/molteni_hero.jpeg'
import ProductCard from '../components/ProductCard.svelte'
import Button, { Label } from '@smui/button'
import type { Product } from '../types/vendure'
import { onMount } from 'svelte'
let featuredProducts: Product[]

onMount(async () => {
  const response = await fetch('/products/featured')
  featuredProducts = await response.json()
})
</script>

<svelte:head>
	<title>Home - Deesup RaaS</title>
	<meta name="description" content="Deesup RaaS demo" />
</svelte:head>

<div class="home">
  <section class="home__hero">
    <article class="home__hero__content">
      <h1>Resale your Molteni's design furniture</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt qui rem, exercitationem repellat id harum nemo similique et, eos delectus ducimus accusantium dolorem dignissimos vitae adipisci excepturi hic, vero quo?</p>
      <div class="home__hero__content__ctas">
        <Button variant="raised">
          <Label>Discover</Label>
        </Button>
        <Button variant="raised">
          <Label>Resale</Label>
        </Button>
      </div>
    </article>
    <img src={molteni_hero} alt="Molteni furniture" width="600px" height="400px"/>
  </section>
  <section class="featured__products">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est enim eius consectetur accusamus dolorum neque quidem. Explicabo vel molestiae fugiat pariatur nam consequatur nihil natus soluta qui ipsum? Suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas ducimus dolor officia qui aliquam nostrum aliquid nobis soluta. Magni rerum architecto at numquam, sit atque veniam blanditiis corporis sapiente!</p>
    <div>
      {#if featuredProducts }
        {#each featuredProducts as product, index}
          <ProductCard product={product}/>
        {/each}
      {:else}
        LOADING
      {/if}
    </div>
    <a href="/shop">View all products</a>
  </section>
</div>

<style lang="sass">
.home
  width: 100%
  section.home__hero
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: solid 1px black
    .home__hero__content
      width: 100%
      height: 100%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      gap: .75rem
      & > *
        max-width: 600px
        text-align: center
      p
        font-size: 18px
      .home__hero__content__ctas
        display: flex
        justify-content: center
        align-items: center
        gap: 2rem
        margin-top: 1.5rem
    img
      height: auto
      width: 60%
  section.featured__products
    width: 100%
    h2
      text-align: center
      margin-top: 2rem
    p
      text-align: center
      max-width: 900px
      margin: 2rem auto
    a
      display: block
      width: 100%
      text-align: center
    & > div
      width: 100%
      display: flex
      flex-wrap: wrap
      gap: 2rem
      justify-content: center
      padding: 2rem 1rem
</style>