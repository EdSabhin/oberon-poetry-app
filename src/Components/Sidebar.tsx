import React, { useEffect, useState } from "react"

import { Poem } from "@/pages/ShakespearesDen"

import { Old_Standard_TT } from "next/font/google"
import { SiApachecassandra } from "react-icons/si"

interface SidebarProps {
  setSidebar: (value: boolean) => void
  poems: Poem[]
  handlePoemClick: (id: string | undefined) => void
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const Sidebar = ({ setSidebar, poems, handlePoemClick }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSearchUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const [searchResults, setSearchResults] = useState<Poem[]>([])

  const filterSearch = () => {
    setShowResults(true)

    const searchText = searchTerm.toLowerCase().trim()
    if (searchText === "") {
      setSearchResults([])
      return
    }
    const filterText = poems.filter((poem) =>
      poem.lines.some((line) => line.toLowerCase().includes(searchText)),
    )

    setSearchResults(filterText || [])
  }

  useEffect(() => {
    filterSearch()
  }, [searchTerm])

  // Close Sidebar
  const handleCloseSidebar = () => {
    setSidebar(false)
  }

  return (
    <div
      className={`w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-slate-950 to-stone-800 slide-in-left`}
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
          placeholder="Search stanzas, verses, words..."
          value={searchTerm}
          onChange={handleSearchUpdate}
          className={`${OldStandardTT.className} w-full text-md text-orange-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 text-cursor-playwright`}
        />
      </div>
      <h3
        className={`${OldStandardTT.className} text-xl text-orange-100 py-2 mr-12 mb-4`}
      >
        Results
      </h3>
      {searchResults && (
        <div className="h-[20rem] flex flex-col mb-12 overflow-y-auto">
          <ul
            className={`${OldStandardTT.className} flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-stone-100 rounded-xl overflow-y-auto`}
          >
            {showResults &&
              searchResults.map((poem, id) => (
                <div key={id}>
                  <h3 className="text-md text-orange-900">
                    Matches in:{" "}
                    <span
                      onClick={() => handlePoemClick(poem.id)}
                      className="py-2 px-3 ml-2 rounded-lg hover:bg-gradient-to-r hover:from-stone-300 hover:to-orange-200 underline underline-offset-4 cursor-pointer"
                    >{`${poem.title.split(":")[0].trim()}`}</span>
                  </h3>
                </div>
              ))}
          </ul>
        </div>
      )}
      <h3
        className={`${OldStandardTT.className} text-xl text-orange-100 py-2 mr-12 mb-4`}
      >
        View all
      </h3>
      <div className="h-full flex flex-col overflow-y-auto">
        <ul className="flex flex-col py-8 px-6 mr-12 gap-10 border border-stone-100 rounded-xl bg-stone-900">
          {poems.map((poem: Poem, index: number) => {
            return (
              <div key={index} className="flex gap-12">
                <li
                  onClick={() => handlePoemClick(poem.id)}
                  className={`${OldStandardTT.className} text-md text-orange-100 hover:text-orange-200 cursor-pointer`}
                >
                  {poem.title}
                </li>
                <p
                  onClick={() => handlePoemClick(poem.id)}
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
