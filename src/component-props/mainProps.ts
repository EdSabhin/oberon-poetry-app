const mainProps = {
  shakespeare: {
    playwright: {
      mainClass:
        "w-full flex flex-col items-start pt-8 pb-20 px-48 text-stone-200 bg-gradient-to-r from-black via-gray-500 to-black",
      title: "Oberon's House of Sonnets",
      titleClass:
        "text-6xl py-4 pr-2 pb-1 underline decoration-1 underline-offset-8 decoration-amber-300 decoration-solid text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-200 from-[10%] to-amber-200",
      musicPlayer: {
        class:
          "w-[15rem] h-[3rem] flex justify-start py-3 pl-8 pr-8 gap-5 text-stone-200 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-700 shadow-md rounded-br-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out",
        buttonClass: "hover:text-amber-400",
      },
      themeButton:
        "sm:text-blood-animation w-[15rem] p-3 pl-6 text-lg text-stone-200 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-r hover:from-stone-800 hover:via-rose-950 hover:to-stone-950  shadow-md shadow-stone-950 rounded-br-full hover:translate-x-2 transition ease-in-out delay-400 duration-500 group",
      poemCard: {
        class:
          "w-[77%] relative p-10 r-12 border-l-8 border-transparent bg-gradient-to-b from-slate-800 to-gray-600 hover:bg-gradient-to-b hover:from-stone-900 hover:via-stone-600 hover:to-stone-900 hover:border-amber-200 rounded-[3%] rounded-br-[35%] shadow-md shadow-stone-950 transition ease-in-out delay-400 hover:-translate-y-4 duration-300 group",
        poemButton:
          "absolute top-[6.4%] right-[-16.7%] group-hover:bg-gradient-to-br group-hover:from-stone-900 group-hover:to-stone-700 group-hover:text-stone-200",
        titleClass:
          "py-2 text-6xl underline group-hover:decoration-2 group-hover:decoration-amber-100 group-hover:underline-offset-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-900",
        authorClass: "pt-2 text-3xl text-yellow-100",
        verses:
          "text-color-animation p-1 rounded text-[1.6rem] transition-ease-in-out hover:scale-105 duration-300 tracking-wide",
      },
    },
    bloodNight: {
      mainClass:
        " w-full flex flex-col items-start pt-8 pb-20 px-48 text-stone-200 bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900",
      title: "Prospero's Grimoire",
      titleClass:
        "text-6xl py-4 pr-2 pb-1 underline decoration-1 underline-offset-8 decoration-rose-800 decoration-solid text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-rose-500 to-indigo-500",
      musicPlayer: {
        class:
          "w-[15rem] h-[3rem] flex justify-start py-3 pl-8 pr-8 gap-5 text-stone-200 bg-gradient-to-r from-stone-800 via-rose-950 to-black shadow-md rounded-br-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out",
        buttonClass: "hover:text-rose-500",
      },
      themeButton:
        "sm:text-blood-animation w-[15rem] p-3 pl-6 text-lg text-stone-200 bg-gradient-to-r from-stone-800 via-rose-950 to-stone-950 hover:bg-gradient-to-r hover:from-slate-800 hover:to-stone-800 shadow-md shadow-stone-950 rounded-br-full hover:translate-x-2 transition ease-in-out delay-400 duration-500 group",
      poemCard: {
        class:
          "w-[77%] relative p-10 r-12 border-l-8 border-transparent bg-gradient-to-b from-slate-800 to-gray-600 hover:bg-gradient-to-b hover:from-stone-900 hover:via-stone-600 hover:to-stone-900 hover:border-amber-200 rounded-[3%] rounded-br-[35%] shadow-md shadow-stone-950 transition ease-in-out delay-400 hover:-translate-y-4 duration-300 group",
        poemButton:
          "absolute top-[6.4%] right-[-16.7%] group-hover:bg-gradient-to-br group-hover:from-stone-900 group-hover:to-stone-700 group-hover:text-stone-200",
        titleClass:
          "py-2 text-6xl underline group-hover:decoration-2 group-hover:decoration-amber-100 group-hover:underline-offset-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-900",
        authorClass: "pt-2 text-3xl text-yellow-100",
        verses:
          "text-color-animation p-1 rounded text-[1.6rem] transition-ease-in-out hover:scale-105 duration-300 tracking-wide",
      },
    },
  },
  dickinson: {
    sylph: {
      mainClass: "",
      title: "",
      titleClass: "",
      musicPlayer: {
        class: "",
        buttonClass: "",
      },
      themeButton: "",
    },
    elegy: {
      mainClass: "",
      title: "",
      titleClass: "",
      musicPlayer: {
        class: "",
        buttonClass: "",
      },
      themeButton: "",
    },
  },
}

export default mainProps
