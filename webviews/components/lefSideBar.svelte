<script>
  import Button from '@smui/button'; // Import material ui button
  import { createEventDispatcher } from 'svelte'; // Import the dispatcher
	let dispatch = createEventDispatcher (); 
	let itemName; // var can hold the name of the new item 
  	let buttons = {}; 
	let widgets = {id: Math.random()};
	let columns = {id: Math.random()};
	let rows = {id: Math.random()};
	
/*************************************Items creation*************************************/
	const createNewBtn = ()=>{
		itemName ="Button";
		createNewItem();
		test();
		
  };

  const createNewLabel = ()=>{
		itemName ="Label";
		createNewItem();
  };

  const createNewTextField = ()=>{
		itemName ="TextField";
		createNewItem();
  };

  const createNewAppBar =() =>{
	itemName ="AppBar";
		createNewItem();
  };

  const createNewImage =() =>{
	itemName ="Image";
		createNewItem();
  };
/*************************************End Items creation*************************************/
/*************************************Push the new item in the table*************************************/
  const createNewItem = () => {
		console.log(buttons);
		let button = {...buttons,id: Math.random(),name:itemName,color:"blue",textColor:"white",text:"DragMe!",positionX:"1",positionY:"1",width:"90",height:"40"};
		dispatch('add',button);
  };
  const test = () =>{
	let items = {id: Math.random(),name:"Button",color:"blue",textColor:"white",text:"DragMe!",positionX:"1",positionY:"1",width:"90",height:"40"};
	let clm = {...columns,items};
	rows = {...rows,items,clm};
	columns = {...columns,rows};
	widgets = {...widgets,columns};
	dispatch('test',widgets);
	
  };
  /*************************************End push the new item in the table*************************************/
	
  </script>

<style>
	#left-container { 
		box-shadow:-5px 9px 27px rgba(0, 0, 0, 0.25);
		background-color:rgba(43.56250025331974, 43.56250025331974, 43.56250025331974, 1);
		opacity:1;
		width:300px;
		height:900px;
		margin-top: 50px;
	}

</style>

<div  id="left-container" draggable="false">
	<center>
	<Button id="new-flat-button" on:click={createNewBtn}>Flat Button</Button>
	<br/>
	<Button id="new-flat-button" on:click={createNewTextField}>TextField</Button>
	<br/>
	<Button id="new-flat-button" on:click={createNewLabel}>Label</Button>
	<br/>
	<Button id="new-flat-button" on:click={createNewAppBar}>AppBar</Button>
	<br/>
	<Button id="new-flat-button" on:click={createNewImage}>Image</Button>
	</center>
</div>

	