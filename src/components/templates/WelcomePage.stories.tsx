import { WelcomePage } from "./WelcomePage"
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react"
type StoryObj = ComponentStoryObj<typeof WelcomePage>

export default {
  title: "WelcomePage",
  component: WelcomePage,
} as ComponentMeta<typeof WelcomePage>

export const Basic: StoryObj = {}
