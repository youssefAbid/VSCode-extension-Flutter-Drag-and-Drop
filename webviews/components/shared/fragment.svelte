<slot name="footer">
    <div class="column" class:promo={isPromo}  id={file.id} on:click={handleResizeColumn}  >
        {#if file.type === 'folder'}
        {/if}
    </div>
</slot>