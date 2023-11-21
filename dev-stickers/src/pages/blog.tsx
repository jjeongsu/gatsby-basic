import React from 'react'
import Layout from '../components/Layout'
import { HeadFC } from 'gatsby'
import Seo from '../components/ Seo'
function Blog() {
  return (
    <Layout title="welcom to DevStickers">
      <div>welcome to my blog</div>
    </Layout>
  )
}
export default Blog

export const Head: HeadFC = () => <Seo title="Home" />
