
import React from 'react'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import PostList from '../../components/PostList'

export default function PostsPage() {
  return (
    <Layout>
      <PageTitle title="Posts" />
      <PostList />
    </Layout>
  )
}
