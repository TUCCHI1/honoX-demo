import type {} from "hono"

type Head = {
    title?: string
}

declare module "hono" {
    interface ContextRenderer {
        render: (content: string | Promise<string>, head?: Head) => Response | Promise<Response>
    }
}