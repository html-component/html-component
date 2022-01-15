# Functions

## `Insert(target: string, data: object): void`

`#target`에 `data`를 삽입합니다.

```html
<div id="greet">Hello, {{name}}!</div>

<script>
  Insert('greet', { name: 'world' });
</script>
```

## `Each(target: string, data: object[]): void`

`<c-each />`태그와 함께 사용됩니다.
