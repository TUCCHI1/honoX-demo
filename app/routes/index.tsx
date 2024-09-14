import { getCookie, setCookie } from "hono/cookie";
import { createRoute } from "honox/factory";

/**
 * POSTリクエストを処理するルートを作成します。
 * @param {Object} c - コンテキストオブジェクト
 * @returns {Promise<Response>} リダイレクトレスポンス
 */
export const POST = createRoute(async (c) => {
  const {name} = await c.req.parseBody<{name: string}>()
  setCookie(c, "name", name)
  return c.redirect("/")
})

/**
 * GETリクエストを処理するルートを作成します。
 * @param {Object} c - コンテキストオブジェクト
 * @returns {Response} レンダリングされたHTMLレスポンス
 */
export default createRoute((c) => {
  const name = getCookie(c, "name") ?? "no name"
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <form method="post">
        <input type="text" name="name" placeholder="name" />
        <input type="submit" />
      </form>
    </div>
  )
})

