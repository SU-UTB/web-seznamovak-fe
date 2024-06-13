import Link from '../atoms/Link'

const DocsList = (documents: any) => {
  return (
    <div className="document-list">
      {documents.map((doc: any) => (
        <div className="doc-link" key={doc.title}>
          <Link linkTo={doc.file} linkName={doc.title} />
        </div>
      ))}
    </div>
  )
}

export default DocsList
