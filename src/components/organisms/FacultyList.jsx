import Link from '../atoms/Link'

const FacultyList = ({ items }) => {
  return (
    <div className="faculty-list flex flex-wrap px-6 lg:px-0 lg:w-4/5 mx-auto justify-around gap-12">
      {
        items.map(item => (
          <div key={item.link}>
            <Link linkTo={item.link}>
							<img className="w-96 h-auto" src={item.pic} alt={item.picAlt} loading="lazy" />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default FacultyList