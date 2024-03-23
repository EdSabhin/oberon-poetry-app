const sidebarProps = {
  shakespeare: {
    playwright: {
      sidebarClass:
        "w-full md:w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-16 md:pt-12 pb-16 pl-12 bg-gradient-to-b from-slate-950 to-stone-800 slide-in-left",
      searchTitle:"text-2xl md:text-3xl text-stone-200",
      eyeCon: "w-12 h-12 md:w-14 md:h-14 text-stone-200 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-[1.3rem] md:text-2xl text-stone-300 font-bold hover:text-orange-200 hover:border-b hover:border-orange-100 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-[14.5rem] md:w-full text-md text-orange-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 text-cursor-playwright placeholder-common",
      subsection: "text-xl text-orange-100 py-2 mr-16 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-[2rem] md:mr-16 bg-stone-100 text-md text-orange-900 rounded-tl-xl rounded-bl-xl overflow-y-auto",
      resultsTitle:
        "mt-2 md:mx-10 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-slate-600 hover:to-indigo-950 hover:text-stone-200 underline underline-offset-4 cursor-pointer active:text-indigo-300",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-[2rem] md:mr-16 gap-10 border border-stone-400 rounded-tl-xl rounded-bl-xl bg-stone-900 overflow-y-auto",
      poemTitle:
        "text-md text-orange-100 hover:text-orange-200 cursor-pointer active:text-orange-300",
      readPoem:
        "hidden md:block text-md text-stone-300 hover:text-orange-200 hover:underline underline-offset-4 hover:decoration-orange-200 cursor-pointer",
    },
    bloodNight: {
      sidebarClass:
        "w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-black to-rose-950 slide-in-left",
      searchTitle: "text-3xl text-stone-200",
      eyeCon: "w-14 h-14 text-rose-400 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-stone-300 font-bold hover:text-rose-400 hover:border-b hover:border-rose-400 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-full text-md text-rose-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-900 text-cursor-bloodNight",
      subsection: "text-xl text-rose-300 py-2 mr-16 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-16 bg-stone-100 text-md text-rose-900 rounded-tl-xl rounded-bl-xl overflow-y-auto",
      resultsTitle:
        "mt-2 md:mx-10 py-2 px-3 rounded-lg hover:text-stone-200 hover:bg-gradient-to-r hover:from-black hover:to-rose-300 from-30% underline underline-offset-4 cursor-pointer",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-16 gap-10 border border-rose-300 rounded-tl-xl rounded-bl-xl bg-black overflow-y-auto",
      poemTitle: "text-md text-rose-200 hover:text-rose-300 cursor-pointer",
      readPoem:
        "text-md text-stone-300 hover:text-rose-300 hover:underline underline-offset-4 hover:decoration-rose-300 cursor-pointer",
    },
  },
  dickinson: {
    sylph: {
      sidebarClass:
        "w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-white to-white slide-in-left",
      searchTitle: "text-3xl text-neutral-950",
      eyeCon: "w-14 h-14 text-neutral-900 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-neutral-500 font-bold hover:text-neutral-950 hover:border-b hover:border-neutral-950 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-full text-md text-neutral-950 py-2 px-4 mr-12 mb-8 bg-neutral-100 rounded-br-full rounded-l-lg outline-none placeholder-neutral-950 border border-rose-200",
      subsection: "text-xl text-neutral-950 py-2 mr-12 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-neutral-600 text-md text-neutral-100 rounded-tl-xl rounded-bl-xl overflow-y-auto",
      resultsTitle:
        "mt-2 mx-10 py-2 px-3 rounded-lg hover:text-neutral-950  hover:bg-gradient-to-r hover:from-sky-100 hover:to-white underline underline-offset-4 cursor-pointer",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-12 gap-10 border border-rose-200 rounded-tl-xl rounded-bl-xl bg-neutral-100 overflow-y-auto",
      poemTitle: "text-md text-neutral-950 hover:text-rose-400 cursor-pointer",
      readPoem:
        "text-md text-neutral-950 hover:underline underline-offset-4 decoration-neutral-950 cursor-pointer",
    },
    elegy: {
      sidebarClass:
        "w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-cyan-950 to-teal-800 slide-in-left",
      searchTitle: "text-3xl text-neutral-100",
      eyeCon: "w-14 h-14 text-cyan-400 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-teal-500 font-bold hover:text-teal-300 hover:border-b hover:border-teal-300 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-full text-md text-teal-800 py-2 px-4 mr-12 mb-8 bg-neutral-100 rounded-br-full rounded-l-lg outline-none placeholder-emerald-900 text-cursor-elegy",
      subsection: "text-xl text-teal-300 py-2 mr-12 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-cyan-950 text-md text-teal-100 rounded-tl-xl rounded-bl-xl overflow-y-auto",
      resultsTitle:
        "mt-2 mx-10 py-2 px-3 rounded-lg hover:text-teal-300  hover:bg-gradient-to-r hover:from-cyan-900 hover:to-black underline underline-offset-4 cursor-pointer",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-12 gap-10 rounded-tl-xl rounded-bl-xl bg-black overflow-y-auto",
      poemTitle: "text-md text-cyan-100 hover:text-teal-300 cursor-pointer",
      readPoem:
        "text-md text-teal-100 hover:text-teal-300 hover:underline underline-offset-4 hover:decoration-teal-300 cursor-pointer",
    },
  },
}

export default sidebarProps
