import { Welcome } from "./Welcome";
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
type StoryObj = ComponentStoryObj<typeof Welcome>;

export default {
  title: "Welcome",
  component: Welcome,
} as ComponentMeta<typeof Welcome>;


export const Basic: StoryObj = {
};