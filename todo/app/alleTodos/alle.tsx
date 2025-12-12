import type { Route } from "./+types/alle";

export default function Alle({
    loaderData,
    actionData,
    params,
    matches,
}: Route.ComponentProps) {
    return (
        <main>
            <h1>Welcome to My Route with Props!</h1>
            <p>Loader Data: {JSON.stringify(loaderData)}</p>
            <p>Action Data: {JSON.stringify(actionData)}</p>
            <p>Route Parameters: {JSON.stringify(params)}</p>
            <p>Matched Routes: {JSON.stringify(matches)}</p>
        </main>
    )
}