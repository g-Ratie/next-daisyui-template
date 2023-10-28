import type { ComponentProps } from "react"
import { HeroContentText } from "./HeroContentText"
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react"
type StoryObj = ComponentStoryObj<typeof HeroContentText>
type PropsByComponentProps = ComponentProps<typeof HeroContentText>

export default {
  title: "HeroContentText",
  component: HeroContentText,
} as ComponentMeta<typeof HeroContentText>

const args: PropsByComponentProps = {
  variant: "h1",
  children: "Hello there",
}

export const Basic: StoryObj = {
  args: { ...args },
}
