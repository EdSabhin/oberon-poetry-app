const headerProps = {
  base: {
    shakepeareTitle: "On Shakespeare",
    shakespeareDescription: `"William Shakespeare's genius lies in his ability to capture the
          complexities of human emotions and motivations, and convey them
          through his characters' words and actions. His works demonstrate an
          unparalleled mastery of language and poetic form, showcasing his
          ability to create vivid imagery and use language to delightfully
          express a wide range of ideas and emotions. Shakespeare's works have
          endured for centuries because of their universal themes and enduring
          relevance, which continue to resonate with audiences today. His legacy
          has had a profound impact on the English language and literature, and
          his plays continue to be celebrated as some of the greatest works of
          art in human history."`,
    dickinsonTitle: "Emily D's Greatest Hits",
    dickinsonDescription: `"Emily Dickinson's legacy is profound and enduring, shaping the landscape of American literature for generations. As one of the most significant poets of the 19th century, her work defied conventions and explored themes of nature, love, death, and the human condition with unparalleled depth and complexity. Despite being relatively unknown during her lifetime, Dickinson's poetry has since garnered widespread acclaim for its innovative use of language, distinctive style, and keen insights into the human psyche. Her bold experimentation with form, punctuation, and syntax challenged traditional poetic norms and laid the groundwork for modernist poetry. Beyond her literary contributions, Dickinson's reclusive life and enigmatic persona have captured the imagination of scholars and readers alike, sparking countless interpretations and analyses of her work. Today, Dickinson's legacy endures as a testament to the power of individual expression and the timeless resonance of poetic genius."`,
  },
  shakespeare: {
    playwright: {
      headerClassName:
        "w-full flex flex-col items-start py-8 px-48 bg-gradient-to-b from-gray-700 to-stone-800 text-stone-200",
      h1ClassName:
        "text-7xl underline underline-offset-8 decoration-double decoration-1 decoration-amber-200 py-4 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-900",
      headerIcon: "/images/white-cat-gold-moon.svg",
    },
    bloodNight: {
      headerClassName:
        "w-full flex flex-col items-start py-8 px-48 bg-gradient-to-b from-black via-rose-950 to-black text-rose-100",
      h1ClassName:
        "text-7xl underline underline-offset-8 decoration-double decoration-1 decoration-rose-900 py-4 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 from-45% to-indigo-900",
      headerIcon: "/images/blood-moon-cat.svg",
    },
  },
  dickinson: {
    headerClassName:
      "w-full flex flex-col items-start py-8 px-48 bg-gradient-to-r from-indigo-100 to-rose-200 text-amber-700",
    h1ClassName:
      "text-7xl underline underline-offset-8 decoration-double decoration-1 decoration-rose-900 py-4 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-teal-800",
    headerIcon: "/images/black-cat.svg",
  },
}

export default headerProps
