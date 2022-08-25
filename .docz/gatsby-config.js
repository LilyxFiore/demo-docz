const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My App',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        port: 53226,
        p: 3001,
        root: '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My App',
        description: 'My awesome app using docz',
        host: 'localhost',
        separator: '-',
        paths: {
          root: '/Users/lpenac/Documents/Github-LPC/demo-docz',
          templates:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/node_modules/docz-core/dist/templates',
          docz: '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz',
          cache: '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz/.cache',
          app: '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz/app',
          appPackageJson:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/package.json',
          appTsConfig:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/tsconfig.json',
          gatsbyConfig:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/gatsby-config.js',
          gatsbyBrowser:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/gatsby-browser.js',
          gatsbyNode:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/gatsby-node.js',
          gatsbySSR:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/gatsby-ssr.js',
          importsJs:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz/app/imports.js',
          rootJs:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz/app/root.jsx',
          indexJs:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz/app/index.jsx',
          indexHtml:
            '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz/app/index.html',
          db: '/Users/lpenac/Documents/Github-LPC/demo-docz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
