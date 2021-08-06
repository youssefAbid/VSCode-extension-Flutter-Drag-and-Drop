<style>
    
    .background{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #16192E;
        left: 0;
        right: 0;
    }
    .leftSideBar{
        position: fixed;
        width: 20%;
        height: 100%;
        background-color: #0E101F;
        position:fixed;
	    right: 0px;
        overflow: auto;
    }
    .rightSideBar{
        position: absolute;
        width: 20%;
        height: 100%;
        background-color: #0E101F;
        position:fixed;
	    left: 0px;
        overflow: auto;
    }
    .anchor{
        display: flex;
        position: absolute;
        align-items:stretch;
        width: 411px;
        height: 731px;
        background: #FFFFFF;
        flex-direction: flex;
        top: 20%;
        right: 40%;
        }
    .top-app{
        display: flex;
        position: absolute;
        align-items:stretch;
        width: 411px;
        top: 13.5%;
        right: 40%;
        height: 63.8px;
        background: transparent;
    }
    .test{
        position: relative;
        width: 100%;
    }
    .container1{
        height: 70%;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 5%;
        margin-top: 20%;
        position: relative;
    }
    div.center-fine-text{
        text-align: center;
    }
    * :global(.one-component){
        background-color: #16192E;
        height: 40px;
        cursor: pointer;
        position: relative;
        border-radius: 5px;
        padding-left: 7%;
        padding-right: 7%;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
    }
 
   
    .second-component{
        
        height: 50px;
        position: relative;
    }
     div.text-components{
        font-family: Poppins ;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 21px;
        text-transform: capitalize;
        color: #C4C4C4;

        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
        .container1-tree{
        height: 70%;
        width: 90%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 5%;
        margin-top: 20%;
        position: relative;
    }
    
     .sized-box{
        height: 20px;
    }
        .inside-component{
        background-color: #16192E;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding-left: 10%;
        padding-right: 10%;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
    }
       .textDesc{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 21px;
        text-align: center;
        text-transform: capitalize;
        color: #C4C4C4;
    }
        .box{
            display: inline-flex;
        width: 278px;
        height: 30px;
        background: #16192E;
        padding-top: 10px;
        
    }
    .box2{
        display: inline-flex;
        width: 278px;
        height: 30px;
        padding-top: 10px;
        
    }
   .check{
        width: 24px;
        height: 24px;
        background-color: #C4C4C4;
        border-radius: 5px;
        margin-right: 40px;
        -webkit-font-smoothing: subpixel-antialiased;
        transition: border .25s linear, color .25s linear, background-color .25s linear;
    }
    .check1{
        width: 24px;
        height: 24px;
        background-color: #5ACEFF;
        border-radius: 5px;
        margin-right: 40px;
        -webkit-font-smoothing: subpixel-antialiased;
        transition: border .25s linear, color .25s linear, background-color .25s linear;
    }

 
</style>
<div >
    
    <div class="background">
        <div class="col-3">
            <div class="leftSideBar">
                <div class="col-8 container1">
                    {#if (selectedItemID === "drop_zone")}
                    <div class="center-fine-text">Scafold</div>
                    <br>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td> <div class="check" on:click={handleHaveTopNavBar} id="checkTopNavBar"></div></td>
                            <td><div class="box"><div class="textDesc">Top navigation bar</div></div></td>
                        </tr>
                        <tr>
                            <td> <div class="check" on:click={handleHaveBopNavBar} id="checkBotNavBar"></div></td>
                            <td><div class="box2"><div class="textDesc" >Bottom navigation bar</div></div></td>
                        </tr>
                        <tr>
                            <td> <div class="check"></div></td>
                            <td><div class="box"><div class="textDesc">Top navigation bar</div></div></td>
                        </tr>
                        <tr>
                            <td> <div class="check"></div></td>
                            <td><div class="box2"><div class="textDesc">Test</div></div></td>
                        </tr>
                        <label for="colorpicker">Color Picker:</label>
                        <input type="color" id="colorpicker" value="#0000ff" on:input={handleGetScafoldColor}>
                    </table>
                    {/if}
                    {#if (selectedItemName === "Column")}
                    <div class="center-fine-text">Column</div>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td> 
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleGetMainAxesAlignment(selectedItemID)} id="Column_MainAxesAlignment">
                                    <option value="center">Center</option>
                                    <option value="flex-start">Start</option>
                                    <option value="flex-end">End</option>
                                    <option value="space-around">Space Around</option>
                                    <option value="space-between">Space Between</option>
                                    <option value="space-evenly">Space Evenly</option>
                                </select>
                            </td>
                            <td><div class="box"><div class="textDesc">Main Axes Alignment</div></div></td>
                        </tr>
                        <tr>
                            <td>
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleGetCrossAxesAlignment(selectedItemID)} id="Column_CrossAxesAlignment">
                                    <option value="center">Center</option>
                                    <option value="start">Start</option>
                                    <option value="flex-end">End</option>
                                    <option value="stretch">Stretch</option>
                                </select>
                            </td>
                            <td><div class="box2"><div class="textDesc" >Cross Axes Alignment</div></div></td>
                        </tr>
                        <tr>
                            <td>
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleGetMainAxesSize(selectedItemID)} id="Column_MainAxesSize">
                                    <option value="max">Max</option>
                                    <option value="min">Min</option>
                                </select>
                            </td>
                            <td><div class="box"><div class="textDesc">Main Axes Size </div></div></td>
                        </tr>
                        <!-- ****************************************************Padding********************************************************** -->
                        <tr>
                            <td style={"left:0;"}><div class="box"><div class="textDesc">Padding LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangePaddingLeftColumn} bind:value={column.paddingL} id="Padding-Left-Column"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangePaddingTopColumn} bind:value={column.paddingT} id="Padding-Top-Column"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangePaddingRightColumn} bind:value={column.paddingR} id="Padding-Right-Column"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangePaddingBottomColumn} bind:value={column.paddingB} id="Padding-Bottom-Column"style={"flex:6;"}>
                            </td>
                        </tr>
<!-- *********************************************Margin*************************************************** -->
                        <tr>
                            <td><div class="box"><div class="textDesc">Margin LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangeMarginLeftColumn} bind:value={column.marginL} id="Margin-Left-Column"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangeMarginTopColumn} bind:value={column.marginT} id="Margin-Top-Column"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangeMarginRightColumn} bind:value={column.marginR} id="Margin-Right-Column"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangeMarginBottomColumn} bind:value={column.marginB} id="Margin-Bottom-Column"style={"flex:6;"}>
                            </td>
                        </tr>
                    </table>
                    {:else if (selectedItemName === "Row")}
                    <div class="center-fine-text">Row</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td> 
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleGetMainAxesAlignment(selectedItemID)} id="Column_MainAxesAlignment">
                                    <option value="center">Center</option>
                                    <option value="flex-start">Start</option>
                                    <option value="flex-end">End</option>
                                    <option value="space-around">Space Around</option>
                                    <option value="space-between">Space Between</option>
                                    <option value="space-evenly">Space Evenly</option>
                                </select>
                            </td>
                            <td><div class="box"><div class="textDesc">Main Axes Alignment</div></div></td>
                        </tr>
                      
                        <tr>
                            <td>
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleGetCrossAxesAlignment(selectedItemID)} id="Column_CrossAxesAlignment">
                                    <option value="center">Center</option>
                                    <option value="flex-start">Start</option>
                                    <option value="flex-end">End</option>
                                    <option value="stretch">Stretch</option>
                                </select>
                            </td>
                            <td><div class="box2"><div class="textDesc" >Cross Axes Alignment</div></div></td>
                        </tr>
                        <tr>
                            <td>
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleGetMainAxesSize(selectedItemID)} id="Column_MainAxesSize">
                                    <option value="max">Max</option>
                                    <option value="min">Min</option>
                                </select>
                            </td>
                            <td><div class="box"><div class="textDesc">Main Axes Size </div></div></td>
                        </tr>
                        <!-- ****************************************************Padding********************************************************** -->
                        <tr>
                            <td style={"left:0;"}><div class="box"><div class="textDesc">Padding LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangePaddingLeftRow} bind:value={row.paddingL} id="Padding-Left-Row"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangePaddingTopRow} bind:value={row.paddingT} id="Padding-Top-Row"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangePaddingRightRow} bind:value={row.paddingR} id="Padding-Right-Row"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangePaddingBottomRow} bind:value={row.paddingB} id="Padding-Bottom-Row"style={"flex:6;"}>
                            </td>
                        </tr>
