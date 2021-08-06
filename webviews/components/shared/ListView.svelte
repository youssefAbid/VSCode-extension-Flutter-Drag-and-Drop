<style>

</style>

<button  name="listview"
 on:click={handleGetID} 
 id={id}
 style={"display:flex;min-height: fit-content;overflow : scroll;min-width:fit-content; max-width:300px;max-height:300px;background-color: transparent;flex-direction:"+scrollDirection+";position:relative;border: 1px transparent ;background: transparent;box-shadow: 0px 0px 2px 2px #7B79FF;"
+"padding:"+paddingT+"px "+paddingR+"px "+paddingB+"px "+paddingL+"px;"+
      "margin:"+marginT+"px "+marginR+"px "+marginB+"px "+marginL+"px;"}>
<slot></slot>
</button>

<script>
  import { createEventDispatcher } from 'svelte'; 
  export let paddingL;
  export let paddingT;
  export let paddingR;
  export let paddingB;

  export let marginL ;
  export let marginT ;
  export let marginR ;
  export let marginB ;
  export let id ;
  export let scrollDirection;
  let dispatch = createEventDispatcher ();

 const handleGetID = (e) => {
  var x = e.clientX; 
  var y = e.clientY; 
  var name
  let el = document.elementFromPoint(x, y);
  console.log("yo bro hello i am : "+el.name);
  console.log("yo bro hello i am : "+el.localName);
  if(el.localName =="label"){
    name = "text";
  }
  else{
    name = el.name;
  }
  dispatch('GetIDAndNameItem',{id : el.id,name : name}) ;
 };
 </script>
