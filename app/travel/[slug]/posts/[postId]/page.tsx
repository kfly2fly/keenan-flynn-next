import Link from "next/link"

import paths from "@/config/paths"
import PostShow from "@/components/travel/post-show"

interface PostShowPageProps {
  params: {
    slug: string
    postId: string
  }
}


export default async function PostShowPage({ params }: PostShowPageProps) {
    const { slug, postId} = params

  return (
    <div className="space-y-3">
        {/* <Link className="underline decoration-solid" href={paths.destSlug(slug)}>
            {"< "} Back to {slug} 
        </Link>
        <PostShow postId={postId}/> */}
    </div>
  )
}
