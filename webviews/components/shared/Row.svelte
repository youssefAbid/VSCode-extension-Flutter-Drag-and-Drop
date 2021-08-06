<style>

</style>

<button  name="Row" on:click={handleGetID}  id={id} 
style={"display:flex;justify-content:"
+MainAxesAlignment+";align-items:"
+CrossAxesAlignment+";height: "
+height+";width:"
+width+"; max-width:100%;max-height:100%;flex-direction: row;position:relative;border: 1px transparent ;background: transparent;box-shadow: 0px 0px 2px 2px #7B79FF;"
+"padding:"+paddingT+"px "+paddingR+"px "+paddingB+"px "+paddingL+"px;"+
"margin:"+marginT+"px "+marginR+"px "+marginB+"px "+marginL+"px;"}>
<slot></slot>
</button>

<script>
  import { createEventDispatcher } from 'svelte'; 

  export let  MainAxesAlignment = "center";
  export let MainAxesSize ="Min";
  export let CrossAxesAlignment = "stretch";
  export let paddingL;
  export let paddingT;
  export let paddingR;
  export let paddingB;

  export let marginL ;
  export let marginT ;
  export let marginR ;
  export let marginB ;
  export let id ;
  let pont;
let width;
let height;
$:{
  console.log("lklklklklklklklklklklklklkl"+MainAxesSize+" "+width+" "+height);
  pont = MainAxesSize;
  if(MainAxesSize =="min"){
    width = "fit-content"
    height ="fit-content"
  }else{
    width ="100%";
    height = "100%";
  }
}
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

