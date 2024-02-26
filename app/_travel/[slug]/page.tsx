import { fetchPostsByDestSlug } from "@/db/queries/posts"

import PostCreateForm from "@/components/travel/post-create-form"
import PostList from "@/components/travel/post-list"

interface DestShowPageProps {
  params: {
    slug: string
  }
}

export default function DestinationShowPage({ params }: DestShowPageProps) {
  const { slug } = params

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByDestSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div> */}
    </div>
  )
}
