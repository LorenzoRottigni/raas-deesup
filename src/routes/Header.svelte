<script>
import deesup_logo from '$lib/images/deesup_logo.png';
import molteni_logo from '$lib/images/molteni_logo.png';
</script>

<header>
    <nav>
        <img src={deesup_logo} alt="Deesup logo" width="250px" height="125px"/>
        <span>X</span>
        <img src={molteni_logo} alt="Molteni logo" width="250px" height="125px"/>
    </nav>
</header>

<style lang="sass">
header
    width: 100%
    padding: 1.5rem
    border-bottom: solid 1px black
    nav
        display: flex
        align-items: center
        justify-content: center
        gap: 1rem
        img
            width: 250px
            object-fit: contain
            object-position: center
        span
            font-size: 40px
            font-weight: bolder
</style>