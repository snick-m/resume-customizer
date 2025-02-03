"use client";

import ContactInfo from "@/components/ContactInfo";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="resume text-sm">
      <h1 className="font-bold mb-6">Mushfiqur Rahman</h1>

      <ContactInfo
        phone="416-576-4190"
        email="mushfiqur.rahman@torontomu.ca"
        linkedin="https://linkedin.com/in/mushfiqrrm"
        github="https://github.com/snick-m" />
      
      <Education
        degree="Bachelor of Science"
        fieldOfStudy="Computer Science"
        school="Toronto Metropolitan University"
        startDate="September 2023"
        endDate="December 2025"
      />
    </main>
  );
}
