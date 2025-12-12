import { useNavigate } from "react-router";
import type { Route } from "./+types/landing";
import { HStack, VStack, Button, Heading } from "@navikt/ds-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Landing() {

  const navigate = useNavigate()

  return <main>
    <HStack justify="center" paddingBlock="12">
      <VStack gap="4">
        <Heading size="xlarge">
          Todo or not todo 🤔
        </Heading>
        <VStack gap="4" align="center">
          <div>
            <Button type="button" onClick={() => navigate('/opprett-todo/opprett')}>
              Opprett todo
            </Button>
          </div>
          <div>
            <Button variant="secondary" onClick={() => navigate('/alle-todos/alle')}>
              Alle todos
            </Button>
          </div>
        </VStack>
      </VStack>
    </HStack>
  </main>;
}
