import Link from "next/link"
import type { Dest, Post, User } from "@prisma/client"
import type { EnrichedPost } from "@/db/queries/posts"

import paths from "@/config/paths"

interface PostListProps {
  fetchData: () => Promise<EnrichedPost[]>
}


export default async function PostList({fetchData}: PostListProps) {
  const posts = await fetchData()

  const renderedPosts = posts.map((post) => {
    const destSlug = post.dest.slug

    if (!destSlug) {
      throw new Error("Need a slug to link to a post")
    }

    return (
      <div key={post.id} className="border rounded p-2">
        <Link href={paths.destPost(destSlug, post.id)}>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-grap-400">By {post.user.name}</p>
          </div>
        </Link>
      </div>
    )
  })

  return renderedPosts
}
