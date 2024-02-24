import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw";


interface MarkdownProps {
  url: string
}

async function getMarkdown(url: string) {
  let res = await fetch(url)
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.text()
}

export default async function GithubMarkdown(props: MarkdownProps) {
  let terms = await getMarkdown(props.url)

  return (
    <div
      className="prose lg:prose-xl prose-invert w-full"
      data-color-mode="dark"
    >
       
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        // children={terms}
        className="w-full"
      >
        {terms}
      </ReactMarkdown>
       <div>{terms}</div>
    </div>
  )
}
