const footerProps = {
  shakespeare: {
    playwright: {
      footerClass: `w-full flex flex-col items-center relative pt-10 pb-24 px-3 md:px-48 bg-gradient-to-bl md:bg-gradient-to-r from-gray-950 via-slate-800 to-gray-950 tracking-wider`,
      footerContainer:
        "flex flex-col md:flex-row md:items-start px-6 md:pl-10 mb-8 md:mb-0 gap-20 md:gap-30 border-x border-orange-300 border-opacity-10",
      titleClass:
        "text-center md:text-start py-4 px-4 leading-[3.5rem] md:leading-[4rem] text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-orange-300 from-[10%] to-amber-200",
      quoteClass:
        "flex flex-col text-center py-3 md:py-0 md:px-4 text-2xl text-slate-300 tracking-wider leading-[3rem]",
      quoteVerseClass:
        "flex pt-10 md:px-4 text-2xl text-verse-animation cursor-pointer",
      quoteWorkClass: "p-2 text-indigo-300",
      attributions:
        "mb-2 pr-2 text-xl text-orange-200 underline underline-offset-4 decoration-1 decoration-orange-300",
      owner:
        "text-center md:text-start mb-5 text-xl text-indigo-200 hover:text-amber-100",
      category: "w-max px-3 text-amber-100 border-x border-orange-400",
      links: `text-center text-lg md:text-start text-indigo-200
        hover:text-orange-100 rounded italic transition ease-in-out `,
    },
    bloodNight: {
      footerClass: `w-full flex flex-col items-center relative pt-10 pb-24 px-3 md:px-48 bg-gradient-to-bl md:bg-gradient-to-r from-black via-rose-950 to-black tracking-wider`,
      footerContainer:
        "flex flex-col md:flex-row md:items-start px-6 md:pl-10 mb-8 md:mb-0 gap-20 md:gap-30 border-x border-rose-200 border-opacity-10",
      titleClass:
        "text-center md:text-start py-4 px-4 leading-[3.5rem] md:leading-[4rem] text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-rose-800 to-[85%] to-stone-500",
      quoteClass:
        "flex flex-col text-center py-3 md:py-0 md:px-4 text-2xl text-rose-100 tracking-wider leading-[3rem]",
      quoteVerseClass:
        "flex pt-10 md:px-4 text-2xl text-verse-animation cursor-pointer",
      quoteWorkClass: "p-2 text-stone-400",
      attributions:
        "mb-2 pr-2 text-xl text-stone-400 underline underline-offset-4 decoration-1 decoration-stone-500",
      owner:
        "text-center md:text-start mb-5 text-xl text-stone-400 hover:text-rose-300",
      category: "w-max px-3 text-rose-300 border-x border-rose-400",
      links: `text-center text-lg md:text-start text-stone-400 hover:text-rose-200 rounded italic transition ease-in-out`,
    },
  },
  dickinson: {
    sylph: {
      footerClass: `w-full flex flex-col items-center relative pt-10 pb-24 px-3 md:px-48 bg-gradient-to-bl md:bg-gradient-to-b from-indigo-100 via-rose-200 to-purple-200 tracking-wider`,
      footerContainer:
        "flex flex-col md:flex-row md:items-start px-6 md:pl-10 mb-8 md:mb-0 gap-20 md:gap-30 border-x border-indigo-400 border-opacity-30",
      titleClass:
        "text-center md:text-start py-4 px-4 leading-[3.5rem] md:leading-[4rem] text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-rose-700",
      quoteClass:
        "flex flex-col text-center md:text-start py-3 md:py-0 md:px-4 text-2xl text-amber-700 tracking-wider leading-[3rem]",
      quoteVerseClass:
        "flex pt-12 pb-14 md:px-4 text-2xl text-verse-cyan-animation cursor-pointer",
      attributions:
        "mb-2 pr-2 text-xl text-indigo-700 underline underline-offset-4 decoration-1 decoration-indigo-300",
      owner:
        "text-center md:text-start mb-5 text-xl text-neutral-900 hover:text-rose-500",
      category: "w-max px-3 text-indigo-500 border-x border-indigo-500",
      links: `text-center text-lg md:text-start text-neutral-900 hover:text-rose-500 rounded italic transition ease-in-out`,
    },
    elegy: {
      footerClass: `w-full flex flex-col items-center relative pt-10 pb-24 px-3 md:px-48 bg-gradient-to-bl md:bg-gradient-to-b from-cyan-950 via-cyan-600 to-neutral-950 tracking-wider`,
      footerContainer:
        "flex flex-col md:flex-row md:items-start px-6 md:pl-10 mb-8 md:mb-0 gap-20 md:gap-30 border-x border-lime-300 border-opacity-30",
      titleClass:
        "text-center md:text-start py-4 px-4 leading-[3.5rem] md:leading-[4rem] text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-300",
      quoteClass:
        "flex flex-col text-center py-3 md:py-0 md:px-4 text-2xl text-emerald-200 tracking-wider leading-[3rem]",
      quoteVerseClass:
        "flex py-12 md:px-4 text-2xl text-verse-indigo-animation cursor-pointer",
      attributions:
        "mb-2 pr-2 text-xl text-cyan-400 underline underline-offset-4 decoration-1 decoration-lime-300",
      owner:
        "text-center md:text-start mb-5 text-xl text-neutral-300 hover:text-teal-200",
      category: "w-max px-3 text-cyan-400 border-x border-lime-300",
      links: `text-center text-lg md:text-start text-neutral-300 hover:text-teal-200 rounded italic transition ease-in-out`,
    },
  },
}

export default footerProps
