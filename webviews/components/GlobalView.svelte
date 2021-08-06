<style >
#right { 
	box-shadow:-5px 9px 27px rgba(0, 0, 0, 0.25);
	background-color:rgba(43.56250025331974, 43.56250025331974, 43.56250025331974, 1);
	width:299px;
	height:990px;
	position:absolute;
	left:0px;
	top:34px;
}
#left { 
	box-shadow:-5px 9px 27px rgba(0, 0, 0, 0.25);
	background-color:rgba(43.56250025331974, 43.56250025331974, 43.56250025331974, 1);
	width:305px;
	height:990px;
	position:absolute;
	right: 0px;
	top:34px;
}
#top { 
	background-color:rgba(43.56250025331974, 43.56250025331974, 43.56250025331974, 1);
	width:100%;
	height:34px;
	position:absolute;
	left:0px;
	top:0px;
}
#anchor { 
	background-color:rgba(255, 255, 255, 1);
	width:360px;
	height:740px;
	position:fixed;
	left:40%;
	top:171px;
    overflow-x: auto;
}


	#drop_zone {
    background-color:rgba(255, 255, 255, 1);
	width:360px;
	height:740px;
	position:fixed;
	left:40%;
	top:171px;
    overflow: auto;
  }
  
  .objects {
    display: inline-block;
    background-color: #FFF3CC;
    border: #DFBC6A 1px solid;
    width: 50px;
    height: 50px;
    margin: 10px;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    box-shadow: 2px 2px 2px #999;
    cursor: move;
  }

</style>

<div>
    <div id="right">
        {#each objects as { id,name }, i}
        <div 
            id="{id}"
            class="objects" 
            draggable=true 
            bind:this={objects[i].el}
            on:dragstart={handleDragStart}>
            Object { name }
        </div>
        <br/>
    {/each}
    </div>
    <div id="left">
        
    </div>
    <div id="top">
    </div>
    </div>
    
    <div on:drop={handleDragDrop}  id="drop_zone" ondragover="return false">
       
        </div>

<script >
 
    export let widget = [];
	let objects = [
		{ el: null, id: 1,name:'Column' }, 
		{ el: null, id: 2,name:'Row' }, 
		{ el: null, id: 3,name:'Button' }
	];
	let dropped = [];
    function handleDragStart(e) {
        e.dataTransfer.setData("text", e.target.getAttribute('id'));
        console.log(e);
        console.log(widget);
    }
 
    function handleDragDrop(e) {
            var x = e.clientX; 
            var y = e.clientY; 
            let el = document.elementFromPoint(x, y);
        
            console.log("element : " + el.id);
            e.preventDefault();
            var element_id = e.dataTransfer.getData("text");
            dropped = dropped.concat(element_id);
            let UniqueId = Math.random();
            let widgetName ;
            
                if(element_id == 1){
                    widgetName = "Column"
                    let column = {id : UniqueId,name : widgetName,listId : el.id,positionStartX : 0,positionStartY : 0};
                    widget = [...widget,column];
                }
                if(element_id == 2){
                    widgetName = "Row"
                    let row = {id : UniqueId,name : widgetName,listId : el.id,positionStartX : 0,positionStartY : 0};
                    widget = [...widget,row];
                }
                if(element_id == 3){
                    widgetName = "Item"
                    let item = {id : UniqueId,name : widgetName,listId : el.id,positionStartX : 0,positionStartY : 0};
                    widget = [...widget,item];
                }
                console.log(widget);
            
        
            var content =document.createElement("div");
            var container = document.createElement("div");

            if(element_id == 1 ) {
            content.setAttribute("style" , 
            "display: flex;"+"resize: both;"+"overflow: auto;"+"min-width: 50px;"+"max-width: 358px;"+"width : 50px;"+"height : 50px;"+"min-height : 50px;"+"max-height : 738px;"+
            "border: 1px solid ;"+"flex-direction: column;"+"background-color: #FFF3CC;");
            }
            if(element_id == 2 ) {
            content.setAttribute("style" , 
            "display: flex;"+"resize: both;"+"overflow: auto;"+"min-width: 50px;"+"max-width: 358px;"+   "width : 50px;"+"height : 50px;"+"min-height : 50px;"+"max-height : 738px;"+
            "border: 1px solid ;"+"flex-direction: row;"+"background-color: #FFF3CC;");
            }
            if(element_id == 3 ) {
            content.setAttribute("style" ,
            "display: flex;"+ "resize: both;"+"overflow: auto;"+"min-width: 50px;"+"max-width: 358px;"+"width : 50px;"+"height : 50px;"+"min-height : 50px;"+"max-height : 738px;"+
            "border: 1px solid ;"+"flex-direction: column;"+"background-color: #FFF3CC;");
            }
            content.id = UniqueId;
            var text = document.createTextNode(widgetName);
            
            content.appendChild (text);
        
            container.appendChild (content);
            document.getElementById(el.id).appendChild(container);

            document.getElementById(UniqueId).addEventListener("mouseover", displayDate);

function displayDate() {
 console.log("hi");
}

var div = document.getElementById(UniqueId);
var delta = 10; // the thickness of the hovered border area

div.onmousemove = function(e) {
    var rect = div.getBoundingClientRect();
    var x = e.clientX - rect.left,      // the relative mouse postion to the element
        y = e.clientY - rect.top,       // ...
        w = rect.right - rect.left,     // width of the element
        h = rect.bottom - rect.top;     // height of the element
        
   var c = "";                          // which cursor to use
   if(y < delta) c += "n";              // north
   else if( y > h - delta) c += "s";    // south
   if(x < delta) c += "w";              // west
   else if(x > w - delta) c += "e";     // east
   
   if(c){                               // if we are hovering at the border area (c is not empty)
       //div.style.cursor = c + "-resize"; // set the according cursor
       div.style.borderStyle = "2px solid";
       div.style.borderColor = "#ff0000 #00ff00 #0000ff rgb(250,0,255)";
    }

   else                                 // otherwise
       div.style.cursor = "pointer";    // set to pointer
}
       
                    
    }

    
//"border-style: solid;"+
//"border-color: #ff0000 #00ff00 #0000ff rgb(250,0,255);"+
</script>
















