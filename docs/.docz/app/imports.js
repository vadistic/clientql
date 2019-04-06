export const imports = {
  'src/hello-world.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-hello-world" */ 'src/hello-world.mdx'),
}
