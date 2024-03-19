const sidebarProps = {
  shakespeare: {
    playwright: {
      sidebarClass:
        "w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-slate-950 to-stone-800 slide-in-left",
      searchSonnets: "text-3xl text-stone-200",
      eyeCon: "w-14 h-14 text-stone-200 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-stone-300 font-bold hover:text-orange-200 hover:border-b hover:border-orange-100 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-full text-md text-orange-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 text-cursor-playwright",
      subsection: "text-xl text-orange-100 py-2 mr-12 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-stone-100 text-md text-orange-900 rounded-xl overflow-y-auto",
      resultsTitle:
        "py-2 px-3 ml-2 rounded-lg hover:bg-gradient-to-r hover:from-stone-300 hover:to-orange-200 underline underline-offset-4 cursor-pointer",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-12 gap-10 border border-stone-100 rounded-xl bg-stone-900",
      poemTitle: "text-md text-orange-100 hover:text-orange-200 cursor-pointer",
      readPoem:
        "text-md text-stone-300 hover:underline underline-offset-4 decoration-stone-300 cursor-pointer",
    },
    bloodNight: {
      sidebarClass:
        "w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-black to-rose-950 slide-in-left",
      searchSonnets: "text-3xl text-stone-200",
      eyeCon: "w-14 h-14 text-rose-400 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-stone-300 font-bold hover:text-rose-400 hover:border-b hover:border-rose-400 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-full text-md text-rose-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 text-cursor-bloodNight",
      subsection: "text-xl text-rose-300 py-2 mr-12 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-stone-100 text-md text-rose-900 rounded-xl overflow-y-auto",
      resultsTitle:
        "py-2 px-3 ml-2 rounded-lg hover:bg-gradient-to-r hover:from-stone-300 hover:to-rose-300 underline underline-offset-4 cursor-pointer",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-12 gap-10 border border-stone-100 rounded-xl bg-black",
      poemTitle: "text-md text-rose-200 hover:text-rose-300 cursor-pointer",
      readPoem:
        "text-md text-stone-300 hover:underline underline-offset-4 decoration-stone-300 cursor-pointer",
    },
  },
  dickinson: {
    sylph: {
      sidebarClass:
        "w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-slate-950 to-stone-800 slide-in-left",
      searchSonnets: "text-3xl text-stone-200",
      eyeCon: "w-14 h-14 text-stone-200 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-stone-300 font-bold hover:text-orange-200 hover:border-b hover:border-orange-100 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-full text-md text-orange-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 text-cursor-playwright",
      subsection: "text-xl text-orange-100 py-2 mr-12 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-stone-100 text-md text-orange-900 rounded-xl overflow-y-auto",
      resultsTitle:
        "py-2 px-3 ml-2 rounded-lg hover:bg-gradient-to-r hover:from-stone-300 hover:to-orange-200 underline underline-offset-4 cursor-pointer",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-12 gap-10 border border-stone-100 rounded-xl bg-stone-900",
      poemTitle: "text-md text-orange-100 hover:text-orange-200 cursor-pointer",
      readPoem:
        "text-md text-stone-300 hover:underline underline-offset-4 decoration-stone-300 cursor-pointer",
    },
    elegy: {
      sidebarClass:
        "w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-slate-950 to-stone-800 slide-in-left",
      searchSonnets: "text-3xl text-stone-200",
      eyeCon: "w-14 h-14 text-stone-200 animate-pulse-faster",
      closeSidebar:
        "absolute top-[4%] right-[9%] py-1 px-2 text-2xl text-stone-300 font-bold hover:text-orange-200 hover:border-b hover:border-orange-100 rounded cursor-pointer transition duration-300",
      inputClass:
        "w-full text-md text-orange-900 py-2 px-4 mr-12 mb-8 bg-stone-100 rounded-br-full rounded-l-lg outline-none placeholder-stone-600 text-cursor-playwright",
      subsection: "text-xl text-orange-100 py-2 mr-12 mb-4",
      resultsContainer:
        "flex flex-col gap-6 pt-4 pb-5 px-4 mr-12 bg-stone-100 text-md text-orange-900 rounded-xl overflow-y-auto",
      resultsTitle:
        "py-2 px-3 ml-2 rounded-lg hover:bg-gradient-to-r hover:from-stone-300 hover:to-orange-200 underline underline-offset-4 cursor-pointer",
      allPoemsContainer:
        "flex flex-col py-8 px-6 mr-12 gap-10 border border-stone-100 rounded-xl bg-stone-900",
      poemTitle: "text-md text-orange-100 hover:text-orange-200 cursor-pointer",
      readPoem:
        "text-md text-stone-300 hover:underline underline-offset-4 decoration-stone-300 cursor-pointer",
    },
  },
}

export default sidebarProps
