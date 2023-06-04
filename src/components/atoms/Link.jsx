const Link = ({ linkTo, linkName, children }) => {
  return (
    <a className="underline" href={linkTo} target="_blank" rel="nopener noreferrer">{linkName}
      {children}
    </a>
  )
}

export default Link