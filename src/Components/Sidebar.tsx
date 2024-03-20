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

  const filterSearch = (searchTerm: string) => {
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
      setShowResults(false)
    } else if (filterText.length !== 0) {
      setShowResults(true)
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
  let subsection
  let resultsContainer
  let resultsTitle: string
  let allPoemsContainer
  let poemTitle: string
  let readPoem: string

  switch (theme) {
    case "playwright":
      ;({
        sidebarClass,
        searchSonnets,
        eyeCon,
        closeSidebar,
        inputClass,
        subsection,
        resultsContainer,
        resultsTitle,
        allPoemsContainer,
        poemTitle,
        readPoem,
      } = sidebarProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({
        sidebarClass,
        searchSonnets,
        eyeCon,
        closeSidebar,
        inputClass,
        subsection,
        resultsContainer,
        resultsTitle,
        allPoemsContainer,
        poemTitle,
        readPoem,
      } = sidebarProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({
        sidebarClass,
        searchSonnets,
        eyeCon,
        closeSidebar,
        inputClass,
        subsection,
        resultsContainer,
        resultsTitle,
        allPoemsContainer,
        poemTitle,
        readPoem,
      } = sidebarProps.dickinson.sylph)
      break
    case "elegy":
      ;({
        sidebarClass,
        searchSonnets,
        eyeCon,
        closeSidebar,
        inputClass,
        subsection,
        resultsContainer,
        resultsTitle,
        allPoemsContainer,
        poemTitle,
        readPoem,
      } = sidebarProps.dickinson.elegy)
      break
  }

  return (
    <div className={`${OldStandardTT.className} ${sidebarClass}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center mt-12 gap-6">
          <h2 className={searchSonnets}>Search Sonnets</h2>
          <SiApachecassandra className={eyeCon} />

          <p onClick={() => handleCloseSidebar()} className={closeSidebar}>
            X
          </p>
        </div>
        <input
          type="text"
          placeholder="Search stanzas, verses, words..."
          value={searchTerm}
          onChange={handleSearchUpdate}
          className={inputClass}
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
            <h3 className={subsection}>Results</h3>
            <div className="h-[9.5rem] flex flex-col mb-12">
              <ul className={resultsContainer}>
                {searchResults.map((poem, id) => (
                  <div key={id}>
                    <h3>
                      Matches in:
                      <span
                        onClick={() => handlePoemClick(poem.id)}
                        className={resultsTitle}
                      >{`${poem.title.split(":")[0].trim()}`}</span>
                    </h3>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <h3 className={subsection}>View all</h3>
      <div className="h-full flex flex-col overflow-y-auto">
        <ul className={allPoemsContainer}>
          {poems.map((poem: Poem, index: number) => {
            return (
              <div key={index} className="flex justify-between gap-12">
                <li
                  onClick={() => handlePoemClick(poem.id)}
                  className={poemTitle}
                >
                  {poem.title}
                </li>
                <p
                  onClick={() => handlePoemClick(poem.id)}
                  className={readPoem}
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