<!-- *********************************************Margin*************************************************** -->
                        <tr>
                            <td><div class="box"><div class="textDesc">Margin LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangeMarginLeftRow} bind:value={row.marginL} id="Margin-Left-Row"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangeMarginTopRow} bind:value={row.marginT} id="Margin-Top-Row"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangeMarginRightRow} bind:value={row.marginR} id="Margin-Right-Row"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangeMarginBottomRow} bind:value={row.marginB} id="Margin-Bottom-Row"style={"flex:6;"}>
                            </td>
                        </tr>
                    </table>
                    
                    {:else if (selectedItemName===("Item"))}
                    
                    <div class="center-fine-text">Eleveted Button</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    <center>Style</center>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td>
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleChangeTypeElevatedBtn(selectedItemID)} id="Type-ElevatedBtn">
                                    <option value="mdc-button--raised">Elevated Button</option>
                                    <option value="mdc-button--outlined">Outline Button</option>
                                    <option value="">Text Button</option>
                                </select>
                            </td>
                            <td><div class="box2"><div class="textDesc" >Button Type</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box"><div class="textDesc">backgroud Color</div></div></td>
                        </tr>
                        <tr>
                            <AutoComplete items={Mat_Colors} bind:selectedItem={elevatedButton.backgroudColor} />
                           
                            {#if selectedColor == elevatedButton.backgroudColor }
                            {handleChangeBGCElvatedBtn(elevatedButton)|| ""}
                            <div></div>
                            {/if}
                        </tr>
                        <tr>
                            <td>
                                <!-- svelte-ignore a11y-no-onchange -->
                                <select on:change={handleSetTextTransformElevatedBtn(selectedItemID)} id="text-Transform-El-Btn">
                                    <option value="uppercase">uppercase</option>
                                    <option value="lowercase">lowercase</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box"><div class="textDesc">text Transform</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2"><div class="textDesc">Text Color</div></div></td>
                        </tr>
                        <tr>
                            <AutoComplete items={Mat_Colors} bind:selectedItem={elevatedButton.textColor}  />
                           
                            {#if selectedColor == elevatedButton.textColor }
                            {handleChangeTextColorElvatedBtn(elevatedButton)|| ""}
                            <div></div>
                            {/if}
                        </tr>
                        <tr>
                            <td><div class="box"><div class="textDesc">Text</div></div></td>
                        </tr>
                        <tr>
                            <td><input type="text" id="Text-Content-ElevatedBtn" on:input={handleChangeTextContentElevatedBtn} bind:value={elevatedButton.btnContent}></td>
                        </tr>
                        <tr>

                            <td><div class="box2"><div class="textDesc" >left Icone</div></div></td>
                            <td> <div class={elevatedButton.haveLeftIcone==false ? "check" : "check1"} on:click={handleChangeHaveLeftIconeElevatedBtn} id="have-Left-icone-ElevatedBtn"></div></td>
                        </tr>
                        <tr>
                            <td><span>Icone Name : </span><input type="text" id="Left-Icone-ElevatedBtn" on:input={handleChangeLeftIconeElevatedBtn} disabled ={!elevatedButton.haveLeftIcone} bind:value={elevatedButton.leftIcone}></td>
                        </tr>



                        <!-- <tr>
                            <td><div class="box2"><div class="textDesc" >Right Icone</div></div></td>
                            <td> <div class={elevatedButton.haveRightIcone==false ? "check" : "check1"} on:click={handleChangeHaveRightIconeElevatedBtn} id="have-Right-icone-ElevatedBtn"></div></td>
                        </tr>
                        <tr>
                            <td><span>Icone Name : </span><input type="text" id="Right-Icone-ElevatedBtn" on:input={handleChangeRightIconeElevatedBtn} disabled ={!elevatedButton.haveRightIcone} bind:value={elevatedButton.rightIcone}></td>
                        </tr> -->


                        
                        <!-- <tr>
                            <td><div class="box"><div class="textDesc">Elevation</div></div></td>
                        </tr> -->
                        <tr>
                            <td><div class="box2"><span class="textDesc">Min width</span> <input type="number" on:input={handleChangeMinWidthElevatedBtn} bind:value={elevatedButton.minWidth} id="Min-Width-ElevatedBtn"></div></td>
                        </tr>
                        <!-- <tr>
                            <td><div class="box2"><span class="textDesc">Max width</span> <input type="number" on:input={handleChangeMaxWidthElevatedBtn} bind:value={elevatedButton.maxWidth} id="Max-Width-ElevatedBtn"></div></td>
                        </tr> -->
                        <tr>
                            <td><div class="box2"><span class="textDesc">Min height</span> <input type="number" on:input={handleChangeMinHeightElevatedBtn} bind:value={elevatedButton.minHeight} id="Min-Height-ElevatedBtn"></div></td>
                        </tr>
                        <!-- <tr>
                            <td><div class="box2"><span class="textDesc">Max height</span> <input type="number" on:input={handleChangeMaxHeightElevatedBtn} bind:value={elevatedButton.maxHeight} id="Max-Height-ElevatedBtn"></div></td>
                        </tr> -->
                        <!-- <tr>
                            <td><div class="box2"><span class="textDesc">Fixed width</span> <input type="number" on:input={handleChangeFixedWidthElevatedBtn} bind:value={elevatedButton.fixedWidth} id="Fixed-Height-ElevatedBtn"></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2"><span class="textDesc">Fixed height</span> <input type="number" on:input={handleChangeFixedHeightElevatedBtn} bind:value={elevatedButton.fixedHeight} id="Fixed-Height-ElevatedBtn"></div></td>
                        </tr> -->
                        <tr>
                            <td><div class="box2"><div class="textDesc" >Shadow </div></div></td>
                            <td> <div class={elevatedButton.shadowColor==false ? "check" : "check1"} on:click={handleChangeShadowElevatedBtn} id="Shadow-ElevatedBtn"></div></td>
                        </tr>
                        <!-- <tr>
                            <td><div class="box"><div class="textDesc">Allignment</div></div></td>
                        </tr> -->
                        <!-- <tr>
                            <td><div class="box2"><div class="textDesc">Padding</div></div></td>
                        </tr> -->
                        <!-- <tr>
                            <td><div class="box"><div class="textDesc">Text Style</div></div></td>
                        </tr> -->
                        <!-- <tr>
                            <td><div class="box2"><div class="textDesc">Visual Density</div></div></td>
                        </tr> -->
                        <!-- <tr>
                            <td><div class="box"><div class="textDesc">Enable Feedback</div></div></td>
                        </tr> -->
                    </table>
                    <br>
                    <center>Functions</center>
                    <br>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td><div class="box2"><span class="textDesc">On pressed</span> <input type="text" on:input={handleChangeOnPressedElevatedBtn} bind:value={elevatedButton.onPressed} id="On-Pressed-ElevatedBtn"></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2"><span class="textDesc">On Long pressed</span> <input type="text" on:input={handleChangeOnLongPressedElevatedBtn} bind:value={elevatedButton.onLongPressed} id="On-Long-Pressed-ElevatedBtn"></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2"><div class="textDesc" >Auto Focus</div></div></td>
                            <td> <div class={elevatedButton.autoFocus==false ? "check" : "check1"} on:click={handleChangeAutoFocusElevatedBtn} id="Auto-focus-ElevatedBtn"></div></td>
                        </tr>
                        <!-- <tr>
                            <td><div class="box2"><div class="textDesc" >Mouse Cursor</div></div></td>
                            <td> <div class={elevatedButton.mouseCursor==false ? "check" : "check1"} on:click={handleChangeMouseCursorElevatedBtn} id="Mouse-Cursor-ElevatedBtn"></div></td>
                        </tr> -->
                    </table>
                    
                    {:else if (selectedItemName === "text")}
                    <div class="center-fine-text">Text</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td><div class="box"><div class="textDesc" style="flex:3;">background Color</div> <AutoComplete items={Mat_Colors} bind:selectedItem={textb.backgroundColor} style="flex:1;"/>
                       
                            {#if selectedColor == textb.backgroundColor }
                            {handleChangeBGCText(textb)|| ""}
                            <div></div>
                            {/if}</div></td>
                    </tr>
                    <tr>
                       
                    </tr>
                    <tr>
                        <td><div class="box2"><div class="textDesc">Text Color</div>  <AutoComplete items={Mat_Colors} bind:selectedItem={textb.textColor}  style="flex:3;" />
                       
                            {#if selectedColor == textb.textColor }
                            {handleChangeTextColor(textb)|| ""}
                            <div></div>
                            {/if}</div></td>
                    </tr>
                    <tr>
                       
                    </tr>
                    <tr>
                        <td><div class="box"><span class="textDesc">Font  &nbsp;</span> <input type="text" on:input={handleChangeFontText} bind:value={textb.font} id="Font-Text" style="flex:3;"></div></td>
                    </tr>
                    <tr>
                        <td><div class="box2"><span class="textDesc">Font Size &nbsp;</span> <input type="number" min="0" on:input={handleChangeFontSizeText} bind:value={textb.fontSize} id="Font-Size-Text" style="flex:3;"></div></td>
                    </tr>
                    <tr>
                        <td><div class="box"><span class="textDesc">Letter-spacing &nbsp;</span> <input type="number" min="0" on:input={handleChangeLetterSpacingText} bind:value={textb.letterSpacing} id="Letter-Spacing-Text" style="flex:3;"></div></td>
                    </tr>
                    <tr>
                        <td><div class="box2"><span class="textDesc">Word-Spacing &nbsp;</span> <input type="number" min="0" on:input={handleChangeWordSpacingText} bind:value={textb.wordSpacing} id="Word-Spacing-Text"  style="flex:3;"></div></td>
                    </tr>

                    <tr>
                        <td><div class="box"><span class="textDesc">Text &nbsp;</span> <input type="text"  on:input={handleChangeTextContent} bind:value={textb.textContent} id="Text-Content"  style="flex:3;" ></div></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="box2">
                                <div class="textDesc" >Bold &nbsp;</div>
                                    <!-- svelte-ignore a11y-no-onchange -->
                            <select on:change={handleChangeBoldText(selectedItemID)} id="Bold-Text" style="flex:3;">
                                <option value="normal">Normal</option>
                                <option value="bold">Bold</option>
                            </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="box">
                                <div class="textDesc" >Italics </div>
                                   <!-- svelte-ignore a11y-no-onchange -->
                                   <select on:change={handleChangeItalicText(selectedItemID)} id="Italics-Text" style="flex:3;">
                                    <option value="normal">Normal</option>
                                    <option value="italic">Italics</option>
                                </select>
                                <br>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="box2">
                                <div class="textDesc" >Text Decoration </div>
                                   <!-- svelte-ignore a11y-no-onchange -->
                                   <select on:change={handleChangeDecorationText(selectedItemID)} id="Decoration-Text" style="flex:3;">
                                    <option value="none">None</option>
                                    <option value="line-through">line-through</option>
                                    <option value="underline">underline</option>
                                    <option value="overline">overline</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    
                    </table>
                    {:else if selectedItemName==="SizedBox"}
                    <div class="center-fine-text">Sized Box</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td><div class="box"><span class="textDesc">Width &nbsp;</span> <input type="number" min="1" on:input={handleChangeWidthSizedBox} bind:value={sizedBox.widthSizedBox} id="Width-SizedBox"  style="flex:3;" ></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2"><span class="textDesc">Height &nbsp;</span> <input type="number" min="1" on:input={handleChangeHeightSizedBox} bind:value={sizedBox.heightSizedBox} id="Height-SizedBox"  style="flex:3;" ></div></td>
                        </tr>
                    </table>
                    {:else if selectedItemName==="container"}
                    <div class="center-fine-text">Container</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td><div class="box"><span class="textDesc">Width &nbsp;</span> <input type="number" min="1" on:input={handleChangeWidthContainer} bind:value={container.containerWidth} id="Width-Container"  style="flex:3;" ></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2"><span class="textDesc">Height &nbsp;</span> <input type="number" min="1" on:input={handleChangeHeightContainer} bind:value={container.containerHeight} id="Height-Container"  style="flex:3;" ></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2"><div class="textDesc">Background Color</div>  <AutoComplete items={Mat_Colors} bind:selectedItem={container.Color}  style="flex:3;" />
                           
                                {#if selectedColor == container.Color }
                                {handleChangeContainerBGC(container)|| ""}
                                <div></div>
                                {/if}</div></td>
                        </tr>
                        <!-- ****************************************************Padding********************************************************** -->
                        <tr>
                            <td style={"left:0;"}><div class="box"><div class="textDesc">Padding LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangePaddingLeftContainer} bind:value={container.paddingL} id="Padding-Left-Container"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangePaddingTopContainer} bind:value={container.paddingT} id="Padding-Top-Container"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangePaddingRightContainer} bind:value={container.paddingR} id="Padding-Right-Container"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangePaddingBottomContainer} bind:value={container.paddingB} id="Padding-Bottom-Container"style={"flex:6;"}>
                            </td>
                        </tr>
<!-- *********************************************Margin*************************************************** -->
                        <tr>
                            <td><div class="box"><div class="textDesc">Margin LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangeMarginLeftContainer} bind:value={container.marginL} id="Margin-Left-Container"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangeMarginTopContainer} bind:value={container.marginT} id="Margin-Top-Container"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangeMarginRightContainer} bind:value={container.marginR} id="Margin-Right-Container"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangeMarginBottomContainer} bind:value={container.marginB} id="Margin-Bottom-Container"style={"flex:6;"}>
                            </td>
                        </tr>
                    </table>
                    {:else if selectedItemName==="listview"}
                    <div class="center-fine-text">List View</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <div class="box2">
                                <div class="textDesc" >Direction  </div>
                                   <!-- svelte-ignore a11y-no-onchange -->
                                   <select on:change={handleChangeDirectionListView(selectedItemID)} id="Direction-List-View" style="flex:3;">
                                    <option value="column">vertical</option>
                                    <option value="row">horizontal</option>
                                </select>
                            </div>
                        </tr>
                        <!-- ****************************************************Padding********************************************************** -->
                        <tr>
                            <td style={"left:0;"}><div class="box"><div class="textDesc">Padding LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangePaddingLeftListView} bind:value={listview.paddingL} id="Padding-Left-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangePaddingTopListView} bind:value={listview.paddingT} id="Padding-Top-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangePaddingRightListView} bind:value={listview.paddingR} id="Padding-Right-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangePaddingBottomListView} bind:value={listview.paddingB} id="Padding-Bottom-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
