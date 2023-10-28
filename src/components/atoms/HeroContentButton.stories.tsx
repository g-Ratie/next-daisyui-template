import { HeroContentButton } from "./HeroContentButton"
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react"
type StoryObj = ComponentStoryObj<typeof HeroContentButton>

export default {
  title: "HeroContentButton",
  component: HeroContentButton,
} as ComponentMeta<typeof HeroContentButton>

export const Basic: StoryObj = {
  args: {
    children: "Text",
  },
}
