<style>
    .pure-material-button-contained {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        padding: 0 16px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
        font-size: 14px;
        font-weight: 500;
        line-height: 36px;
        overflow: hidden;
        outline: #4CAF50 solid 10px;
        cursor: pointer;
        transition: box-shadow 0.2s;
    }
    
    
    
    </style>
    
        
      <button class="mdc-button {btnType}"
      id={id} 
      name="Item"
      style={"background-color: "+backgroudColor+";"+
      "box-shadow: "+shadowColor+";"+
      ";width: "+fixedWidth+"px;"+
      "height: "+fixedHeight+
      "px;max-width: "+maxWidth+
      "px;min-width: "+minWidth+
      "px;max-height: "+maxHeight+
      "px;min-height: "+minHeight+"px;"} 
      on:dragstart
      draggable={true}>
      {#if haveLeftIcone}
            <i class="material-icons mdc-button__icon" style={"pointer-events: none;"} aria-hidden="true">{leftIcone}</i>
        {/if}
            <span class="mdc-button__label" style={"pointer-events: none;color: "+textColor+";text-transform:"+upperCase+";elevation: 60deg;"} >{btnContent}</span>
            {#if haveRightIcone}
            <i class="material-icons mdc-button__icon"style={"pointer-events: none;"}  aria-hidden="true">{rightIcone}</i>
            {/if}
      </button>
      <script>
          export let id ;
          export let btnContent;
          export let upperCase="none";
          export let backgroudColor="blue";
          export let textColor="";
          export let leftIcone="";
          export let rightIcone="";
          export let haveLeftIcone = false;
          export let haveRightIcone = false;
          export let minWidth;
          export let minHeight;
          export let maxWidth;
          export let maxHeight;
          export let fixedWidth="auto";
          export let fixedHeight="auto";
          export let shadowColor;
          export let autoFocus;
          export let mouseCursor;
          export let onPressed;
          export let onLongPressed;
          export let btnType;
          // export let elevation;
          // export let shape;
          // export let padding;
          // export let visualDensity;
          // export let  allignment;
          
          
    
        //   export let font;
        //   export let fontsize;
        //   export let outlineBorder;
    
       
    
         
          
    
    
    
    
      </script>
      