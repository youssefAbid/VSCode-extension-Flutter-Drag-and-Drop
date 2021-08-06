<!-- svelte-ignore a11y-missing-attribute -->
<img  name="networkImage"
src={path}
 id={id}
 style={"object-fit:"+boxfit+";"}>
<script>
    export let id;
    export let path="https://upload.wikimedia.org/wikipedia/commons/9/92/The_death.png";
    export let boxfit="cover";
</script>