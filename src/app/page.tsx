"use client";

import AchievementForm from "@/components/AchievementForm";
import { AchievementList } from "@/components/AchievementList";
import ContactInfo from "@/components/ContactInfo";
import ContactInfoForm from "@/components/ContactInfoForm";
import EducationForm from "@/components/EducationForm";
import { EducationList } from "@/components/EducationList";
import ExperienceForm from "@/components/ExperienceForm";
import { ExperienceList } from "@/components/ExperienceList";
import ProjectForm from "@/components/ProjectForm";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {

  return (
    <div className="grid grid-flow-row grid-cols-2 xl:grid-flow-row justify-items-center items-center xl:items-start gap-4">
      <ContactInfoForm className="col-span-2" />
      <div className="col-span-2 w-full grid grid-flow-col gap-4">
        <EducationForm />
        <ExperienceForm />
      </div>
      <div className="col-span-2 w-full grid grid-flow-col gap-4">
        <ProjectForm />
        <AchievementForm />
      </div>
      <div className="h-12"></div>
      <main className="resume text-sm p-4 col-span-2">
        <h1 className="font-bold mb-2 mt-6 text-4xl">Mushfiqur Rahman</h1>

        <div className="mx-4">
          <ContactInfo />

          <EducationList />

          <ExperienceList />

          <ProjectList />

          <AchievementList />
        </div>
      </main>
    </div>
  );
}
