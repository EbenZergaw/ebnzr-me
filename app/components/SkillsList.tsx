
import React from 'react'

function SkillsList() {

    const skills = `https://skillicons.dev/icons?i=js,html,css,typescript,react,nextjs,firebase,ps,prisma,tailwind,vscode,nodejs&perline=6`


  return (
    <div className='w-fit mx-auto lg:mx-0'>
        <h2 className="text-primary font-semibold text-3xl">Skills</h2>
        <br />
        <img src={skills}></img>
    </div>
  )
}

export default SkillsList
