import { Hono } from "hono";

const app = new Hono()

// これはどういうコードですか
// これは、GETリクエストを受け取り、リクエストされた名前を返すエンドポイントを作成しています。
app.get("/:name", (c) => {
    const name = c.req.param("name")
    return c.json({
        "your name is": name,
    })
})

export default app;