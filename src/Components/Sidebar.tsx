import React, { useState } from "react"

import { Poem } from "@/pages/ShakespearesDen"

import { Old_Standard_TT } from "next/font/google"
import { SiApachecassandra } from "react-icons/si"
import sidebarProps from "@/component-props/sidebarProps"

interface SidebarProps {
  setSidebar: (value: boolean) => void
  poems: Poem[]
  handlePoemClick: (id: string | undefined) => void
  theme: string
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const Sidebar = ({
  setSidebar,
  poems,
  handlePoemClick,
  theme,
}: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [noMatches, setNoMatches] = useState(false)

  const handleSearchUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setShowResults(event.target.value !== "")
    filterSearch(event.target.value)
  }

  const [searchResults, setSearchResults] = useState<Poem[]>([])

  const filterSearch = (searchTerm:string) => {
    searchTerm = searchTerm.toLowerCase().trim()
    if (searchTerm === "") {
      setSearchResults([])
      return
    }
    const filterText = poems.filter((poem) =>
      poem.lines.some((line) => line.toLowerCase().includes(searchTerm)),
    )
    setSearchResults(filterText)
    setNoMatches(filterText.length === 0)
     if (filterText.length === 0) {
        setShowResults(false); 
    } else if (filterText.length !== 0) {
        setShowResults(true); 
    }
  }

  // Close Sidebar
  const handleCloseSidebar = () => {
    setSidebar(false)
  }

  /* Theme */
  let sidebarClass
  let searchSonnets
  let eyeCon
  let closeSidebar
  let inputClass
  let results

  switch (theme) {
    case "playwright":
      ;({
        sidebarClass,
        searchSonnets,
        eyeCon,
        closeSidebar,
        inputClass,
        results,
      } = sidebarProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ sidebarClass, searchSonnets } = sidebarProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({ sidebarClass, searchSonnets } = sidebarProps.dickinson.sylph)
      break
    case "elegy":
      ;({ sidebarClass, searchSonnets } = sidebarProps.dickinson.elegy)
      break
  }

  return (
    <div className={`${OldStandardTT.className} ${sidebarClass}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center mt-12 gap-6">
          <h2 className={searchSonnets}>Search Sonnets</h2>
          <SiApachecassandra className={eyeCon} />

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
      
      <div>
        {noMatches && (
        <h3
          className={`${OldStandardTT.className} text-xl text-rose-400 py-2 mr-12 mb-4`}
        >
          No matches found. Query anew.
        </h3>
      )}
      {showResults && (
        <div>
          <h3
            className={`${OldStandardTT.className} text-xl text-orange-100 py-2 mr-12 mb-4`}
          >
            Results
          </h3>
          <div className="h-[9.5rem] flex flex-col mb-12">
            <ul
              className={`${OldStandardTT.className} flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-stone-100 rounded-xl overflow-y-auto`}
            >
              {searchResults.map((poem, id) => (
                <div key={id}>
                  <h3 className="text-md text-orange-900">
                    Matches in:
                    <span
                      onClick={() => handlePoemClick(poem.id)}
                      className="py-2 px-3 ml-2 rounded-lg hover:bg-gradient-to-r hover:from-stone-300 hover:to-orange-200 underline underline-offset-4 cursor-pointer"
                    >{`${poem.title.split(":")[0].trim()}`}</span>
                  </h3>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
      </div>
      

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
