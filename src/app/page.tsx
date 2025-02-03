"use client";

import ContactInfo from "@/components/ContactInfo";
import ContactInfoForm from "@/components/ContactInfoForm";
import { EducationList } from "@/components/EducationList";
import { ExperienceList } from "@/components/ExperienceList";

export default function Home() {
  // // addEducation({
  // //   degree: "Bachelor of Science",
  // //   fieldOfStudy: "Computer Science",
  // //   school: "Toronto Metropolitan University",
  // //   startDate: "September 2023",
  // //   endDate: "December 2025",
  // // });

  // // addEducation({
  // //   degree: "Bachelor of Science",
  // //   fieldOfStudy: "Computer Science",
  // //   school: "BRAC University",
  // //   startDate: "June 2021",
  // //   endDate: "December 2023",
  // // });

  return (
    <div className="flex flex-col xl:flex-row justify-center items-start gap-4">
      <ContactInfoForm />
      <div className="h-12"></div>
      <main className="resume text-sm p-4">
        <h1 className="font-bold mb-2 mt-6 text-4xl">Mushfiqur Rahman</h1>

        <div className="mx-4">
          <ContactInfo />

          <EducationList />

          <ExperienceList />
        </div>
      </main>
    </div>
  );
}
