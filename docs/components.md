# Components

## `c-template`

컴포넌트를 정의합니다.  
해당 컴포넌트는 `c:name`에 정의된 이름을 가지고 생성됩니다.

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

## `c-fetch`

Fetch From Server

```html
<c-fetch id="users" src="https://jsonplaceholder.typicode.com/users">loading</c-fetch>

<script>
  ComponentFetch('users', function (element, response) {
    if (response.ok) {
      response.json().then(function (data) {
        element.innerHTML = data
          .map(function (user) {
            return `<div>${user.name}</div>`;
          })
          .join('');
      });
    } else {
      element.innerHTML = 'error: ' + response.status;
    }
  });
</script>
```

### `ComponentFetch(id: string, callback: (element: HTMLElement, response: Response) => void): void`
