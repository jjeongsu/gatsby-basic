import React from 'react'
import Layout from '../components/Layout'
import { HeadFC } from 'gatsby'
import Seo from '../components/ Seo'

export default function AboutUs() {
  return (
    <Layout title="About us">
      <p> we are the happies sticker store</p>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Home" />
