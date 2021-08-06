<style>
	span {
		padding: 0 0 0 1.5em;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 1.5em;
		list-style: none;
		border-left: 1px solid #eee;
        
	}

	li {
		padding: 0.2em 0;
	}
    .tree{
        background-color: #16192E;
    }
    .container{
		background-size: 1em 1em;
        background-color: #16192E;
		font-weight: bold;
		cursor: pointer;
        border-radius: 5px;
    }
	.treeItems{
		display: inline;
		position: relative;
		width: 100%;
	}
	.up{
		height: 1px;
	}
	.down{
		height: 1px;
	}

</style>
<div class="container">
    <ul class="tree" id="out1">
        <li class="treeItems"  id="out2">
			<div class ="up"></div>
            <span  class:expanded id={id} on:dragstart={handleDragStart} draggable="true">{name} </span>
			<Icon class="material-icons" name ="Item" on:click={toggle} style={"left: 100% ;"}>chevron_right</Icon>
			<div class="down"></div>
        </li>
    </ul>

    {#if expanded}
        <ul class="tree" id="for1">
            {#each children as file }
                <li  i
				d={file.id} 
				on:drop={handleDragDrop} 
				on:mousedown={getid} 
				ondragover="return false">
                    {#if file.type === 'folder' }
                        <svelte:self {...file}  />
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}
</div>
<script>
	import {Label, Icon} from '@smui/common';
	export let expanded = false;
	export let name;
	export let id ;
	export let children;
	export let draggedItemID;
	import { createEventDispatcher } from 'svelte';
	
	let mmm ;
    let dispatch = createEventDispatcher ();
	let  dragItemID;
	function toggle() {
		expanded = !expanded;
	}

	function handleDragDrop(e){
		e.preventDefault();
		console.log("drop "+e.target.getAttribute("id"));
		dispatch('dropItem',{drop : e.target.getAttribute("id"),drag : mmm}) ;
		
		
	}
	function handleDragStart(e){
		
		dragItemID = e.target.getAttribute('id');
		draggedItemID=dragItemID;
		console.log("drag item id :"+dragItemID)
		document.getElementById("draggedItem").setAttribute("value",dragItemID);
		//dispatch('dragItem',{drop : e.target.getAttribute("id"),drag : dragedItemId}) ;
		
	}
	function getid(e){
		console.log("hover "+e.target.getAttribute("id"));
		mmm=e.target.getAttribute("id")
	}
</script>
