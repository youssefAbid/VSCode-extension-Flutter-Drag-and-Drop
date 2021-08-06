<style>
    .draggableFlatBtn{
    user-select: none;
    position: absolute;
    cursor: grab;
    }

    .top-app-bar-container {
    max-width: 361px;
    min-width: 361px;
    margin: 0 18px 18px 0;
  }
</style>

<script>
// ********************** variable declaration ***********************

  
  import Textfield from '@smui/textfield';

    import Button from '@smui/button';

    export let widthAnchor; // widthAnchor position of draggable elmenet 
    export let heightAnchor; // heightAnchor position of draggable elmenet
    let superText = '';
    let moving = false ; // a variable for testing if the draggable element is moving 

    let width ;  // width of draggable elmenet 
    let height ; // height of draggable elmenet 

    let speedX = 1; // spped of draggable elmenet moving horizantally
    let speedY = 1; // spped of draggable elmenet moving vertically

    export let button;

    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher ();
    let isSelectedItem=false;
    
    let left = 100; // vertical position of draggable elmenet 
    let top = 100; // horizantal position of draggable elmenet 
    $: bgColor = button.color;
    $: textColor = button.textColor;
    $: textB = button.text;
    $: widthB = button.width;
    $: heightB = button.height;
// ********************** end of variable declaration ********************

// ********************** Functions ********************

/*** Start ***/
    const start = ()=>{ // On mouse button (fire1) DOWN this function will be executed
        moving = true; //setting moving variable true 
    };
/*** End Start ***/

/*** Stop ***/
    const stop = ()=>{// On mouse button (fire1) UP this function will be executed
        moving = false; //setting moving variable false 
        if(left <= 0){ // controle :  to being sure that all elements are in the anchor otherwise force it to be 
            left = 0;
        }
        if(left >= widthAnchor-width){
            left = widthAnchor-width;
        }
        if(top <= 0){
            top = 0;
            speedY = 1 ;
        }
        if(top >= heightAnchor-height){
            top = heightAnchor-height;
        }
    };
/*** End Stop ***/
/*** move ***/
    const move = (event)=>{// On mouse button (fire1) DOWN and moving  this function will be executed
        
        if(moving){ 
            /*** moving controle of Draggable element ***/
            if(left > 0 && left <= widthAnchor-width && top > 0 && top <= heightAnchor-height)
            {
                left += event.movementX * speedX ;
                top += event.movementY * speedY ;
            }else{
                if(left <= 0 || left >= (widthAnchor-width)){
                    speedX = 0 ; 
                    if(event.movementX>0 && left <= 0 ){
                        left += event.movementX;
                    }
                    if(event.movementX<0 && left >= (widthAnchor-width)){
                        left += event.movementX;
                    }
                    speedX = 1 ;
                }
                if(top <= 0 || top >= (heightAnchor-height)){
                    speedY = 0 ; 
                    if(event.movementY>0 && top == 0 ){

                        top += event.movementY;

                    }
                    if(event.movementY<0 && top >= (heightAnchor-height)){
                        top += event.movementY;
                    }
                    speedY = 1 ;
                }
            }
            //console.log("left:"+left+"\n"+"top:"+top);
            /*** End moving controle of Draggable element ***/
            }
        };
/*** End move ***/
// ********************** End Functions ********************


//left = positionX;

//now
$:id = button.id;
const clickHandler = (id) => {
    isSelectedItem=true;
    console.log(button.positionX );
    dispatch('itemUpDate',{id,isSelectedItem,left,top}) ;
};

const cancelSelectHandler = () => { // later...
    isSelectedItem = false ;
};

import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
import IconButton from '@smui/icon-button';
let prominent = false;
let dense = true;
let secondaryColor = false;
</script>
<svelte:window on:mouseup={stop} on:mousemove={move} on:click={() => cancelSelectHandler()} />

    {#if button.name == "Button"}
<section on:mousedown={start} style="left: {left}px; top: {top}px" class="draggableFlatBtn" bind:clientWidth={width} bind:clientHeight={height}>
    <Button style ={"cursor: pointer;text-align: center;background-color:"+bgColor+"; color:"+textColor+"; width:"+widthB+"px; height: "+heightB+"px;positon absolute;"} variant="raised" on:click={() => clickHandler(id)}>
        {textB}
    </Button>
</section>
{:else if button.name == "TextField" }
<section  on:mousedown={start} style="left: {left}px; top: {top}px" class="draggableFlatBtn" bind:clientWidth={width} bind:clientHeight={height}>
  
    <Textfield 
    bind:value={superText}
    input$aria-controls="super-helper"
    input$aria-describedby="super-helper"
  />
</section>
{:else if button.name == "AppBar" }
<section  on:mousedown={start} class="draggableFlatBtn" bind:clientWidth={width} bind:clientHeight={height}>
    <div class="flexy">
        <div class="top-app-bar-container">
          <TopAppBar variant="static"  {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'} style={"width = 100%;"}>
            <Row>
              <Section>
                <IconButton class="material-icons">menu</IconButton>
                <Title>Static</Title>
              </Section>
              <Section align="end" toolbar>
              </Section>
            </Row>
          </TopAppBar>
        </div>
</section>

{/if}






