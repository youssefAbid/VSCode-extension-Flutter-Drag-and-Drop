
{#each children as file }

{#if file.name === 'Column'}
<!-- svelte-ignore a11y-missing-attribute -->
<div>Column(</div>
<br>
<div>mainAxisAlignment:MainAxisAlignment.{file.MainAxesAlignment},</div>
<br>
<div>crossAxisAlignment:CrossAxisAlignment.{file.CrossAxesAlignment},</div>
<br>
<div>mainAxisSize:MainAxisSize.{file.MainAxesSize},</div>
padding: EdgeInsets.fromLTRB({file.paddingL},{file.paddingT},{file.paddingR},{file.paddingB}),
margin: EdgeInsets.fromLTRB({file.marginL},{file.marginT},{file.marginR},{file.marginB}),
<div>children: [</div>
<br>
        {#if file.type === 'folder'}
            <svelte:self {...file} />
        {/if}
<!-- svelte-ignore a11y-missing-attribute -->
<div>]),</div>
{/if}
{#if file.name === 'Row'}
<div>Row(</div>
<br>
<div>mainAxisAlignment:MainAxisAlignment.{file.MainAxesAlignment},</div>
<br>
<div>crossAxisAlignment:CrossAxisAlignment.{file.CrossAxesAlignment},</div>
<br>
<div>mainAxisSize:MainAxisSize.{file.MainAxesSize},</div>
padding: EdgeInsets.fromLTRB({file.paddingL},{file.paddingT},{file.paddingR},{file.paddingB}),
margin: EdgeInsets.fromLTRB({file.marginL},{file.marginT},{file.marginR},{file.marginB}),
<div>children: [</div>
<br>
        {#if file.type === 'folder'}
            <svelte:self {...file}/>
        {/if}
<div>]),</div>
{/if}
{#if file.name === 'Item'}
{#if file.btnType === '' }
<br>
TextButton{#if file.haveLeftIcone == true}
    <!-- svelte-ignore a11y-missing-attribute -->
    .icon(
        {#if file.upperCase ==='uppercase'}
        <div>label: Text('{file.btnContent}'.toUpperCase()),</div>
        {/if}
        {#if file.upperCase ==='lowercase'}
        <div>label: Text('{file.btnContent}'.toLowerCase()),</div>
        {/if}
        icon: Icon(Icons.{file.leftIcone}),
        {onPressed}
    {:else}
    <span>(</span>
    {#if file.upperCase ==='uppercase'}
    <div>child: Text('{file.btnContent}'.toUpperCase()),</div>
    {/if}
    {#if file.upperCase ==='lowercase'}
    <div>child: Text('{file.btnContent}'.toLowerCase()),</div>
    {/if}
    {onPressed}
    {/if}
    autoFocus: {file.autoFocus}
    <p>style: TextButton.styleFrom(</p>
    {#if file.shadowColor == true}
    <br>
    <div>elevation: 0,</div>
    <br>
    {/if}
    minimumSize : Size({file.minWidth},{file.minHeight}),
              <span> backgroundColor: Color(0xFF{file.backgroudColor.slice(1,file.backgroudColor.length)}),</span> 
            <span>primary: Color(0xFF{file.textColor.slice(1,file.textColor.length)}), </span>
            ),
 ),
{/if}
{#if file.btnType === 'mdc-button--raised' }
<!-- svelte-ignore missing-declaration -->
<br>
ElevatedButton
    {#if file.haveLeftIcone == true}
    <!-- svelte-ignore a11y-missing-attribute -->
    .icon(
        {#if file.upperCase ==='uppercase'}
        <div>label: Text('{file.btnContent}'.toUpperCase()),</div>
        {/if}
        {#if file.upperCase ==='lowercase'}
        <div>label: Text('{file.btnContent}'.toLowerCase()),</div>
        {/if}
        icon: Icon(Icons.{file.leftIcone}),
        {#if file.onPressed !=""}
        onPressed: {file.onPressed}(),
        
        {:else}
        {onPressed}
        {/if}
    {:else}
    <span>(</span>
    {#if file.upperCase ==='uppercase'}
    <div>child: Text('{file.btnContent}'.toUpperCase()),</div>
    {/if}
    {#if file.upperCase ==='lowercase'}
    <div>child: Text('{file.btnContent}'.toLowerCase()),</div>
    {/if}
    {onPressed}
    {/if}
    autoFocus: {file.autoFocus}
    <p>style: ElevatedButton.styleFrom(</p>
    {#if file.shadowColor == true}
    <br>
    <div>elevation: 0,</div>
    <br>
    {/if}
    minimumSize : Size({file.minWidth},{file.minHeight}),
              <span> primary: Color(0xFF{file.backgroudColor.slice(1,file.backgroudColor.length)}),</span> 
            <span>onPrimary: Color(0xFF{file.textColor.slice(1,file.textColor.length)}) </span>
            ),
 ),
{/if}
{#if file.btnType === 'mdc-button--outlined' }
<br>
OutlinedButton{#if file.haveLeftIcone == true}
    <!-- svelte-ignore a11y-missing-attribute -->
    .icon(
        {#if file.upperCase ==='uppercase'}
        <div>label: Text('{file.btnContent}'.toUpperCase()),</div>
        {/if}
        {#if file.upperCase ==='lowercase'}
        <div>label: Text('{file.btnContent}'.toLowerCase()),</div>
        {/if}
        icon: Icon(Icons.{file.leftIcone}),
        {#if file.onPressed !=""}
        onPressed: {file.onPressed}(),
        
        {:else}
        {onPressed}
        {/if}
    {:else}
    <span>(</span>
    {#if file.upperCase ==='uppercase'}
    <div>child: Text('{file.btnContent}'.toUpperCase()),</div>
    {/if}
    {#if file.upperCase ==='lowercase'}
    <div>child: Text('{file.btnContent}'.toLowerCase()),</div>
    {/if}
    {#if file.onPressed !=""}
    onPressed: {file.onPressed}(),
    
    {:else}
    {onPressed}
    {/if}
    {/if}
    autoFocus: {file.autoFocus}
    <p>style: OutlinedButton.styleFrom(</p>
    minimumSize : Size({file.minWidth},{file.minHeight}),
    {#if file.shadowColor == true}
    <br>
    <div>elevation: 0,</div>
    <br>
    {/if}
    side: BorderSide(Color(0xFF{file.textColor.slice(1,file.textColor.length)}) width: 1),
              <span> backgroundColor: Color(0xFF{file.backgroudColor.slice(1,file.backgroudColor.length)}),</span> 
            <span>primary: Color(0xFF{file.textColor.slice(1,file.textColor.length)}) </span>
            ),
 ),
{/if}
        {#if file.type === 'folder'}
            <svelte:self {...file}/>
        {/if}
{/if}
{#if file.name === 'SizedBox'}
<div>SizedBox(
    width: {file.widthSizedBox},
    height: {file.HeightSizedBox},
    ),</div>
    {#if file.type === 'folder'}
        <svelte:self {...file}/>
    {/if}
{/if}
{#if file.name === 'listview'}
<div>Listview(
    padding: EdgeInsets.fromLTRB({file.paddingL},{file.paddingT},{file.paddingR},{file.paddingB}),
margin: EdgeInsets.fromLTRB({file.marginL},{file.marginT},{file.marginR},{file.marginB}),
    shrinkWrap: true,
    scrollDirection: Axis.{file.scrollDirection},
    children: [
</div>
    {#if file.type === 'folder'}
        <svelte:self {...file}/>
    {/if}
<div>]),</div>
{/if}
{#if file.name === 'center'}
<div>Center(</div>
child:
    {#if file.type === 'folder'}
        <svelte:self {...file}/>
    {/if}
<div>),</div>
{/if}
{#if file.name === 'container'}
<div>Container(</div>
padding: EdgeInsets.fromLTRB({file.paddingL},{file.paddingT},{file.paddingR},{file.paddingB}),
margin: EdgeInsets.fromLTRB({file.marginL},{file.marginT},{file.marginR},{file.marginB}),
child:
    width: {file.containerWidth},
    height:{file.containerHeight},
    decoration: BoxDecoration(color: Color(0xFF{file.Color.slice(1,file.Color.length)}),).
    {#if file.type === 'folder'}
        <svelte:self {...file}/>
    {/if}
<div>),</div>
{/if}
{#if file.name === 'expand'}
<div>Expanded(</div>
child:
    {#if file.type === 'folder'}
        <svelte:self {...file}/>
    {/if}
<div>),</div>
{/if}
{#if file.name === 'networkImage'}
<div>Image.network('{file.path}',fit: BoxFit.{file.boxfit}),</div>
    {#if file.type === 'folder'}
        <svelte:self {...file}/>
    {/if}
{/if}
{#if file.name === 'text'}
<div>Text(
    '{file.textContent}',
    TextStyle(
        fontStyle: FontStyle.{file.italic},
        fontWeight: FontWeight.{file.bold},
        fontSize: {file.fontSize},
        decoration: TextDecoration.{file.textDecoration},
        backgroundColor: Color(0xFF{file.backgroundColor.slice(1,file.backgroundColor.length)}),
        fontFamily: '{file.font}',
        color:  Color(0xFF{file.textColor.slice(1,file.textColor.length)}),
        letterSpacing: {file.wordSpacing},
        wordSpacing: {file.letterSpacing},

        ),

    ),</div>
    {#if file.type === 'folder'}
        <svelte:self {...file}/>
    {/if}

{/if}
{/each}
<script>
    export let children;
    let onPressed = 'onPressed: (){},';
</script>