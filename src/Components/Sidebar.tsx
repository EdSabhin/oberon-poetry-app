import React, { useState } from "react"

import { Old_Standard_TT } from "next/font/google"
import { SiApachecassandra } from "react-icons/si";

interface SidebarProps { }

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const Sidebar: React.FC<SidebarProps> = ({ }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-1/3 fixed inset-y-0 left-0 z-10 opacity-95 flex flex-col pt-12 pb-16 px-12 gap-12 bg-gradient-to-b from-stone-800 to-slate-800">
      <div className="flex flex-col gap-4">
         <div className="flex items-center gap-6"><h2 className={`${OldStandardTT.className} text-3xl text-stone-200`}>Search Sonnets</h2>
      <SiApachecassandra className="w-14 h-14 text-stone-200 animate-pulse-faster"/></div> 
      <input
        type="text"
        placeholder="Titles, stanzas, verses..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={`${OldStandardTT.className} text-md text-orange-900 py-2 px-4 mr-12 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 custom-cursor`}
      />
      </div>
     
      <ul>
        <p className={`${OldStandardTT.className} text-xl text-orange-100 py-2 mb-3 mr-12`}>Results</p>
        <p className={`${OldStandardTT.className} text-md text-orange-900 h-max py-2 px-4 mr-12 bg-stone-100 rounded-b-xl outline-none placeholder-stone-600 custom-cursor`}>Sonnet 134: Awesome Epic Poem Name <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus sunt, odio sed ea consectetur omnis pariatur dolorum. Provident cupiditate quo optio quod vitae dignissimos hic, beatae quos quaerat rerum.</p>
      </ul>
      <div className="h-max flex flex-col">
        <p className={`${OldStandardTT.className} text-xl text-orange-100 py-2 mb-3 mr-12`}>View all</p>
        <ul className="flex py-4 px-4 mr-12 gap-10 border border-stone-100 rounded-b-xl overflow-y-auto">
          <li className={`${OldStandardTT.className} text-md text-orange-200 `}>Sonnet 134: Awesome Name</li>
          <p onClick={() => ""} className={`${OldStandardTT.className} text-md text-stone-300 hover:underline underline-offset-4 decoration-stone-300 cursor-pointer`}>Read</p>
        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar
