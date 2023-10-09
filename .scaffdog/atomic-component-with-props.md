---
name: 'ap'
root: '.'
output: '.'
questions:
  stage:
    message: 'Please select stage.'
    choices:
      - 'atoms'
      - 'molecules'
      - 'organisms'
      - 'layout'
  name: 'Please enter a component name.'
---

# `src/components/{{ inputs.stage }}/{{ inputs.name | pascal }}.tsx`

```tsx
interface {{ inputs.name | pascal }}Props {
  prop: any
}

export const {{ inputs.name | pascal }} = ({ prop }: {{ inputs.name | pascal }}Props) => {
  return null
}
```