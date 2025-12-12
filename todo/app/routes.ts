import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("landing.tsx"),
    ...prefix("opprett-todo", [
        route("opprett", "./opprettTodo/opprett.tsx")
    ]),
    ...prefix("alle-todos", [
        route("alle", "./alleTodos/alle.tsx")
    ])
] satisfies RouteConfig;
