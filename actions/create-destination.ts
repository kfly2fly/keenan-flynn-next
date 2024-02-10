"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/auth/auth"
import db from "@/db"
import type { Dest } from "@prisma/client"
import { z } from "zod"

import paths from "@/config/paths"

const createDestinationSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
})

interface CreateDestFormState {
  errors: {
    name?: string[]
    description?: string[]
    _form?: string[]
  }
}

export async function createDestination(
  formState: CreateDestFormState,
  formData: FormData
): Promise<CreateDestFormState> {
  const result = createDestinationSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  })

  const session = await auth()
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this."],
      },
    }
  }

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  let dest: Dest
  try {
    dest = await db.dest.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      }
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      }
    }
  }
  revalidatePath("/travel")
  redirect(paths.destSlug(dest.slug))
}
