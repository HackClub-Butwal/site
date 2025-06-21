import React, { useState, useEffect } from 'react'
import { Text } from 'theme-ui'
import Link from 'next/link'
import Card from './Card'

export default function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err) => console.error(err))
  }, [])

  if (!posts.length) {
    return <Text>Loading posts...</Text>
  }

  return (
    <>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  )
}

// Nested component
function PostListItem({ post }) {
  return (
    <Card sx={{ my: 2 }}>
      <Link href={`/posts/${post.id}`} legacyBehavior>
        <a style={{ textDecoration: 'none', color: 'inherit' }}>
          <Text sx={{ fontWeight: 'bold', mb: 1 }}>{post.title}</Text>
          <Text>{post.body.substring(0, 60)}...</Text>
        </a>
      </Link>
    </Card>
  )
}
