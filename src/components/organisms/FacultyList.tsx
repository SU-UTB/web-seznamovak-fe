import React from 'react'
import Link from '../atoms/Link'

interface FacultyItem {
  link: string
  pic: string
  picAlt: string
}

interface FacultyListProps {
  items: FacultyItem[]
}

const FacultyList: React.FC<FacultyListProps> = ({ items }) => {
  return (
    <div className="faculty-list flex flex-wrap px-6 lg:px-0 lg:w-4/5 mx-auto justify-around gap-12">
      {items.map((item) => (
        <div key={item.link}>
          <Link linkTo={item.link} linkName="">
            <img
              className="w-96 h-auto"
              src={item.pic}
              alt={item.picAlt}
              loading="lazy"
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default FacultyList
