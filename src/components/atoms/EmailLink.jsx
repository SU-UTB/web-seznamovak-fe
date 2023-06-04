const EmailLink = ({ email }) => {
  return (
    <a className="block mb-3 underline" href={`mailto:${email}`}>{email}</a>
  )
}

export default EmailLink