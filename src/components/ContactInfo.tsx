import { useContactInfoStore } from "@/stores/store";

// Replace the content of your React component here
interface ContactInfoProps {
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

function Component() {
  const contactInfoState = useContactInfoStore();

  const processedData = {
    phone: contactInfoState.phone,
    email: mailTo(contactInfoState.email || ''),
    linkedin: shortened(contactInfoState.linkedin || ''),
    github: shortened(contactInfoState.github || ''),
    website: shortened(contactInfoState.website || ''),
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
    <div className="flex flex-row justify-center space-x-4">
      {Object.entries(processedData).map((value, i) => {
        return <>
          {(i > 0 && value[1]) && <span>|</span>}
          <div key={value[0]} className="text-center text-nowrap">
            {value[1]}
          </div>
        </>
      })}
    </div>
  );
}

export default Component;
