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

## `ComponentBase(componentName: string, HTML: string, inner: boolean`

`componentName`라는 이름을 가진 컴포넌트를 생성합니다.  
`HTML`: 컴포넌트의 코드를 나타냅니다.  
`inner`: 컴포넌트의 내부에 삽입할지 여부를 결정합니다.
