# Header Documentation

Here is some documentation on how to use a form input component, written in markdown

## Component Useage

### Import component where needed

```javascript
import HeadingSecondary from 'path/to/directory'
```

### Register component in your Vue instance

```javascript
components: {
  HeadingSecondary
}
```

### Add component name into your template

```html
<heading-secondary>Secondary Heading</heading-secondary>
```

## Component Properties

| Prop Name |  Type   | Default | Description                            |
| --------- | :-----: | :-----: | -------------------------------------- |
| :upper    | Boolean |  false  | Adds uppercase to text-transform style |
| :gradient | Boolean |  false  | Adds a gradient to the header          |
