'use client'

const Project = ({params}: any) => {
    console.log(params)
  return (
    <div>
        Projects
        <h1>{params.all.join(',')}</h1>
    </div>
  )
}

export default Project