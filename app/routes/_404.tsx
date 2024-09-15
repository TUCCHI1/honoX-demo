import type { NotFoundHandler } from "hono";

const handler: NotFoundHandler = (c) => {
  return c.render(<h1>Sorry, Not FOund...</h1>)
}

export default handler