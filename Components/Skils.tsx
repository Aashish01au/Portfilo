import React from 'react'
import Skilsitem from './Skilsitem'
import SkilsLanguage from './SkilsLanguage'

const Skils = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education & <span className='text-yellow-400'>Skills</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
    <div>
      <Skilsitem title="Diploma in CSE" year="2018-2021" institues="SRM Global Group of Professional Institutions" place=" Naraingadh Ambala Haryana INDIA"/>
      <Skilsitem title="Front-End Developer" year="2023 [Feb-Aug]" institues="Broadway Infosys IT Learning Center Nepal"  place=" Tinkune Kathmandu NEPAL "/>
      <SkilsLanguage 
      skill1="HTML"
      skill2="CSS"
      skill3="Bootstrap"
      skill4="Tailwind"
      skill5="Ract vue.js"
      skill6="Node.js"
      skill7="Redux"
      level1="w-[91%]"
      level2="w-[55%]"
      level3="w-[82%]"
      level4="w-[64%]"
      level5="w-[77%]"
      level6="w-[85%]"
      level7="w-[93%]"
      />
    </div>
    <div>
      <Skilsitem  title="Java Software Developer" year="2023(Aug)-2024(Jan) " institues="Broadway Infosys IT Learning Center Nepal"  place="  Tinkune Kathmandu NEPAL "/>
      <Skilsitem  title="Back-End Developer" year="2023-2024 " institues="Broadway Infosys IT Learning Center Nepal"  place="  Tinkune Kathmandu NEPAL "/>
      <SkilsLanguage 
       skill1="Java"
       skill2="Spring Boot"
       skill3="Next.js"
       skill4="Hibernate (ORM)"
       skill5="Postman"
       skill6="AWS"
       skill7="Docker"
       level1="w-[71%]"
       level2="w-[95%]"
       level3="w-[86%]"
       level4="w-[94%]"
       level5="w-[75%]"
       level6="w-[92%]"
       level7="w-[82%]"
      />
    </div>
      </div>
    </div>
  )
}

export default Skils