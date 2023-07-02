import { AnalyticsEvents, Firebase } from '../../utils/firebase'

const Link = ({ linkTo, linkName, children, onClick }) => {
  return (
    <a
      className="underline"
      href={linkTo}
      target="_blank"
      rel="nopener noreferrer"
      onClick={onClick}
    >
      {linkName}
      {children}
    </a>
  )
}

export default Link
