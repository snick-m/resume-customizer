import { useContactInfoStore } from "@/stores/store";


export default function ContactInfoForm({ className }: { className?: string }) {
  const contactInfo = useContactInfoStore();

  return (
    <div className={"grid grid-flow-row grid-cols-2 justify-items-stretch content-start w-full gap-4 " + className}>
      <label htmlFor="phone" className="row-start-1 text-center">Phone Number</label>
      <input className="p-2 rounded-lg row-start-2 text-black"
        value={contactInfo.phone}
        name="phone"
        type="text" placeholder="Phone Number"
        onChange={(e) => contactInfo.setInfo({ phone: e.target.value })} />

      <label htmlFor="email" className="row-start-1 text-center">Email Address</label>
      <input className="p-2 rounded-lg row-start-2 text-black"
        value={contactInfo.email}
        name="email"
        type="email" placeholder="Email Address"
        onChange={(e) => contactInfo.setInfo({ email: e.target.value })} />

      <label htmlFor="linkedin" className="row-start-3 text-center">LinkedIn</label>
      <input className="p-2 rounded-lg row-start-4 text-black"
        value={contactInfo.linkedin}
        name="linkedin"
        type="text" placeholder="LinkedIn Profile Address"
        onChange={(e) => contactInfo.setInfo({ linkedin: e.target.value })} />

      <label htmlFor="website" className="row-start-3 text-center">Website</label>
      <input className="p-2 rounded-lg row-start-4 text-black"
        value={contactInfo.website}
        name="website"
        type="text" placeholder="Personal Website Link"
        onChange={(e) => contactInfo.setInfo({ website: e.target.value })} />
    </div>
  )
}