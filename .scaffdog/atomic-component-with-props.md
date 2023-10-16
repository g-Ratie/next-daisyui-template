---
name: "ap"
root: "."
output: "."
questions:
  stage:
    message: "Please select stage."
    choices:
      - "atom"
      - "molecule"
      - "organism"
      - "layout"
  name: "Please enter a component name."
---

# `src/components/{{ inputs.stage }}s/{{ inputs.name | pascal }}.tsx`

```tsx
interface {{ inputs.name | pascal }}Props {
  prop: any
}

export const {{ inputs.name | pascal }} = ({ prop }: {{ inputs.name | pascal }}Props) => {
  return null
}
```

# `src/components/{{ inputs.stage }}s/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { ComponentProps } from "react"
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}";
type StoryObj = ComponentStoryObj<typeof {{ inputs.name | pascal }}>;
type PropsByComponentProps = ComponentProps<typeof {{ inputs.name | pascal }}>

export default {
  title: "{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

const args: PropsByComponentProps = {};

export const Basic: StoryObj = {
  args: { ...args },
};
```
