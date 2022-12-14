import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { ReactLogo } from "../assets/ReactLogo";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    axios.post("/sessions", {
      email: "testing@example.com",
      password: "123456789",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <ReactLogo />

        <Heading size="lg" className="mt-4">
          Lab Design System
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Login and Start Creating!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch w-full max-w-md mt-10"
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email Address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Type your email"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" aria-label="Remember me for 30 days." />
          <Text size="sm" className="text-gray-200">
            Remember me for 30 days.
          </Text>
        </label>

        {isUserSignedIn && <Text>Login Successful!</Text>}

        <Button type="submit">Enter the Platform</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Forgot your password?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Don't have an account? Register Now!
          </a>
        </Text>
      </footer>
    </div>
  );
}
