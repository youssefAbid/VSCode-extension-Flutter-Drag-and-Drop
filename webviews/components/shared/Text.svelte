<!-- svelte-ignore a11y-label-has-associated-control -->
<label id={id} 
 tag="text" 
 on:dragstart 
 draggable={true} 
 style={"text-decoration: "+textDecoration+";"
 +"color: "+textColor+";"
 +"background-color: "+backgroundColor+";"
 +";font-size: "+fontSize+"px;"
 +"word-spacing: "+wordSpacing+"px;"
 +"letter-spacing: "+letterSpacing+"px;"
 +"font-family: "+font+";"
 +"font-weight: "+bold+";"
 +"font-style: "+italic+";"}>
 {textContent}
</label>
<script>
    export let id;
    export let textColor = "white";
    export let backgroundColor = "black";
    export let font = "Roboto";
    export let fontSize = "30";
    export let wordSpacing ="10";
    export let letterSpacing ="5";
    export let textContent = 'Text Text';

    export let bold ="bold";
    export let italic ="italic";
    export let textDecoration = "none";
    

</script>