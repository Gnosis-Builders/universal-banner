# Universal Banner
Universal Banner for use in all Gnosis sites.

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `header` | `string` | `undefined` | Header text |
| `children` | `node` | `undefined` | Content |
| `titleStyles` | `object` | `undefined` | Styles for the title |
| `backgroundStyles` | `object` | `undefined` | Styles for the background |


## Usage
    
### Import
```jsx
import Banner from 'universal-banner';
```

### Change Background Styles
```jsx
    <Banner backgroundStyles={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' }}>
      <p>Content</p>
    </Banner>
```

<img width="807" alt="Blue Gradient Background" src="https://user-images.githubusercontent.com/23222537/217420693-8adb7923-06f6-4748-adfa-269da2f5e02f.png">

You can either pass a header string along with titleStyles or pass a child component.

### Change Title Styles
```jsx
    <Banner header="Header" titleStyles={{ color: 'red' }} />
```

or 

```jsx
    <Banner>
      <h1 style={{ color: 'red' }}>Header</h1>
    </Banner>
```