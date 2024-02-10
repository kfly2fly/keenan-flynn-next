import Link from "next/link";
import db from "@/db";
import paths from '@/config/paths'

export default async function DestList() {
    const dests = await db.dest.findMany()

    const renderedDests = dests.map((dest) => {
        return (
            <div key={dest.id}>
                <Link href={paths.destSlug(dest.slug)}>
                    <div>
                        {dest.slug}
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="flex flex-row flex-wrap gap-2">
            {renderedDests}
        </div>
    )
}