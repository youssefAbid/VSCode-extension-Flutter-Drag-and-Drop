<style>
a{
    height: 10px;
    width: 100px;
}
a:hover{
    box-shadow: 0px 0px 2px 2px #7B79FF;
    border: 1px transparent ;
}
</style>


<!-- <input type="text" id="autocomplete" on:input={auto} placeholder="Select a color..."/>
<ul id="results" on:click={res}></ul> -->
{#each children as file }

    {#if file.name === 'Column'}
        <!-- svelte-ignore missing-declaration -->
        
        <Column bind:id={file.id}
        on:GetIDAndNameItem
        bind:MainAxesAlignment={file.MainAxesAlignment}
        bind:CrossAxesAlignment={file.CrossAxesAlignment}
        bind:MainAxesSize={file.MainAxesSize}
        bind:paddingB={file.paddingB}
        bind:paddingT={file.paddingT}
        bind:paddingL={file.paddingL}
        bind:paddingR={file.paddingR}
        bind:marginB={file.marginB}
        bind:marginT={file.marginT}
        bind:marginL={file.marginL}
        bind:marginR={file.marginR}
        on:drop={handleDrop}
        ondragover="return false" >
            {#if file.type === 'folder'}
                <svelte:self {...file} />
            {/if}
        </Column>
    {/if}
    {#if file.name === 'listview'}
        <!-- svelte-ignore missing-declaration -->
        
        <ListView bind:id={file.id}
        on:GetIDAndNameItem
        bind:scrollDirection={file.scrollDirection}
        bind:paddingB={file.paddingB}
        bind:paddingT={file.paddingT}
        bind:paddingL={file.paddingL}
        bind:paddingR={file.paddingR}
        bind:marginB={file.marginB}
        bind:marginT={file.marginT}
        bind:marginL={file.marginL}
        bind:marginR={file.marginR}
        on:drop={handleDrop}
        ondragover="return false" >
            {#if file.type === 'folder'}
                <svelte:self {...file} />
            {/if}
        </ListView>
    {/if}
    {#if file.name === 'Row'}
        <Row bind:id={file.id}
        on:GetIDAndNameItem
        bind:MainAxesAlignment={file.MainAxesAlignment}
        bind:CrossAxesAlignment={file.CrossAxesAlignment}
        bind:MainAxesSize={file.MainAxesSize}
        bind:paddingB={file.paddingB}
        bind:paddingT={file.paddingT}
        bind:paddingL={file.paddingL}
        bind:paddingR={file.paddingR}

        bind:marginB={file.marginB}
        bind:marginT={file.marginT}
        bind:marginL={file.marginL}
        bind:marginR={file.marginR}
        on:drop={handleDrop}
        ondragover="return false" >
            {#if file.type === 'folder'}
                <svelte:self {...file}/>
            {/if}
        </Row>
    {/if}
    {#if file.name === 'Item'}
        <ElevatedButton 
        bind:btnContent={file.btnContent} 
        bind:leftIcone={file.leftIcone} 
        bind:id={file.id} 
        bind:rightIcone={file.rightIcone}
        bind:backgroudColor={file.backgroudColor}
        bind:textColor={file.textColor}
        bind:upperCase={file.upperCase}
        bind:minWidth={file.minWidth}
        bind:minHeight={file.minHeight}
        bind:maxWidth={file.maxWidth}
        bind:maxHeight={file.maxHeight}
        bind:fixedWidth={file.fixedWidth}
        bind:fixedHeight={file.fixedHeight}
        bind:haveLeftIcone={file.haveLeftIcone}
        bind:haveRightIcone={file.haveRightIcone}
        bind:btnType={file.btnType}
        bind:shadowColor={file.shadowColor}
        bind:onPressed={file.onPressed}
        bind:onLongPressed={file.onLongPressed}
        bind:autoFocus={file.autoFocus}
        bind:mouseCursor={file.mouseCursor}
        on:dragstart={handleDragStart} draggable={true} ondragover="return false" >
            {#if file.type === 'folder'}
                <svelte:self {...file}{test}/>
            {/if}
        </ElevatedButton>
{/if}
{#if file.name === 'SizedBox'}
    <a name="SizedBox" id={file.id}  style={"width: "+file.widthSizedBox+"px;"+"height: "+file.heightSizedBox+"px;"} >
        {#if file.type === 'folder'}
            <svelte:self {...file}/>
        {/if}
    </a>
{/if}
{#if file.name === 'center'}
<!-- svelte-ignore missing-declaration -->

<Center bind:id={file.id}
on:GetIDAndNameItem
on:drop={handleDrop}
ondragover="return false" >
    {#if file.type === 'folder'}
        <svelte:self {...file} />
    {/if}
</Center>
{/if}

{#if file.name === 'container'}
    <Container bind:id={file.id} 
    bind:child={file.children} 
    on:GetIDAndNameItem 
    bind:Height={file.containerWidth}
    bind:Width={file.containerHeight}
    bind:backgroundColor={file.Color}
    bind:paddingB={file.paddingB}
    bind:paddingT={file.paddingT}
    bind:paddingL={file.paddingL}
    bind:paddingR={file.paddingR}

    bind:marginB={file.marginB}
    bind:marginT={file.marginT}
    bind:marginL={file.marginL}
    bind:marginR={file.marginR}
    on:drop={handleDrop} 
    draggable={true} 
    ondragover="return false">
        {#if file.type === 'folder'}
            <svelte:self {...file}/>
        {/if}
    </Container>
{/if}

{#if file.name === 'expand'}
    <Expand bind:id={file.id}  on:GetIDAndNameItem  on:drop={handleDrop} draggable={true} ondragover="return false">
        {#if file.type === 'folder'}
            <svelte:self {...file}/>
        {/if}
    </Expand>
{/if}
{#if file.name === 'networkImage'}
    <ImageNetwork bind:id={file.id} bind:boxfit={file.boxfit} bind:path={file.path} on:GetIDAndNameItem draggable={true} ondragover="return false">
        {#if file.type === 'folder'}
            <svelte:self {...file}/>
        {/if}
    </ImageNetwork>
{/if}
{#if file.name === 'text'}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <Text 
    name="text"
    on:dragstart={handleDragStart} draggable={true} ondragover="return false"
    bind:id={file.id}
    bind:textColor={file.textColor}
    bind:backgroundColor={file.backgroundColor}
    bind:font={file.font}
    bind:fontSize={file.fontSize}
    bind:textContent={file.textContent}
    bind:bold={file.bold}
    bind:italic={file.italic}
    bind:textDecoration={file.textDecoration}
    bind:wordSpacing={file.wordSpacing}
    bind:letterSpacing={file.letterSpacing}
    >
        {#if file.type === 'folder'}
            <svelte:self {...file}/>
        {/if}
    </Text>
{/if}
{/each}
<script>
import {MDCRipple} from '@material/ripple';
import ElevatedButton from './ElevatedButton.svelte';
import {Label, Icon} from '@smui/common';
    import { MaterialApp } from 'svelte-materialify';
    import Button from './Button.svelte';
    import Row from './Row.svelte';
    import ImageNetwork from './ImageNetwork.svelte';
    import Center from './Center.svelte';
    import Expand from './Expand.svelte'
    import Column from './Column.svelte';
    import ListView from './ListView.svelte';
    import Container from './Container.svelte';
    import Text from './Text.svelte';
    import { createEventDispatcher } from 'svelte'; 
    import colors from 'svelte-materialify/src/utils/colors';
    export let children;
    let selectedItemID;
    let red = colors.red.base;
    let lightRed = colors.red['lighten-1'];
    export let dragedItemID ;
    let dispatch = createEventDispatcher ();
    export let test;

    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';
        e.dataTransfer.setData("text", e.target.getAttribute('id'));
        dragedItemID = e.target.getAttribute('id');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        console.log("test func ************************************")
        dispatch('dropItem',{drop : e.target.getAttribute("id"),drag : dragedItemID}) ;
    };

   



</script>
