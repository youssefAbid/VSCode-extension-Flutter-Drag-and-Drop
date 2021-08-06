<style>
    #anchor { 
    background-color:rgba(255, 255, 255, 1);
    position: fixed;
width: 360px;
height: 740px;
left: calc(50% - 360px/2);
top: calc(50% - 740px/2 + 29px);
    }

  * :global(.UiButton) {
    display: block;
  width: 150px;
  height: 150px;
  left: 100px;
  top: 100px;
  border: none;
  background-color: #4CAF50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  }
  * :global(.UiButton:hover) {
  cursor: pointer;
  background: turquoise;
}
* :global(.UiButton:focus) {
  cursor: pointer;
  outline-color: turquoise;
}
</style>

<div id="anchor" class ="anchorPain" bind:clientWidth={w} bind:clientHeight={h} >
    {#each buttons as button (button.id)}
    <DraggableFlatBtn widthAnchor = {w} heightAnchor = {h} {button}  on:itemUpDate component="{DraggableFlatBtn}"/>
  {/each}
</div>
<script>

import DraggableFlatBtn from './DraggableFlatBtn.svelte';
export let w;
export let h;
export let buttons = [];
</script>