<!-- *********************************************Margin*************************************************** -->
                        <tr>
                            <td><div class="box"><div class="textDesc">Margin LTRB :</div></div></td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Left:</span><input type="number" on:input={handleChangeMarginLeftListView} bind:value={listview.marginL} id="Margin-Left-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Top:</span><input type="number" on:input={handleChangeMarginTopListView} bind:value={listview.marginT} id="Margin-Top-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Right:</span><input type="number" on:input={handleChangeMarginRightListView} bind:value={listview.marginR} id="Margin-Right-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
                        <tr>
                            <td><div class="box2">
                              <span style={"flex:2;"}>Bottom:</span><input type="number" on:input={handleChangeMarginBottomListView} bind:value={listview.marginB} id="Margin-Bottom-ListView"style={"flex:6;"}>
                            </td>
                        </tr>
                    </table>
                    {:else if selectedItemName==="expand"}
                    <div class="center-fine-text">expand</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                       
                    </table>
                    {:else if selectedItemName==="center"}
                    <div class="center-fine-text">Center</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                       
                    </table>
                    {:else if selectedItemName==="networkImage"}
                    <div class="center-fine-text">Network Image</div>
                    <br>
                    <div class="center-fine-text">ID : {selectedItemID}</div>
                    <br>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <div class="box2">
                                <div class="textDesc" >Box Fit </div>
                                   <!-- svelte-ignore a11y-no-onchange -->
                                   <select on:change={handleChangeBoxFitImage(selectedItemID)} id="Box-Fit" style="flex:3;">
                                    <option value="None">None</option>
                                    <option value="fill">fill</option>
                                    <option value="contain">contain</option>
                                    <option value="cover">cover</option>
                                    <option value="scale-down">scale-down</option>
                                </select>
                            </div>
                        </tr>
                        <tr>
                            <td><div class="box"><span class="textDesc">Path  &nbsp;</span> <input type="text" on:input={handleChangePathImage} bind:value={networkImage.path} id="Path-Image" style="flex:3;"></div></td>
                        </tr>
                    </table>
                    {/if}
                    
                </div>
            </div>
        </div>
        <Tabs {activeItem} {items} on:tabChange={tabChange} />
        {#if activeItem === 'Design'}
        <div class="col-6">
            {#if navbarCheck== true}
             <div class="top-app" >
                    
                          <TopAppBar
                            variant="static"
                            {prominent}
                            {dense}
                            color={secondaryColor ? 'secondary' : 'primary'}
                          >
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
                {/if}
            <div class="anchor" on:drop={handleDragDrop}
                on:click={handleCreateIN} 
                id="drop_zone" 
                ondragover="return false" 
                style={"background-color:"+scafold.backgroundColor+";"} >
               
                <div class="test" id="drop_zone">
                    
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <!-- <img src='https://drive.google.com/uc?export=view&id=0B6wwyazyzml-OGQ3VUo0Z2thdmc'> -->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <!-- <img src="./lol.jpg"> -->
                        <Anchor children={treeWidget} on:GetIDAndNameItem={handleGetIDNameItem}   on:dropItem={handleDROP}  bind:MainAxesAlignment={Column_MainAxesAlignment} {UniqueId} on:test={del}/>
                        
                    </div>
            </div>
        </div>
        {:else if activeItem === 'Code'}
            <Code bind:children={treeWidget} ></Code>
        {/if}
        <div class="col-3">
            <div class="rightSideBar">
                <div class="col-8 container1">
                    <div class="center-fine-text">Components</div>
                    <div class="components">
                        <div class="one-component" id="Item1" on:click={collapse}>
                            <div  class="text-components">Basic Widget</div>
                            <Icon  class="material-icons" >{icon1}</Icon>
                        </div>
                        {#if k == -1}
                        <div class="inside-component">
                            <div  class="second-component" id="button" on:dragstart={handleDragStart} draggable=true>
                                <div class="text-components">Button</div>
                                <Icon class="material-icons" name ="Item" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <!-- <div class="second-component" id="image" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components">Image</div>
                                <Icon class="material-icons" name ="Image" on:click={handleCreateByClick}>add</Icon>
                            </div> -->
                            <div  class="second-component" id="SizedBox" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components">Sized Box</div>
                                <Icon class="material-icons" name ="SizedBox" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <div  class="second-component" id="text" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components">Text</div>
                                <Icon class="material-icons" name ="text" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <div  class="second-component" id="networkImage" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components">Network Image</div>
                                <Icon class="material-icons" name ="networkImage" on:click={handleCreateByClick}>add</Icon>
                            </div>
                        </div>
                            {/if}
                            <div class="one-component" id="Item2" on:click={collapse1}>
                                <div class="text-components">Layout Widget</div>
                                <Icon class="material-icons">{icon2}</Icon>
                            </div>
                        {#if k1 == -1}
                        <div class="inside-component">
                            <div  class="second-component" id="column" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components">Column</div>
                                <Icon class="material-icons" name ="Column" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <div class="second-component" id="row" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components">Row</div>
                                <Icon class="material-icons" name ="Row" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <div  class="second-component" id="container" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components" >Container</div>
                                <Icon class="material-icons" name ="ListView" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <div  class="second-component" id="center" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components" >Center</div>
                                <Icon class="material-icons" name ="center" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <div  class="second-component" id="expand" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components" >Expand</div>
                                <Icon class="material-icons" name ="expand" on:click={handleCreateByClick}>add</Icon>
                            </div>
                            <div  class="second-component" id="listview" on:dragstart={handleDragStart} draggable=true >
                                <div class="text-components" >List View</div>
                                <Icon class="material-icons" name ="listview" on:click={handleCreateByClick}>add</Icon>
                            </div>
                        </div>
                        {/if}
                    </div>
                    <div class="col-12 container1-tree">
                        <div class="center-fine-text">Project Structure </div>
                        <div class="sized-box"></div>
                        <WidgetTree on:dropItem={handleDROP} name="Scafold" id="null" children={treeWidget} {draggedItemID} expanded/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
import AutoComplete from "simple-svelte-autocomplete";
import Code from "./shared/Code.svelte" ;
let prominent = false;
  let dense = false;
  let secondaryColor = false;
import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

/****************************************************************************Paddins And Margins****************************************************************************************/

/*************************Padding-left-ListView ****************************/
const handleChangePaddingLeftListView = () => {
listview.paddingL = document.getElementById("Padding-Left-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.paddingL = listview.paddingL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-ListView ****************************/
const handleChangePaddingTopListView = () => {
listview.paddingT = document.getElementById("Padding-Top-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.paddingT = listview.paddingT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-ListView ****************************/
const handleChangePaddingRightListView = () => {
listview.paddingR = document.getElementById("Padding-Right-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.paddingR = listview.paddingR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-ListView ****************************/
const handleChangePaddingBottomListView = () => {
listview.paddingB = document.getElementById("Padding-Bottom-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.paddingB = listview.paddingB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------

/*************************Padding-left-ListView ****************************/
const handleChangeMarginLeftListView = () => {
listview.marginL = document.getElementById("Margin-Left-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.marginL = listview.marginL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-ListView ****************************/
const handleChangeMarginTopListView = () => {
listview.marginT = document.getElementById("Margin-Top-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.marginT = listview.marginT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-ListView ****************************/
const handleChangeMarginRightListView = () => {
listview.marginR = document.getElementById("Margin-Right-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.marginR = listview.marginR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-ListView ****************************/
const handleChangeMarginBottomListView = () => {
listview.marginB = document.getElementById("Margin-Bottom-ListView").value;
widget.forEach(w =>{
        if(w.id == listview.id){
            w.marginB = listview.marginB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------






/*************************Padding-left-Container ****************************/
const handleChangePaddingLeftContainer = () => {
container.paddingL = document.getElementById("Padding-Left-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.paddingL = container.paddingL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Container ****************************/
const handleChangePaddingTopContainer = () => {
container.paddingT = document.getElementById("Padding-Top-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.paddingT = container.paddingT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Container ****************************/
const handleChangePaddingRightContainer = () => {
container.paddingR = document.getElementById("Padding-Right-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.paddingR = container.paddingR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-Container ****************************/
const handleChangePaddingBottomContainer = () => {
container.paddingB = document.getElementById("Padding-Bottom-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.paddingB = container.paddingB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------

/*************************Padding-left-Container ****************************/
const handleChangeMarginLeftContainer = () => {
container.marginL = document.getElementById("Margin-Left-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.marginL = container.marginL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Container ****************************/
const handleChangeMarginTopContainer = () => {
container.marginT = document.getElementById("Margin-Top-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.marginT = container.marginT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Container ****************************/
const handleChangeMarginRightContainer = () => {
container.marginR = document.getElementById("Margin-Right-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.marginR = container.marginR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-Container ****************************/
const handleChangeMarginBottomContainer = () => {
container.marginB = document.getElementById("Margin-Bottom-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.marginB = container.marginB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------








/*************************Padding-left-Row ****************************/
const handleChangePaddingLeftRow = () => {
row.paddingL = document.getElementById("Padding-Left-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.paddingL = row.paddingL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Row ****************************/
const handleChangePaddingTopRow = () => {
row.paddingT = document.getElementById("Padding-Top-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.paddingT = row.paddingT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Row ****************************/
const handleChangePaddingRightRow = () => {
row.paddingR = document.getElementById("Padding-Right-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.paddingR = row.paddingR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-Row ****************************/
const handleChangePaddingBottomRow = () => {
row.paddingB = document.getElementById("Padding-Bottom-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.paddingB = row.paddingB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------

/*************************Padding-left-Row ****************************/
const handleChangeMarginLeftRow = () => {
row.marginL = document.getElementById("Margin-Left-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.marginL = row.marginL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Row ****************************/
const handleChangeMarginTopRow = () => {
row.marginT = document.getElementById("Margin-Top-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.marginT = row.marginT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Row ****************************/
const handleChangeMarginRightRow = () => {
row.marginR = document.getElementById("Margin-Right-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.marginR = row.marginR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-Row ****************************/
const handleChangeMarginBottomRow = () => {
row.marginB = document.getElementById("Margin-Bottom-Row").value;
widget.forEach(w =>{
        if(w.id == row.id){
            w.marginB = row.marginB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------










/*************************Padding-left-Column ****************************/
const handleChangePaddingLeftColumn = () => {
column.paddingL = document.getElementById("Padding-Left-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.paddingL = column.paddingL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Column ****************************/
const handleChangePaddingTopColumn = () => {
column.paddingT = document.getElementById("Padding-Top-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.paddingT = column.paddingT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Column ****************************/
const handleChangePaddingRightColumn = () => {
column.paddingR = document.getElementById("Padding-Right-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.paddingR = column.paddingR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-Column ****************************/
const handleChangePaddingBottomColumn = () => {
column.paddingB = document.getElementById("Padding-Bottom-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.paddingB = column.paddingB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------

/*************************Padding-left-Column ****************************/
const handleChangeMarginLeftColumn = () => {
column.marginL = document.getElementById("Margin-Left-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.marginL = column.marginL;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Column ****************************/
const handleChangeMarginTopColumn = () => {
column.marginT = document.getElementById("Margin-Top-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.marginT = column.marginT;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-top-Column ****************************/
const handleChangeMarginRightColumn = () => {
column.marginR = document.getElementById("Margin-Right-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.marginR = column.marginR;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************Padding-bottom-Column ****************************/
const handleChangeMarginBottomColumn = () => {
column.marginB = document.getElementById("Margin-Bottom-Column").value;
widget.forEach(w =>{
        if(w.id == column.id){
            w.marginB = column.marginB;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*********************************************************************** END Paddins And Margins END ***********************************************************************************/
//********************direction List View*********************/
const handleChangeDirectionListView = (id) => {
    listview.scrollDirection = document.getElementById("Direction-List-View").value;

    widget.forEach(w =>{
            if(w.id == id){
                w.scrollDirection = listview.scrollDirection;
            }
            treeWidget = list_to_tree(widget);
        });
}
//-------------------------------------------------------
/*************************Image  Path ****************************/
const handleChangePathImage = () => {
networkImage.path = document.getElementById("Path-Image").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.path = networkImage.path;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
//********************Box fit image*********************/
const handleChangeBoxFitImage = (id) => {
    networkImage.boxfit = document.getElementById("Box-Fit").value;

    widget.forEach(w =>{
            if(w.id == id){
                w.boxfit = networkImage.boxfit;
            }
            treeWidget = list_to_tree(widget);
        });
}
//-------------------------------------------------------

/************************ Container BGC ****************************/
const handleChangeContainerBGC = (container) => {
    console.log("6363636363636363636"+container.Color);
    widget.forEach(w =>{
            if(w.id == container.id){
                w.Color = container.Color;
            }
            
            treeWidget = list_to_tree(widget);
        });
};
//-------------------------------------------------------------------
/*************************Container Width ****************************/
const handleChangeWidthContainer = () => {
container.containerWidth = document.getElementById("Width-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.containerWidth = container.containerWidth;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------

/*************************Container Height****************************/
const handleChangeHeightContainer = () => {
container.containerHeight = document.getElementById("Height-Container").value;
widget.forEach(w =>{
        if(w.id == container.id){
            w.containerHeight = container.containerHeight;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------

/****************************Italics text***************************/
const handleChangeDecorationText = (id) => {
   
   textb.textDecoration = document.getElementById("Decoration-Text").value;
   widget.forEach(w =>{
           if(w.id == id){
               w.textDecoration = textb.textDecoration;
           }
           treeWidget = list_to_tree(widget);
       });
};
//-------------------------------------------------------------------

/****************************Italics text***************************/
const handleChangeItalicText = (id) => {
   
    textb.italic = document.getElementById("Italics-Text").value;
    widget.forEach(w =>{
            if(w.id == id){
                w.italic = textb.italic;
            }
            treeWidget = list_to_tree(widget);
        });
};
//-------------------------------------------------------------------

/****************************Bold text***************************/
const handleChangeBoldText = (id) => {
    textb.bold = document.getElementById("Bold-Text").value;
    widget.forEach(w =>{
            if(w.id == id){
                w.bold = textb.bold;
            }
            treeWidget = list_to_tree(widget);
        });
};
//-------------------------------------------------------------------------------

/*************************Text Content****************************/
const handleChangeTextContent = () => {
textb.textContent = document.getElementById("Text-Content").value;
widget.forEach(w =>{
        if(w.id == textb.id){
            w.textContent = textb.textContent;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------


/*************************Letter Spacing Text****************************/
const handleChangeLetterSpacingText = () => {
textb.letterSpacing = document.getElementById("Letter-Spacing-Text").value;
widget.forEach(w =>{
        if(w.id == textb.id){
            w.letterSpacing = textb.letterSpacing;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------------------
/*************************word Spacing Text****************************/
const handleChangeWordSpacingText = () => {
textb.wordSpacing = document.getElementById("Word-Spacing-Text").value;
widget.forEach(w =>{
        if(w.id == textb.id){
            w.wordSpacing = textb.wordSpacing;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//---------------------------------------------------------------
/*************************Font Size Text****************************/
const handleChangeFontSizeText = () => {
textb.fontsize = document.getElementById("Font-Size-Text").value;
widget.forEach(w =>{
        if(w.id == textb.id){
            w.fontSize = textb.fontsize;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//---------------------------------------------------------------
/*************************Font Text****************************/
const handleChangeFontText = () => {
textb.font = document.getElementById("Font-Text").value;
widget.forEach(w =>{
        if(w.id == textb.id){
            w.font = textb.font;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//---------------------------------------------------------------
/*************************text Color Text****************************/
const handleChangeTextColor = (text) => {
    widget.forEach(w =>{
            if(w.id == text.id){
                w.textColor = text.textColor;
            }
            
            treeWidget = list_to_tree(widget);
        });
};
//--------------------------------------------------------------------------
/*************************Background Color Text****************************/
const handleChangeBGCText = (text) => {
    widget.forEach(w =>{
            if(w.id == text.id){
                w.backgroundColor = text.backgroundColor;
            }
            
            treeWidget = list_to_tree(widget);
        });
};
//--------------------------------------------------------------------------
/************************Fixed width ElevatedBtn**********************/
const handleChangeWidthSizedBox = () => {
    sizedBox.widthSizedBox = document.getElementById("Width-SizedBox").value;
widget.forEach(w =>{
        if(w.id == sizedBox.id){
            w.widthSizedBox = sizedBox.widthSizedBox;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//--------------------------------------------------------------------

/************************Fixed width ElevatedBtn**********************/
const handleChangeHeightSizedBox = () => {
    sizedBox.heightSizedBox = document.getElementById("Height-SizedBox").value;
widget.forEach(w =>{
        if(w.id == sizedBox.id){
            w.heightSizedBox = sizedBox.heightSizedBox;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//--------------------------------------------------------------------

/****************************type ElevatedBtn***************************/

const handleChangeTypeElevatedBtn = (id) => {
    elevatedButton.btnType = document.getElementById("Type-ElevatedBtn").value;

    widget.forEach(w =>{
            if(w.id == elevatedButton.btnType){
                w.btnType = elevatedButton.btnType;
            }
            
            treeWidget = list_to_tree(widget);
        });
}

//-----------------------------------------------------------------------
/****************************Auto Focus ElevatedBtn***************************/
const handleChangeAutoFocusElevatedBtn = () => {
    elevatedButton.autoFocus = !elevatedButton.autoFocus;
    widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.autoFocus = elevatedButton.autoFocus;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-------------------------------------------------------------------------------
/****************************Shadow ElevatedBtn***************************/
const handleChangeShadowElevatedBtn = () => {

    if(elevatedButton.shadowColor===""){
        elevatedButton.shadowColor = "none";
    }else{
        elevatedButton.shadowColor = "";
    }
    
    widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.shadowColor = elevatedButton.shadowColor;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-------------------------------------------------------------------------------
/****************************Auto Focus ElevatedBtn***************************/
const handleChangeMouseCursorElevatedBtn = () => {
    elevatedButton.mouseCursor = !elevatedButton.mouseCursor;
    widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.mouseCursor = elevatedButton.mouseCursor;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-------------------------------------------------------------------------------
/****************************On Pressed ElevatedBtn***************************/
const handleChangeOnPressedElevatedBtn = () => {
elevatedButton.onPressed = document.getElementById("On-Pressed-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.onPressed = elevatedButton.onPressed;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-------------------------------------------------------------------------------
/****************************On Long Pressed ElevatedBtn***************************/
const handleChangeOnLongPressedElevatedBtn = () => {
elevatedButton.onLongPressed = document.getElementById("On-Long-Pressed-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.onLongPressed = elevatedButton.onLongPressed;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-------------------------------------------------------------------------------
/************************Fixed width ElevatedBtn**********************/
const handleChangeFixedWidthElevatedBtn = () => {
elevatedButton.fixedWidth = document.getElementById("Fixed-Width-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.fixedWidth = elevatedButton.fixedWidth;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//--------------------------------------------------------------------
/************************Fixed Height ElevatedBtn**********************/
const handleChangeFixedHeightElevatedBtn = () => {
elevatedButton.fixedHeight = document.getElementById("Fixed-Heigth-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.fixedHeight = elevatedButton.fixedHeight;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//--------------------------------------------------------------------
/*********************Min Width ElevatedBtn************************/
const handleChangeMinWidthElevatedBtn = () => {
elevatedButton.minWidth = document.getElementById("Min-Width-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.minWidth = elevatedButton.minWidth;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//----------------------------------------------------------------
/*********************Max Width ElevatedBtn************************/
const handleChangeMaxWidthElevatedBtn = () => {
    console.log("x min width")
elevatedButton.maxWidth = document.getElementById("Max-Width-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.maxWidth = elevatedButton.maxWidth;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//----------------------------------------------------------------
/*********************Min Height ElevatedBtn************************/
const handleChangeMinHeightElevatedBtn = () => {
elevatedButton.minHeight = document.getElementById("Min-Height-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.minHeight = elevatedButton.minHeight;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//----------------------------------------------------------------
/*********************max Height ElevatedBtn************************/
const handleChangeMaxHeightElevatedBtn = () => {
elevatedButton.maxHeight = document.getElementById("Max-Height-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.maxHeight = elevatedButton.maxHeight;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//----------------------------------------------------------------
/********************Right Icone ElevatedBtn********************/
const handleChangeHaveRightIconeElevatedBtn = () => {
    elevatedButton.haveRightIcone = !elevatedButton.haveRightIcone;
    widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.haveRightIcone = elevatedButton.haveRightIcone;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
const handleChangeRightIconeElevatedBtn = () => {
elevatedButton.rightIcone = document.getElementById("left-Icone-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.rightIcone = elevatedButton.rightIcone;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//--------------------------------------------------------------

/**************left Icone ElvatedBtn***************/
const handleChangeHaveLeftIconeElevatedBtn = () => {
    elevatedButton.haveLeftIcone = !elevatedButton.haveLeftIcone;
    widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.haveLeftIcone = elevatedButton.haveLeftIcone;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
const handleChangeLeftIconeElevatedBtn = () => {
elevatedButton.leftIcone = document.getElementById("left-Icone-ElevatedBtn").value;
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.leftIcone = elevatedButton.leftIcone;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//----------------------------------------------
/*******************Text Content ElevatedBtn******************/
const handleChangeTextContentElevatedBtn = () =>{
   
    elevatedButton.btnContent = document.getElementById("Text-Content-ElevatedBtn").value;
    console.log("kkk for eveer "+elevatedButton.btnContent);
widget.forEach(w =>{
        if(w.id == elevatedButton.id){
            w.btnContent = elevatedButton.btnContent;
        }
        
        treeWidget = list_to_tree(widget);
    });
};
//-----------------------------------------------------------
//********************Text Transform ElevatedBtn*********************/
const handleSetTextTransformElevatedBtn = (id) => {
    elevatedButton.upperCase = document.getElementById("text-Transform-El-Btn").value;

    widget.forEach(w =>{
            if(w.id == id){
                w.upperCase = elevatedButton.upperCase;
            }
            
            treeWidget = list_to_tree(widget);
        });
}
//-------------------------------------------------------
/*******************Text Color elevatedBtn********************/
const handleChangeTextColorElvatedBtn = () => {
    widget.forEach(w =>{
            if(w.id == elevatedButton.id){
                w.textColor = elevatedButton.textColor;
            }
            
            treeWidget = list_to_tree(widget);
        });
};
//------------------------------------------------------------
/*********************BackGround Color ElevatedBtn********************/
let selectedColor="";
$:{
    selectedColor =  elevatedButton.backgroudColor
}
$:{
    selectedColor =  textb.backgroundColor
}
$:{
    selectedColor =  container.Color;
}
const handleChangeBGCElvatedBtn = (elevatedButton) => {
    widget.forEach(w =>{
            if(w.id == elevatedButton.id){
                w.backgroudColor = elevatedButton.backgroudColor;
            }
            
            treeWidget = list_to_tree(widget);
        });
};
let elevatedButton ="" ;
let sizedBox = "" ;
let textb ="";
let container="";
let listview ="";
let networkImage ="";
let center ="";
let expand="";
let row ="";
let column ="";
//-----------------------------------------------------------------
const handleGetIDNameItem = (e) => {
    selectedItemID = e.detail.id;
    selectedItemName = e.detail.name;
    console.log("/*******/"+selectedItemID);
    if(selectedItemName=="Item"){
        elevatedButton = widget.find(x => x.id === selectedItemID);
        console.log(elevatedButton);
    }
    else if(selectedItemName=="SizedBox"){
        sizedBox = widget.find(x => x.id === selectedItemID);
        console.log(sizedBox.widthSizedBox);
    }
    else if(selectedItemName=="text"){
        textb = widget.find(x => x.id === selectedItemID);
        console.log("the text background is " + textb.backgroundColor);
    }else if(selectedItemName=="container"){
        container = widget.find(x => x.id === selectedItemID);
        console.log(container);
    } else if(selectedItemName=="listview"){
        listview = widget.find(x => x.id === selectedItemID);
        console.log(listview);
    }else if(selectedItemName=="networkImage"){
        networkImage = widget.find(x => x.id === selectedItemID);
        console.log(networkImage);
    }else if(selectedItemName=="center"){
        center = widget.find(x => x.id === selectedItemID);
        console.log(center);
    }else if(selectedItemName=="expand"){
        expand = widget.find(x => x.id === selectedItemID);
        console.log(expand);
    }else if(selectedItemName=="Row"){
        row = widget.find(x => x.id === selectedItemID);
        console.log(row);
    }else if(selectedItemName=="Column"){
        column = widget.find(x => x.id === selectedItemID);
        console.log(column);
    }
    
    
    console.log("the id is : "+ selectedItemID + " the name is : "+selectedItemName);
};

    //----------------------------------------------------
    // let test 
    // let ButtonID = "n"
    // const handleGetIdItem = (e) => {
    // console.log("id name id : "+ e.detail.name)
    // ButtonID =   e.detail.id
    // };
    //----------------------------------------------------
 /*change column Props*/ 
 let Column_MainAxesAlignment;
 let Column_CrossAxesAlignment;
 let Column_MainAxesSize;
const handleGetMainAxesAlignment = (selectedItemID) => {
    Column_MainAxesAlignment = document.getElementById("Column_MainAxesAlignment").value;
    console.log("i am good !! "+ Column_MainAxesAlignment );
    widget.forEach(w =>{
            if(w.id == selectedItemID){
                w.MainAxesAlignment = Column_MainAxesAlignment;
            }
            
            treeWidget = list_to_tree(widget);
        });
};

const handleGetCrossAxesAlignment = (selectedItemID) => {
    Column_CrossAxesAlignment = document.getElementById("Column_CrossAxesAlignment").value;
    console.log("i am good !! "+ Column_CrossAxesAlignment );

    widget.forEach(w =>{
            if(w.id == selectedItemID){
                w.CrossAxesAlignment = Column_CrossAxesAlignment;
            }
            
            treeWidget = list_to_tree(widget);
        });
};

const handleGetMainAxesSize = (selectedItemID) => {
    Column_MainAxesSize = document.getElementById("Column_MainAxesSize").value;
    console.log("i am good !! "+ Column_MainAxesSize );

    widget.forEach(w =>{
            if(w.id == selectedItemID){
                w.MainAxesSize = Column_MainAxesSize;
            }
            
            treeWidget = list_to_tree(widget);
        });
};
 /*END change coluln Props*/
/***********************IMPORTS**************************/
let selectedItemID="" ;
let selectedItemName ;
const handleIsPromo = (e) => {
   selectedItemID = e.detail.id;
   selectedItemName = e.detail.name;
    console.log("ghghgghghggghghghggghg" + selectedItemID);
   var __FOUND = widget.find(function(w, index) {
	if(w.id == selectedItemID )
		return true;
});

// On success __FOUND will contain the complete element (an object)
// On failure it will contain undefined  

};


/******************Update Table after Dran And Drop************************/
	function handleDROP(e) {
        var parentID;
        var childID;
		console.log('handleMessage in parent: ', e.detail.drop);
        console.log('xhild is: ', e.detail.drag);
        parentID = e.detail.drop;
        childID = e.detail.drag
        widget.forEach(w =>{
            if(w.id == childID){
                w.parentId = parentID;
                treeWidget = list_to_tree(widget);
            }
        });
	}
import {Label, Icon} from '@smui/common';
import WidgetTree from "./shared/widgetTree.svelte";
import Anchor from "./shared/Anchor.svelte";
import Tabs from './shared/Tabs.svelte';
/***********************END IMPORTS END**************************/
  import {  Checkbox,   MaterialApp } from 'svelte-materialify';
  import { AppBar, Button, Menu, ListItem} from 'svelte-materialify';
  let collapsed = false;
//--------------------
let draggedItemID
/***********************Variables*************************/

let widget = [];
let treeWidget = [];
let dropped = [];
let items = ['Code', 'Design'];
let activeItem = 'Design';
let targetID = null;
var navbarCheck = false;
var navBotbarCheck = false;
let UniqueId;
                /**********************Scafold*************************/
                        var scafold = {
                            id:"drop_zone",
                            parentId:"none",
                            type:"folder",
                            name:"Scafold",
                            children:null,
                            backgroundColor:"#FFFFFF",
                            showTopAppBar:false,
                            showBotAppbar:false,
                        };
                /**********************END Scafold END*************************/


/***********************END Variables END*************************/

/**************************Switch Code/Design***************************/
const tabChange = (e) =>{
    activeItem = e.detail
};
/**************************END Switch Code/Design END***************************/
const del = (e) => {
const o = e.detail;
console.log ("the id of the element to delete is  : "+o);

var index = widget.map(x => {
  return x.id;
}).indexOf(o);

widget.splice(index, 1);
console.log("object to delete : " + index);
treeWidget = list_to_tree(widget);
console.log(widget);
};
const App = (e) => {
document.getElementById(e.target.getAttribute('id')).style.visibility='hidden';
};

/*-----------get color from the picker of the scafold-------------*/
const handleGetScafoldColor = (e) => {
var scafoldBackgroundColor = e.target.value;
scafold.backgroundColor = scafoldBackgroundColor;
};
/*-----------END get color from the picker of the scafold END-------------*/


/*-----------set color of the scafold-------------*/
const handleHaveTopNavBar = (e) => {
    if(selectedItemID == scafold.id)
    {
        if(navbarCheck){
            document.getElementById("checkTopNavBar").style.backgroundColor= "#C4C4C4";
            navbarCheck = false;
        }else{
            document.getElementById("checkTopNavBar").style.backgroundColor= "#5ACEFF";
            navbarCheck = true;
        }
       
    }
};

const handleHaveBopNavBar = (e) => {
    if(selectedItemID == scafold.id)
    {
        if(navBotbarCheck){
            document.getElementById("checkBotNavBar").style.backgroundColor= "#C4C4C4";
            navBotbarCheck = false;
        }else{
            document.getElementById("checkBotNavBar").style.backgroundColor= "#5ACEFF";
            navBotbarCheck = true;
        }
    }
};
/*-----------END set color of the scafold END-------------*/


/**************************get id with click to Create******************************/


const handleCreateIN = (e) => {
    targetID = e.target.getAttribute('id');
    selectedItemID = targetID;
    if(selectedItemID == "drop_zone"){
        selectedItemName ="";
    }
    
    if(targetID=='drop_zone')
  {  widget.forEach(w =>{
                w.isPromo = e.detail.isPromo;
                treeWidget = list_to_tree(widget);
            
        });}
};
/***********************END get id with click to Create END**************************/


/************************** Create with click ******************************/
const handleCreateByClick = (e) =>{

        if(targetID == null){
            return
        }else{
            let UniqueId = Math.random();
            let column = {UniqueId:UniqueId,parentId:targetID,type:"folder",name:e.target.getAttribute('name'),children:null};
                    widget = [...widget,column];
                    treeWidget = list_to_tree(widget);
                    targetID = null;
        }
}
/**************************END Create with click END******************************/


/*************************Right side bare Items*************************/
    let k=1;
    let k1=1;
    let icon1="chevron_right";
    let icon2="chevron_right";
    const collapse = () =>{
        k=k*-1;
        if(k==1){
        document.getElementById('Item1').style.borderBottomLeftRadius=5;
        document.getElementById('Item1').style.borderBottomRightRadius=5;
        icon1="chevron_right"

        }else{
        document.getElementById('Item1').style.borderBottomLeftRadius=0;
        document.getElementById('Item1').style.borderBottomRightRadius=0;
        icon1="expand_more";
        }
    } 
    const collapse1 = () =>{
        k1=k1*-1;
        if(k1==1){
        document.getElementById('Item2').style.borderBottomLeftRadius=5;
        document.getElementById('Item2').style.borderBottomRightRadius=5;
        icon2="chevron_right"
        }else{
        document.getElementById('Item2').style.borderBottomLeftRadius=0;
        document.getElementById('Item2').style.borderBottomRightRadius=0;
        icon2="expand_more";
        }
    } 
    /***************************END Right side bare Items END***********************************/
    

/********************************Function convert the Flat List to a Tree List*********************************/
    function list_to_tree(list) {
        console.log("i am here now , i am :");
        var map = {}, node, roots = [], i;
        
        for (i = 0; i < list.length; i += 1) {
            map[list[i].id] = i; // initialize the map
            list[i].children = []; // initialize the children
        }
        
        for (i = 0; i < list.length; i += 1) {
            node = list[i];
            if (node.parentId !== "drop_zone") {
                console.log("parent node : "+list[map[node.parentId]]);
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parentId]].children.push(node);
            } else {
            roots.push(node);
            }
        }
        return roots;
    }
/********************************END Function convert the Flat List to a Tree List END*********************************/

/**********************Start Drag*************************/
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';
        console.log( "Unit 1 : "+e.target.getAttribute('id'));
        e.dataTransfer.setData("text", e.target.getAttribute('id'));
    }
/**********************END Start Drag END*************************/
    
    const handleDragDrop = (e) => {
            var x = e.clientX; 
            var y = e.clientY; 
            let el = document.elementFromPoint(x, y);
            //var files = [];
            console.log("parent ID : " + el.id);
            e.preventDefault();
            var element_id = e.dataTransfer.getData("text");
            console.log("ID item : "+element_id);
            dropped = dropped.concat(element_id);
             UniqueId = Math.random();
                if(element_id == "column"){
                    console.log("its a column");
                    let column = {id:UniqueId+" Column",
                        parentId:el.id,
                        type:"folder",
                        name:'Column',
                        selected:false,
                        isPromo:false,
                        MainAxesAlignment:"center",
                        MainAxesSize:"max",
                        CrossAxesAlignment:"center",
                        paddingL:"0",
                        paddingT:"0",
                        paddingR:"0",
                        paddingB:"0",
                        marginL:"0",
                        marginT:"0",
                        marginR:"0",
                        marginB:"0",
                        children:[]};
                    widget = [...widget,column];
                    treeWidget = list_to_tree(widget);

                }
                if(element_id == "row"){
                    console.log("its a row");
                    let row = {id:UniqueId +" Row",
                        parentId:el.id,
                        type:"folder",
                        name:'Row',
                        selected:false,
                        isPromo:false,
                        MainAxesAlignment:"center",
                        MainAxesSize:"max",
                        CrossAxesAlignment:"center",
                        paddingL:"0",
                        paddingT:"0",
                        paddingR:"0",
                        paddingB:"0",
                        marginL:"0",
                        marginT:"0",
                        marginR:"0",
                        marginB:"0",
                        children:[]};
                    widget = [...widget,row];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "center"){
                    console.log("its a center");
                    let center = {id:UniqueId+" center",
                        parentId:el.id,
                        type:"folder",
                        name:'center',
                        selected:false,
                        isPromo:false,
                        children:[]};
                    widget = [...widget,center];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "listview"){
                    console.log("its a listview");
                    let listview = {id:UniqueId+" listview",
                        parentId:el.id,
                        type:"folder",
                        name:'listview',
                        selected:false,
                        isPromo:false,
                        paddingL:"0",
                        paddingT:"0",
                        paddingR:"0",
                        paddingB:"0",
                        marginL:"0",
                        marginT:"0",
                        marginR:"0",
                        marginB:"0",
                        scrollDirection:"column",
                        children:[]};
                    widget = [...widget,listview];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "networkImage"){
                    console.log("its a networkImage");
                    let networkImage = {id:UniqueId+" networkImage",
                        parentId:el.id,
                        type:"folder",
                        name:'networkImage',
                        boxfit:"cover",
                        path:"https://upload.wikimedia.org/wikipedia/commons/9/92/The_death.png",
                        children:[]};
                    widget = [...widget,networkImage];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "container"){
                    let container={
                        id:UniqueId+" Container",
                        parentId:el.id,
                        name:'container',
                        type:'folder',
                        containerWidth:"",
                        containerHeight:"",
                        Color:"#C4C4C4",
                        paddingL:"0",
                        paddingT:"0",
                        paddingR:"0",
                        paddingB:"0",
                        marginL:"0",
                        marginT:"0",
                        marginR:"0",
                        marginB:"0",
                        children:[],
                    };
                    widget = [...widget,container];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "button"){
                    console.log("its a button");
                    let item = {id:UniqueId+" Item",
                        parentId:el.id,
                        type:"folder",
                        btnType:"mdc-button--raised",
                        name:'Item',
                        selected:false,
                        isPromo:false,
                        MainAxesAlignment:"",
                        MainAxesSize:"",
                        CrossAxesAlignment:"",
                        btnContent:"button",
                        leftIcone:"",
                        rightIcone:"",
                        backgroudColor:"#F44336",
                        textColor:"#FFFFFF",
                        upperCase:"uppercase",
                        minWidth:"",
                        minHeight:"",
                        maxWidth:"",
                        maxHeight:"",
                        fixedWidth:"",
                        fixedHeight:"",
                        shadowColor:"",
                        onPressed:"",
                        onLongPressed:"",
                        autoFocus:false,
                        mouseCursor:false,
                        haveLeftIcone:false,
                        haveRightIcone:false,
                        children:[]};
                    widget = [...widget,item];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "SizedBox"){
                    let sizedBox = {id:UniqueId+" sizedBox",parentId:el.id,type:"folder",name:'SizedBox',level:0,isPromo:false,widthSizedBox:10,heightSizedBox:10,children:[]};
                    widget = [...widget,sizedBox];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "text"){
                    let text = {id:UniqueId+ " text",parentId:el.id,type:"folder",name:'text',level:0,isPromo:false,
                    textContent:"Text",textColor:"",fontSize:"12",font:"Roboto",
                    backgroundColor:"",bold:"normal",italic:"normal",
                    textDecoration:"none",wordSpacing:"",letterSpacing:"",
                    children:[]};
                    widget = [...widget,text];
                    treeWidget = list_to_tree(widget);
                }
                if(element_id == "expand"){
                    let expand = {id:UniqueId+" expand",parentId:el.id,type:"folder",name:'expand',level:0,isPromo:false,children:[]};
                    widget = [...widget,expand];
                    treeWidget = list_to_tree(widget);
                }
                console.log(widget);
                console.log(treeWidget);
                
    }
    var Mat_Colors = [
                '#F44336',
                '#FFEBEE'   ,
                '#FFCDD2'   ,
                '#EF9A9A'   ,
                '#E57373'   ,
                '#EF5350'   ,
                '#E53935',
                '#D32F2F',
                '#C62828',
                '#B71C1C',
                '#FF8A80'  ,
                '#FF5252'  ,
                '#FF1744'   ,
                '#D50000'   ,
                '#E91E63' ,
                '#FCE4EC' ,
                '#F8BBD0',
                '#F48FB1' ,
                '#F06292' ,
                '#EC407A'  ,
            
                '#D81B60' ,
                '#C2185B' ,
                '#AD1457' ,
                '#880E4F' ,
           
                '#FF80AB',
                '#FF4081' ,
                '#F50057',
                '#C51162',
                '#9C27B0',
                '#F3E5F5'  ,
                '#E1BEE7' ,
                '#CE93D8' ,
                '#BA68C8' ,
                '#AB47BC' ,
            
                '#8E24AA' ,
                '#7B1FA2' ,
                '#6A1B9A' ,
                '#4A148C' ,
           
                '#EA80FC' ,
                '#E040FB' ,
                '#D500F9' ,
                '#AA00FF' ,
            
                '#673AB7',
                '#EDE7F6',
                '#D1C4E9',
                '#B39DDB',
                '#9575CD',
                '#7E57C2',
            
                '#5E35B1',
                '#512DA8',
                '#4527A0',
                '#311B92',
           
                '#B388FF',
                '#7C4DFF',
                '#651FFF',
                '#6200EA',
            
                '#3F51B5' ,
                '#E8EAF6' ,
                '#C5CAE9' ,
                '#9FA8DA' ,
                '#7986CB' ,
                '#5C6BC0' ,
           
                '#3949AB',
                '#303F9F',
                '#283593',
                '#1A237E',
                '#8C9EFF',
                '#536DFE',
                '#3D5AFE',
                '#304FFE',
                '#2196F3'   ,
                '#E3F2FD'  ,
                '#BBDEFB'  ,
                '#90CAF9'  ,
                '#64B5F6'  ,
                '#42A5F5'  ,
                '#1E88E5' ,
                '#1976D2' ,
                '#1565C0' ,
                '#0D47A1' ,
                '#82B1FF' ,
                '#448AFF' ,
                '#2979FF' ,
                '#2962FF' ,
                '#03A9F4' ,
                '#E1F5FE'  ,
                '#B3E5FC'  ,
                '#81D4FA'  ,
                '#4FC3F7'  ,
                '#29B6F6'  ,
                '#039BE5' ,
                '#0288D1' ,
                '#0277BD' ,
                '#01579B',
                '#80D8FF'   ,
                '#40C4FF'   ,
                '#00B0FF'   ,
                '#0091EA'   ,
                '#00BCD4' ,
                '#E0F7FA'   ,
                '#B2EBF2'   ,
                '#80DEEA'   ,
                '#4DD0E1'   ,
                '#26C6DA'   ,
                '#00ACC1'   ,
                '#0097A7'   ,
                '#00838F'   ,
                '#006064'   ,
                '#84FFFF'   ,
                '#18FFFF'   ,
                '#00E5FF'   ,
                '#00B8D4'   ,
                '#009688'  ,
                '#E0F2F1'   ,
                '#B2DFDB'   ,
                '#80CBC4'   ,
                '#4DB6AC'   ,
                '#26A69A'   ,
                '#00897B'   ,
                '#00796B'   ,
                '#00695C'   ,
                '#004D40'   ,
                '#A7FFEB'   ,
                '#64FFDA'   ,
                '#1DE9B6'   ,
                '#00BFA5'   ,
                '#4CAF50'   ,
                '#E8F5E9'   ,
                '#C8E6C9'   ,
                '#A5D6A7'   ,
                '#81C784'   ,
                '#66BB6A'   ,
                '#43A047'   ,
                '#388E3C'   ,
                '#2E7D32'   ,
                '#1B5E20'   ,
                '#B9F6CA'   ,
                '#69F0AE'   ,
                '#00E676'   ,
                '#00C853'   ,
                '#8BC34A'   ,
                '#F1F8E9'   ,
                '#DCEDC8'   ,
                '#C5E1A5'   ,
                '#AED581'   ,
                '#9CCC65'   ,
                '#7CB342'  ,
                '#689F38'  ,
                '#558B2F'  ,
                '#33691E'  ,
                '#CCFF90'  ,
                '#B2FF59'  ,
                '#76FF03'  ,
                '#64DD17'  ,
                '#CDDC39'  ,
                '#F9FBE7'   ,
                '#F0F4C3'   ,
                '#E6EE9C'   ,
                '#DCE775'   ,
                '#D4E157'   ,
                '#C0CA33'   ,
                '#AFB42B'   ,
                '#9E9D24'   ,
                '#827717'   ,
                '#F4FF81'   ,
                '#EEFF41'   ,
                '#C6FF00'   ,
                '#AEEA00'   ,
                '#FFEB3B'   ,
                '#FFFDE7'   ,
                '#FFF9C4'   ,
                '#FFF59D'   ,
                '#FFF176'   ,
                '#FFEE58'   ,
                '#FDD835'   ,
                '#FBC02D'   ,
                '#F9A825'   ,
                '#F57F17'   ,
                '#FFFF8D'   ,
                '#FFFF00'   ,
                '#FFEA00'   ,
                '#FFD600'   ,
                '#ffc107'   ,
                '#fff8e1'   ,
                '#ffecb3'   ,
                '#ffe082'   ,
                '#ffd54f'   ,
                '#ffca28'   ,
                '#ffb300'   ,
                '#ffa000'   ,
                '#ff8f00'   ,
                '#ff6f00'   ,
                '#ffe57f'   ,
                '#ffd740'   ,
                '#ffc400'   ,
                '#ffab00'   ,
                '#FF9800' ,
                '#FFF3E0'   ,
                '#FFE0B2'   ,
                '#FFCC80'   ,
                '#FFB74D'   ,
                '#FFA726'   ,
                '#FB8C00'   ,
                '#F57C00'   ,
                '#EF6C00'   ,
                '#E65100'   ,
                '#FFD180'   ,
                '#FFAB40'   ,
                '#FF9100'   ,
                '#FF6D00'   ,
                '#FF5722'   ,
                '#FBE9E7'   ,
                '#FFCCBC'   ,
                '#FFAB91'   ,
                '#FF8A65'   ,
                '#FF7043'   ,
                '#F4511E'   ,
                '#E64A19'   ,
                '#D84315'   ,
                '#BF360C'   ,
                '#FF9E80'   ,
                '#FF6E40'   ,
                '#FF3D00'   ,
                '#DD2C00'   ,
                '#795548'   ,
                '#EFEBE9'   ,
                '#D7CCC8'   ,
                '#BCAAA4'   ,
                '#A1887F'   ,
                '#8D6E63'   ,
                '#6D4C41'   ,
                '#5D4037'   ,
                '#4E342E'   ,
                '#3E2723'   ,
                '#9E9E9E'   ,
                '#000000'   ,
                '#FAFAFA'   ,
                '#F5F5F5'   ,
                '#EEEEEE'   ,
                '#E0E0E0'   ,
                '#BDBDBD'   ,
                '#757575'   ,
                '#616161'   ,
                '#424242'   ,
                '#212121'   ,
                '#607D8B'   ,
                '#ECEFF1'   ,
                '#CFD8DC'   ,
                '#B0BEC5'   ,
                '#90A4AE'   ,
                '#78909C'   ,
                '#546E7A'   ,
                '#455A64'   ,
                '#37474F'   ,
                '#263238'   ,
                '',
    ];

</script>


