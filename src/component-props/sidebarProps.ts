const sidebarProps = {
  shakespeare: {
    playwright: {
      sidebarClass: `w-[35%] fixed inset-y-0 left-0 z-10 !opacity-90 flex flex-col items-start pt-12 pb-16 pl-12 bg-gradient-to-b from-slate-950 to-stone-800 slide-in-left`,
      searchSonnets: "text-3xl text-stone-200",
      eyeCon: "w-14 h-14 text-stone-200 animate-pulse-faster",
      closeSidebar: "s",
      inputClass: "dss",
      results: "",
      resultsContainer: "",
    },
    bloodNight: {
      navClass: "w-full p-8 bg-gradient-to-r from-black via-rose-950 to-black",
      linkClass:
        "pb-1 px-2  text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 hover:underline hover:decoration-1 hover:decoration-rose-900 hover:underline-offset-4",
    },
  },
  dickinson: {
    sylph: {
      navClass:
        "w-full p-8 bg-gradient-to-r from-indigo-100 via-rose-100 to-indigo-100 text-amber-700",
      linkClass:
        "pb-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-teal-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-900 hover:to-teal-950 hover:underline decoration-1 hover:decoration-rose-800 hover:underline-offset-4",
    },
    elegy: {
      navClass:
        "w-full p-8 bg-gradient-to-r from-cyan-700 via-cyan-950 to-cyan-700 text-amber-700",
      linkClass:
        "pb-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-lime-400 hover:underline decoration-1 hover:decoration-emerald-500 hover:underline-offset-4",
    },
  },
}

export default sidebarProps
