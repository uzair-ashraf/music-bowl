export default function requireAuth(ctx, isServer) {
  if (!isServer) return
  if (!ctx.req.session.userId) {
    ctx.res.redirect('/login')
    ctx.res.end()
  }
}
