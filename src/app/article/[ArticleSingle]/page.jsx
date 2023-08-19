async function getData(url) {
    const res = await fetch('https://enesbuyuk.com/api/coderistan/article/'+url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      //throw new Error('Failed to fetch data')
      data.title = ""
      data.content= ""
    }
   
    return res.json()
  }
   
  export default async function ArticleSinglePage({params}) {
    const data = await getData(params.ArticleSingle)
   
    return (
        <article>
            <h1 className="TextCenter">{data.Title}</h1>
            <div className="ArticleContent">
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </article>
    )
  }