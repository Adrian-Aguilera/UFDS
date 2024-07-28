<template>
    <div class="banner">
        <h1 class="ribbon">BIBLIOTECA</h1>
    </div>
</template>
<script>
export default {
    name: 'BannerInter',
}
</script>
<style scoped>
.banner {
    background: url('../assets/img/conoce.jpg') no-repeat center center;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.banner::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.banner h1 {
    position: relative;
    color: white;
    font-size: 2.5rem;
    width: 100%;
    text-align: center;
}

/* HTML: <div class="ribbon">Your text content</div> */
.ribbon {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
  }
  .ribbon {
    --f: .5em; /* control the folded part*/
    --r: .8em; /* control the ribbon shape */
    
    position: absolute;
    bottom: 20px;
    left: calc(-1*var(--f));
    padding-inline: .25em;
    line-height: 1.8;
    background: #E3AD40;
    border-top: var(--f) solid #0005;
    border-right: var(--r) solid #0000;
    clip-path: 
      polygon(calc(100% - var(--r)) 100%,0 100%,0 var(--f),var(--f) 0,
        var(--f) var(--f),calc(100% - var(--r)) var(--f),
        100% calc(50% + var(--f)/2));
  }
</style>