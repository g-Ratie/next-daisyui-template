import { HeroContent } from "./Herocontent"
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react"
type StoryObj = ComponentStoryObj<typeof HeroContent>

export default {
  title: "Herocontent",
  component: HeroContent,
} as ComponentMeta<typeof HeroContent>

export const Basic: StoryObj = {}
