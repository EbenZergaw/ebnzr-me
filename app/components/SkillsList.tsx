
import React from 'react'

function SkillsList() {

    const skills = `https://skillicons.dev/icons?i=html,css,js,typescript,tailwind,react,nextjs,nodejs,prisma,firebase,ps,figma,github,supabase,&perline=7`


  return (
    <div className='w-fit mx-auto lg:mx-0 mt-14'>
        <h2 className="text-primary font-semibold text-3xl">Skills</h2>
        <br />
        <img src={skills}></img>
    </div>
  )
}

export default SkillsList
