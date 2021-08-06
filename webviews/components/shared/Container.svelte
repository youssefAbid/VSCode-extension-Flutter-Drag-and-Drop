<style>

</style>

<button  name="container"
 on:click={handleGetID} 
 id={id}
 style={"display:table;flex-direction:flex;clear:both;align-items: center;justify-content:stretch;"+containerMechanisme+" max-width:100%;max-height:100%;border: 1px transparent ;background: "+backgroundColor+";box-shadow: 0px 0px 2px 2px #7B79FF;"+
"padding:"+paddingT+"px "+paddingR+"px "+paddingB+"px "+paddingL+"px;"+
      "margin:"+marginT+"px "+marginR+"px "+marginB+"px "+marginL+"px;"}>
<slot></slot>
</button>

<script>
  import { createEventDispatcher } from 'svelte'; 
  export let  Height = "50";
  export let Width ="50";
  export let backgroundColor = "";
  export let id ;
  export let child;
  export let paddingL;
  export let paddingT;
  export let paddingR;
  export let paddingB;
  export let marginL ;
  export let marginT ;
  export let marginR ;
  export let marginB ;
  let containerMechanisme;
  let dispatch = createEventDispatcher ();
$:{
  console.log("9999999999999999999999999999"+child,backgroundColor);
  if((Width==""||Width==null) && (Height==""||Height==null))
  {
    if(child==""){
      containerMechanisme = "width:100%;height:100%;"
      console.log("width:"+Width);
      console.log("height:"+Height);
    }else{
      containerMechanisme = "width:fit-content;height:fit-content;"
   }
  }else{
    console.log("width:"+Width);
      console.log("height:"+Height);
    containerMechanisme = "width:"+Width+"px;height:"+Height+"px;"
  }
}
 const handleGetID = (e) => {
   
  var x = e.clientX; 
  var y = e.clientY; 
  let el = document.elementFromPoint(x, y);
  console.log("yo bro hello i am : "+el.name+","+el.id);

  dispatch('GetIDAndNameItem',{id : el.id,name : el.name}) ;
 };
 </script>