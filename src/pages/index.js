import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/PostList'

const IndexPage = props => {
  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={['redd', 'developer', 'technology', 'javascript', 'react']}
      />
      <PostList />
    </Layout>
  )
}

export default IndexPage