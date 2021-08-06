<style>
	#right-container { 
		box-shadow:5px 9px 27px rgba(0, 0, 0, 0.25);
		background-color:rgba(43.56250025331974, 43.56250025331974, 43.56250025331974, 1);
		opacity:1;
		width:300px;
		height:900px;
        float: right;
	}
	</style>
<div id="right-container">
	<input type="text" placeholder="id" bind:value={idSelectIem} />
	<input type="text" disabled bind:value={typeName} on:input={inputTypeNameHandler}/>
    <input type="text" placeholder="pick a background color" bind:value={bgColor} on:input={inputBgColorHandler}/>
    <input type="text" placeholder="pick a Text Color " bind:value={textColor} on:input={inputTextColorHandler} />
	<input type="text" placeholder="type your Text " bind:value={text} on:input={inputTextHandler} />
	<input type="text" placeholder="X Position" bind:value={positionX} on:input={inputPositionXHandler} />
	<input type="text" placeholder="Y Position" bind:value={positionY} on:input={inputPositionYHandler} />
	<input type="text" placeholder="Width" bind:value={width} on:input={inputWidthHandler} />
	<input type="text" placeholder="Height" bind:value={height} on:input={inputHeightHandler} />

</div>

<script>
    import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher ();
	/*************************************Init Data To Send*************************************/
	export let bgColor ;
	export let idSelectIem;
	export let typeName;
	export let textColor;
	export let text;
	export let positionX;
	export let positionY;
	export let width;
	export let height;
	/*************************************End init Data To Send*************************************/
/*************************************Send Data with the function DISPATCH*************************************/
  const inputBgColorHandler = ()=> {
  dispatch('color',bgColor);
  dispatch('id',idSelectIem);
 };

 const inputTextColorHandler = ()=> {
  dispatch('textcolor',textColor);
  dispatch('id',idSelectIem);
 };
 const inputTypeNameHandler = ()=> {
  dispatch('typeName',typeName);
  dispatch('id',idSelectIem);
 };
 const inputTextHandler = ()=> {
  dispatch('text',text);
  dispatch('id',idSelectIem);
 };

 const inputPositionXHandler = ()=> {
  dispatch('positionX',positionX);
  dispatch('id',idSelectIem);
 };
 const inputPositionYHandler = ()=> {
  dispatch('positionY',positionY);
  dispatch('id',idSelectIem);
 };
 const inputWidthHandler = ()=> {
  dispatch('width',width);
  dispatch('id',idSelectIem);
 };

 const inputHeightHandler = ()=> {
  dispatch('height',height);
  dispatch('id',idSelectIem);
 };
/*************************************End Send Data with the function DISPATCH*************************************/


</script>

