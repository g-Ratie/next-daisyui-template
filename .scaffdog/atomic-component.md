---
name: "a"
root: "."
output: "."
questions:
  stage:
    message: "Please select stage."
    choices:
      - "atom"
      - "molecule"
      - "organism"
      - "template"
  name: "Please enter a component name."
---

# `src/components/{{ inputs.stage }}s/{{ inputs.name | pascal }}.tsx`

```tsx
export const {{ inputs.name | pascal }} = () => {
  return null
}
```

# `src/components/{{ inputs.stage }}s/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}";
type StoryObj = ComponentStoryObj<typeof {{ inputs.name | pascal }}>;

export default {
  title: "{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;


export const Basic: StoryObj = {
};
```
