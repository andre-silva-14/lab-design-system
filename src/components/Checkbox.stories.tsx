import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: { id: "checkbox-label", "aria-label": "Remember me for 30 days." },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <label htmlFor="checkbox-label" className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Remember me for 30 days.</Text>
        </label>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
