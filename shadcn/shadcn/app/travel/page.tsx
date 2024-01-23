import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import DestCreateForm from "@/components/travel/dest-create-form"

export default function TravelPage() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Favortite Destinations</h1>
      </div>
      <div>
        <DestCreateForm></DestCreateForm>
      </div>
    </div>
  )
}
