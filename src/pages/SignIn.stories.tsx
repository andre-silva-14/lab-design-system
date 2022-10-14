import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { rest } from "msw";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login Successful!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Type your email"),
      "testing@example.com"
    );
    userEvent.type(canvas.getByPlaceholderText("**********"), "123456789");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      expect(canvas.getByText("Login Successful!")).toBeInTheDocument();
    });
  },
};
