# Button

Button component is used to trigger an action or event, such as submitting a form or performing a CRUD operations.

## Usage
<Demo componentName="examples-button-doc" />

<SourceCode>
<<< ./docs/.vuepress/components/examples/button-doc.vue
</SourceCode>

## Props

Name | Type | Default | Description
-----|------|---------|------------
label | String | **required** |
uppercase-label | Boolean | `false` |
size | String| `base` | Possible options include: `xs`, `sm`, `base`, `lg`, `xl`
variant | String| `primary` | Possible options include: `primary`, `secondary`, `outline`, `link`
rounded | String| `base` | Possible options include: `none`, `sm`, `base`, `lg`, `full`
border-width | Number| `2` | Possible options include: `0`, `1`, `2`, `4`, `8`
font-weight | String| `semibold` | Possible options include: `normal`, `medium`, `semibold`, `bold`

## Slots

No slot available on this component

## Component Source Code

<SourceCode>
<<< @/src/components/Button/Button.vue
</SourceCode>