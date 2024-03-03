const mainProps = {
  shakespeare: {
    playwright: {
      class:
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
    },
    bloodNight: {
      class:
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
    },
  },
  dickinson: {
    sylph: {
      class: "",
      title: "",
      titleClass: "",
      musicPlayer: {
        class: "",
        buttonClass: "",
      },
      themeButton: "",
    },
    elegy: {
      class: "",
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
