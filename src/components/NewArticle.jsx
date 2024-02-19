const NewArticle = ( {title, text} ) => {
  return (
    <article className="h-[140px] lg:h-[170px] border-b-2 border-GrayishBlue py-7 lg:py-4 last:border-none text-[20px] mb-3 font-bold">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold">{ title }</h2>
        <p className="text-[15px]">{ text }</p>
    </article>
  )
}

export default NewArticle