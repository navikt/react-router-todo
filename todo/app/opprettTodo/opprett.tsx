import { Box, Button, HStack, TextField, VStack } from "@navikt/ds-react";
import { useNavigate } from "react-router";

export default function Opprett() {

    const navigate = useNavigate()

    return (
        <main>
            <form>
                <HStack justify="center">
                    <VStack gap="4" paddingBlock="12">
                        <Box width="30rem">
                            <TextField label="Beskrivelse" />
                        </Box>
                        <Box width="10rem">
                            <TextField label="Tidsfrist" type="number" />
                        </Box>
                        <div>
                            <HStack gap="4">
                                <Button type="button" variant="secondary" onClick={() => navigate("/")}>
                                    Avbryt
                                </Button>
                                <Button>
                                    Legg til todo
                                </Button>
                            </HStack>
                        </div>
                    </VStack>
                </HStack>
            </form>
        </main >
    )
}