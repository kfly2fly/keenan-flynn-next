"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import db from "@/db"

export async function editBook(id: number, desc: string) {
    await db.book.update({
      where: { id },
      data: { desc },
    })
    revalidatePath(`/books/${id}`)
    redirect(`/books/${id}`)
  }
  
  export async function deleteBook(id: number) {
    await db.book.delete({
      where: { id },
    })
  
    revalidatePath("/books")
    redirect("/books")
  }
  
  export async function createBook(
    formState: { message: string },
    formData: FormData
  ) {
    try {
      // Checks user's inputs to make sure they're valid
      const title = formData.get("title")
      const desc = formData.get("desc")
  
      if (typeof title !== "string" || title.length < 3) {
        return {
          message: "Title must be longer",
        }
      }
      if (typeof desc !== "string" || desc.length < 3) {
        return {
          message: "Description must be longer",
        }
      }
      // Create new record in database
      await db.book.create({
        data: {
          title,
          desc,
        },
      })
    } catch (err: unknown) {
      if (err instanceof Error) {
        return {
          message: err.message,
        }
      } else {
        return {
          message: "Something went wrong...",
        }
      }
    }
  
    revalidatePath("/books")
    // Redirect to Books page
    redirect("/books")
  }