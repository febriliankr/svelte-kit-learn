# Learning Sveltekit

Seeing if sveltekit has everything I need to replace nextjs


## Parse HTML

```
<p>{@html htmlContent}</p>
```

instead of dangerouslySetInnerHTML in react, which is fucking ridiculous. It means I can just parse JSON, and parse it to html like this:

```
<script>
const postHTML = res.postHTML;
</script>

<article>

{@html postHTML}

</article>
```

on:click event

```
<button on:click={handleClick}>
```

## useEffect equivalent

useEffect equivalent is just this!

```
$: {
	console.log('the count is ' + count);
}
```

## setState action

```
function addNumber(){
  const newNumbers = [...numbers, numbers.length+1]
  numbers = newNumbers
}
```

## Props

    export let answer
    export let name='defaultname'

    <Nested answer={42} name={name}/>

## Table Components

@tanstack/svelte-table

## Select Component

https://github.com/rob-balfre/svelte-select
https://svelte.dev/repl/a859c2ba7d1744af9c95037c48989193?version=3.12.1

## Router

```
import { page } from '$app/stores';

<div>{$page.url.pathname}</div>
```
