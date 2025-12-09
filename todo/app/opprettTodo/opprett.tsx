import { Box, Button, HStack, TextField, VStack } from "@navikt/ds-react";

export default function Opprett() {
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
                            <Button>
                                Legg til todo
                            </Button>
                        </div>
                    </VStack>

                </HStack>
            </form>
        </main >
    )
}