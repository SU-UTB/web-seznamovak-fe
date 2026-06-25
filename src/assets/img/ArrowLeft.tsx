import React from 'react'

const ArrowLeft: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://w3.org"
      className="w-full h-full rounded-xl bg-lightPink text-darkPink"
    >
      <path
        d="M72 50H28M28 50L50 28M28 50L50 72"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeft
