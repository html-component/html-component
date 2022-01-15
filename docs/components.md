# Components

## `c-template`

Define Component

```html
<c-template c:name="my-component">
  <h1>Hello, world!</h1>
</c-template>

<my-component></my-component>

<!--Result: Hello, world!-->
```

```html
<c-template c:name="my-component" c:props="message name">
  <h1>{{message}}, {{name}}!</h1>
</c-template>

<my-component props:message="hello" props:name="world"></my-component>

<!--Result: Hello, world!-->
```

[result](https://html-component.github.io/example/greet)

## `c-each`

Each From List

```html
<c-each id="cats" c:return-v="cat" c:return-i="i">
  <li>{{i}}. {{cat}}</li>
</c-each>

<script>
  const cats = ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];
  Each('cats', cats);
</script>
```

[Info about Each Func](./functions.md#each)

| att        | value                |
| ---------- | -------------------- |
| c:return-v | 해당 element         |
| c:return-i | 해당 element의 index |

[result](https://html-component.github.io/example/map)
