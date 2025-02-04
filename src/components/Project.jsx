import React from 'react'

const service = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing and user-friendly web designs."
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces."
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Developing robust server-side logic and database."
    },
    {
        id: 4,
        title: "Mobile app Design",
        description: ""
    },
    {
        id: 5,
        title: "Mobile Development",
        description: ""
    },
    {
        id: 6,
        title: "Software Development",
        description: ""
    }
]

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
        <div  className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12"> My Projects</h2>
        </div>
    </div>
  )
}

export default Project