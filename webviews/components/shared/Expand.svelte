<style>

</style>

<button  name="Expand"
 on:click={handleGetID} 
 id={id}
 style={"display:flex;padding: 0;justify-content: center;align-items: center;flex:1;border: 1px transparent ;background: transparent;box-shadow: 0px 0px 2px 2px #7B79FF;"}>
<slot></slot>
</button>

<script>
  import { createEventDispatcher } from 'svelte'; 

  export let id ;

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
