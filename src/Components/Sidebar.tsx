import React, { useState } from "react"

import { Poem } from "@/pages/ShakespearesDen"

import { Old_Standard_TT } from "next/font/google"
import { SiApachecassandra } from "react-icons/si"

interface SidebarProps {
  sidebar: boolean
  setSidebar: (value: boolean) => void
  poems: Poem[]
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const Sidebar = ({ sidebar, setSidebar, poems }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    const filteredSearch = poems.filter((poem) =>
      poem.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredPoems(filteredSearch)
  }

  // Close Sidebar
  const handleCloseSidebar = () => {
    setSidebar(false)
  }

  return (
    <div
      className={`w-[35%] fixed inset-y-0 left-0 z-10 opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-stone-800 to-slate-800`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center mt-12 gap-6">
          <h2 className={`${OldStandardTT.className} text-3xl text-stone-200`}>
            Search Sonnets
          </h2>
          <SiApachecassandra className="w-14 h-14 text-stone-200 animate-pulse-faster" />

          <p
            onClick={() => handleCloseSidebar()}
            className={`${OldStandardTT.className} absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-stone-300 font-bold hover:text-orange-200 hover:border-b hover:border-orange-100 rounded cursor-pointer  transition duration-300`}
          >
            X
          </p>
        </div>
        <input
          type="text"
          placeholder="Search titles, stanzas, verses..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={`${OldStandardTT.className} w-full text-md text-orange-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 custom-cursor`}
        />
      </div>
      <h3
        className={`${OldStandardTT.className} text-xl text-orange-100 py-2 mr-12 mb-4`}
      >
        Results
      </h3>
      <ul className="h-max flex flex-col mb-12 overflow-y-auto">
        <div
          className={`${OldStandardTT.className} h-max flex flex-col gap-6 text-md text-orange-900 py-2 px-4 mr-12 bg-stone-100 rounded-xl outline-none placeholder-stone-600 custom-cursor`}
        >
          {filteredPoems.map((poem, index) => (
            <div key={index}>
              <h4>{poem.title}</h4>
            </div>
          ))}
        </div>
      </ul>
      <h3
        className={`${OldStandardTT.className} text-xl text-orange-100 py-2 mr-12 mb-4`}
      >
        View all
      </h3>
      <div className="h-max flex flex-col overflow-y-auto">
        <ul className="flex flex-col py-8 px-6 mr-12 gap-10 border border-stone-100 rounded-xl ">
          {poems.map((poem: Poem, index: number) => {
            return (
              <div key={index} className="flex gap-12">
                <li
                  className={`${OldStandardTT.className} text-md text-orange-100 hover:text-orange-200 cursor-pointer`}
                >
                  {poem.title}
                </li>
                <p
                  onClick={() => ""}
                  className={`${OldStandardTT.className} text-md text-stone-300 hover:underline underline-offset-4 decoration-stone-300 cursor-pointer`}
                >
                  Read
                </p>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
