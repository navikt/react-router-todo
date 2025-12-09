import type { Route } from "./+types/landing";
import { HStack, VStack, Button, Heading } from "@navikt/ds-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Landing() {
  return <main>
    <HStack justify="center" paddingBlock="12">
      <VStack gap="4">
        <Heading size="xlarge">
          Todos app laget med react-router
        </Heading>
        <VStack gap="4" align="center">
          <div>
            <Button>
              Opprett todo
            </Button>
          </div>
          <div>
            <Button variant="secondary">
              Alle todos
            </Button>
          </div>
        </VStack>
      </VStack>
    </HStack>
  </main>;
}
