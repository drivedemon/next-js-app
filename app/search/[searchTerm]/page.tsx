import getSearchResult from "@/lib/getSearchResult"
import Item from "./components/Item"

type Params = {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({ params: { searchTerm } }: Params) {
  const wikiData: Promise<SearchResult> = getSearchResult(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
    return {
      title: `${ displayTerm } Not Found`
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${ displayTerm }`
  }
}

export default async function page({ params: { searchTerm } }: Params) {
  const wikiData: Promise<SearchResult> = getSearchResult(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  const content = (
    <main className="max-w-lg text-white mx-auto py-1">
      {results
        ? Object.values(results).map(result => {
          return <Item key={result.pageid} result={result} />
        })
        : <h2 className="p-2 text-xl">{`${searchTerm.replaceAll('%20', ' ')} Not Found`}</h2>
      }
    </main>
  )

  return content
}