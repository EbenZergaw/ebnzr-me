
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

function SkillsList() {

    // const skills = `[![My Skills](https://skillicons.dev/icons?i=js,html,css,typescript,react,nextjs,firebase,ps,prisma,tailwind,vscode,nodejs&perline=6)](https://skillicons.dev)`

    const skills = {
        markdown: "[![My Skills](https://skillicons.dev/icons?i=js,html,css,typescript,react,nextjs,firebase,ps,prisma,tailwind,vscode,nodejs&perline=6)](https://skillicons.dev)"
    }

  return (
    <div className='w-fit mx-auto lg:mx-0'>
        <h2 className="text-primary font-semibold text-3xl">Skills</h2>
        <br />
        <MDXRemote
            source={skills.markdown}>
        </MDXRemote>
    </div>
  )
}

export default SkillsList
