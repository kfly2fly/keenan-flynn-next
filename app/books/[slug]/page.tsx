import Image from "next/image"
import { StarBorder } from "@mui/icons-material"
import Rating from "@mui/material/Rating"

export const revalidate = 3600


import { BOOK_DATA } from "../book-data"

interface BookShowPageProps {
  params: {
    slug: string
  }
}

export default async function BookShowPage(props: BookShowPageProps) {
  const book = BOOK_DATA.find((x) => x.url === props.params.slug)

  if (!book) {
    console.log("DOES NOT EXIST")
    return <div>BOOK DOES NOT EXIST</div>
  } else {
    return (
      <main className="container mx-auto relative my-4 md:my-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center md:items-start">
          <div className="flex flex-col w-3/4 md:w-1/3">
            <div className="">
              <Image
                alt={book?.image.imageAlt}
                src={book?.image.coverImage}
                width={425}
                height={638}
              />
            </div>
          </div>
          <div className="flex flex-col md:w-2/3 gap-4">
            <div>
              <h1 className="font-extrabold text-xl md:text-4xl text-center md:text-left">
                {book?.title}
              </h1>
              <h3 className="font-semibold text-l md:text-2xl text-center md:text-left text-muted-foreground">
                {book?.author}
              </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-md text-sm md:text-lg text-center md:text-left text-muted-foreground">
                {book?.date_finished.toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <Rating
                className="pr-0 md:pr-16"
                name="read-only"
                value={book?.rating}
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarBorder
                    fontSize="inherit"
                    className="opacity-100 fill-slate-700"
                  />
                }
              />
            </div>
            <div className="flex flex-col gap-4 text-sm md:text-base">
              {book?.summary}
            </div>
          </div>
        </div>
      </main>
    )
  }
}
