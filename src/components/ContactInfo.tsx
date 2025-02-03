import { useContactInfoStore } from "@/stores/store";
import { Fragment } from "react";

// Replace the content of your React component here
interface ContactInfoProps {
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

function ContactInfoComponent() {
  const contactInfo = useContactInfoStore();

  const processedData = {
    phone: contactInfo.phone,
    email: mailTo(contactInfo.email || ''),
    linkedin: shortened(contactInfo.linkedin || ''),
    github: shortened(contactInfo.github || ''),
    website: shortened(contactInfo.website || ''),
  };

  function mailTo(email: string) {
    if (email == '') return null;
    return <a className="underline" href={`mailto:${email}`}>{email}</a>;
  }

  function shortened(url: string) {
    if (url == '') return null;
    return <a className="underline" href={url}>{url.replace(/(^\w+:|^)\/\/(www\.)?/, '')}</a>;
  }

  return (
    <div className="flex flex-row justify-center space-x-1">
      {Object.entries(processedData).map((value, i) => {
        return <Fragment key={i}>
          {(i > 0 && value[1]) && <span>|</span>}
          <div key={value[0]} className="text-center text-nowrap">
            {value[1]}
          </div>
        </Fragment>
      })}
    </div>
  );
}

export default ContactInfoComponent;
