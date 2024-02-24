import { Skeleton } from "@/components/ui/skeleton"
 
export function LoadingMarkdown() {
  return (
    <div className="flex flex-col space-y-3 items-center w-full max-w-[800px]">
      <Skeleton className="h-[50px] w-full rounded-xl mb-2" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}