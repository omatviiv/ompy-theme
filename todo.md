[//]: # ()
* snapshot test components
- scp2 lodash vulnerability (not critical because scp2 is only used for
  deploy script)
  https://github.com/spmjs/node-scp2/issues/116
  https://github.com/spmjs/node-scp2/pull/123

# 4.1.1 -

# 4.1.0 - fix p html element issue
+ release 4.1.0
+ use ...rest instead passing className
  since rest will include all props (event handlers, etc.) not just className
+ support extending components via styled components
+ change Component html element p => div

# 4.0.2 - make Demo Article Header a bit smaller
+ release
+ make Demo Article Header a bit smaller

# 4.0.1 - bugfix
+ release
+ bugfix - don't use aliases in non-demo code

# 4.0.0 - reorganize components
+ release
+ update docs
+ change webpack dev server port to 9001
+ group components related to Demo Article
+ add header components H2 - H6
+ fix vulnerabilities

# 3.0.1 - initial component version
+ host theme demo
+ update docs with specific instructions for a component(s)
+ fix imports paths

# 3.0.0 - initial component version
+ make demo page
+ implement theme
+ fix jest issue with import Enzyme
+ update package.json with project specific data
  name (unique on npmjs), description, repository, bugs and homepage urls
