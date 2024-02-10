import db from "@/db"
import type { Post } from "@prisma/client"

export type EnrichedPost = Post & {
  dest: { slug: string }
  user: { name: string | null }
}

export function fetchPostsByDestSlug(slug: string): Promise<EnrichedPost[]> {
  return db.post.findMany({
    where: { dest: { slug } },
    include: {
      dest: { select: { slug: true } },
      user: { select: { name: true } },
    },
  })
}
