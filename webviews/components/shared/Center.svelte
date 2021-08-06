<style>

</style>

<button  name="center"
 on:click={handleGetID} 
 id={id}
 style={"padding: 0;width:100%;height:fit-content;justify-content:center;align-items:center;position: relative;border: 1px transparent ;background: transparent;box-shadow: 0px 0px 2px 2px #7B79FF;"}>
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