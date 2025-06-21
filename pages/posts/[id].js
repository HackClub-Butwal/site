import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import Card from '../../components/Card'
import { Text, Button } from 'theme-ui'
import Link from 'next/link'

export default function PostDetail() {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err))
  }, [id])

  if (!post) {
    return <Text>Loading post...</Text>
  }

  return (
    <Layout>
      <PageTitle title={`Post ${post.id}`} />
      <Card>
        <Text as="h2" sx={{ mb: 2, fontWeight: 'bold' }}>{post.title}</Text>
        <Text>{post.body}</Text>
      </Card>
      <Link href="/posts" legacyBehavior passHref>
        <Button as="a" sx={{ mt: 3 }}>Back to Posts</Button>
      </Link>
    </Layout>
  )
}
