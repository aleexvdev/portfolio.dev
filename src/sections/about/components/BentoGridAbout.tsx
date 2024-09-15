import React from 'react'
import { ProfileCard } from './ProfileCard'
import { SkillsCard } from './SkillsCard'
import { PersonalSideCard } from './PersonalSideCard'
import { WorkCard } from './WorkCard'
import { EducationCard } from './EducationCard'
import { UbicationCard } from './UbicationCard'

export const BentoGridAbout = () => {
  return (
    <div className="grid p-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-6 h-full w-full gap-y-4 md:gap-4">
      <ProfileCard />
      <PersonalSideCard />
      <SkillsCard />
      <WorkCard />
      <EducationCard />
      <UbicationCard />
    </div>
  )
}
