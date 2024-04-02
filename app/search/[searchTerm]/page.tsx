import getSearchResult from "@/lib/getSearchResult"

type Params = {
  params: {
    searchTerm: string
  }
}

export default async function page({ params: { searchTerm } }: Params) {
  const wikiData: Promise<SearchResult> = getSearchResult(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  const content = (
    <main className="bg-slate-200 mx-auto py-1">
      {results
        ? Object.values(results).map(result => {
          return <p key={result.pageid}>{JSON.stringify(result)}</p>
        })
        : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      }
    </main>
  )

  return content
}