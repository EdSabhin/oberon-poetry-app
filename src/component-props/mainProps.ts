const mainProps = {
  shakespeare: {
    playwright: {
      mainClass:
        "w-full flex flex-col items-start pt-8 pb-32 px-48 text-stone-200 bg-gradient-to-r from-black via-gray-600 to-black overflow-hidden",
      title: "Oberon's House of Sonnets",
      titleClass:
        "h-max flex items-center py-6 px-16 text-5xl text-orange-100 bg-gradient-to-r from-stone-950 via-stone-700 to-slate-950 rounded-tl rounded-br rounded-full shadow-md shadow-black",
      musicPlayer: {
        class:
          "w-[15rem] h-[3rem] flex justify-start py-3 pl-8 pr-8 gap-5 text-stone-200 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-700 shadow-md rounded-br-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out",
        buttonClass: "hover:text-orange-300",
      },
      themeButton:
        "w-[15rem] p-3 pl-6 text-lg text-stone-300 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-r hover:from-stone-800 hover:via-rose-950 hover:to-stone-950 shadow-md shadow-stone-950 rounded-br-full hover:translate-x-2 transition ease-in-out duration-500 group",
      poemCard: {
        class:
          "w-[75%] relative p-10 r-12 border-l-8 border-transparent bg-gradient-to-b from-gray-950 via-gray-500 to-gray-950 hover:bg-gradient-to-b hover:from-stone-950 hover:via-stone-600 hover:to-stone-950 hover:border-amber-200 rounded-[3%] rounded-br-[35%] shadow-md shadow-stone-950 transition ease-in-out hover:-translate-y-4 duration-300 group",
        poemButton:
          "absolute top-[6.4%] right-[-16.7%] text-color-animation bg-gradient-to-r from-slate-800 to-stone-800 shadow-md shadow-stone-950 rounded-br-full transition ease-in-out duration-300 group-hover:bg-gradient-to-br group-hover:from-stone-900 group-hover:to-stone-700 group-hover:text-stone-200",
        titleClass:
          "py-2 text-6xl underline group-hover:decoration-2 group-hover:decoration-orange-200 group-hover:underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-900",
        authorClass: "pt-2 text-3xl text-yellow-100",
        verses:
          "text-color-animation p-1 rounded text-[1.6rem] transition-ease-in-out hover:scale-105 duration-300 tracking-wide",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-12 bg-gradient-to-bl from-stone-950 via-stone-500 to-stone-950 slide-in-fwd-right",
        titleClass:
          "h-max flex items-center pt-5 pb-3 px-16 mb-8 text-5xl text-orange-100 bg-gradient-to-r from-stone-900 via-stone-600 to-slate-900 rounded-tl rounded-br rounded-full shadow-md shadow-black",
        poemButton:
          "w-max p-2 mt-4 text-color-animation bg-gradient-to-b from-stone-800 to-stone-600 shadow-md shadow-stone-900 rounded-br-full transition ease-in-out duration-300 absolute top-[30%] right-[15%] hover:-translate-x-5",
        verses:
          "w-max py-1 px-10 text-stone-300 leading-relaxed tracking-wide text-[1.57rem] hover:text-orange-200 rounded-full hover:bg-gradient-to-r hover:from-stone-900 hover:via-stone-500 hover:to-stone-900 transition-ease-in-out duration-300",
        authorClass: "pt-1 px-2 text-2xl text-orange-100 ",
      },
    },
    bloodNight: {
      mainClass:
        " w-full flex flex-col items-start pt-8 pb-32 px-48 text-stone-200 bg-gradient-to-r from-black via-rose-900 to-black from-[3%] via-[57%] to-[96%] overflow-hidden",
      title: "Prospero's Grimoire",
      titleClass:
        "h-max flex items-center py-6 px-16 text-5xl text-blood-title-animation bg-gradient-to-r from-stone-950 via-rose-800 to-stone-900 rounded-tl rounded-br rounded-full shadow-md shadow-black",
      musicPlayer: {
        class:
          "w-[15rem] h-[3rem] flex justify-start py-3 pl-8 pr-8 gap-5 text-stone-300 bg-gradient-to-r from-stone-800 via-rose-950 to-black shadow-md rounded-br-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out",
        buttonClass: "hover:text-rose-500",
      },
      themeButton:
        "text-stone-300 w-[15rem] p-3 pl-6 text-lg text-stone-300 bg-gradient-to-r from-stone-800 via-rose-950 to-stone-950 hover:bg-gradient-to-r hover:from-slate-800 hover:to-stone-800 shadow-md shadow-stone-950 rounded-br-full hover:translate-x-2 transition ease-in-out duration-500 group",
      poemCard: {
        class:
          "w-[75%] relative p-10 r-12 border-l-8 border-transparent bg-gradient-to-b from-stone-950 via-rose-900 to-stone-950 hover:bg-gradient-to-b hover:from-black hover:via-stone-900 hover:to-black hover:border-rose-500 rounded-[3%] rounded-br-[35%] shadow-sm shadow-stone-900 transition ease-in-out hover:-translate-y-4 duration-300 group",
        poemButton:
          "absolute top-[6.4%] right-[-16.7%] text-blood-animation bg-gradient-to-r from-rose-950 to-stone-900 shadow-md shadow-stone-950 rounded-br-full transition ease-in-out duration-300 group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-stone-800 group-hover:text-stone-200 group-hover:shadow-lg group-hover:shadow-rose-950",
        titleClass:
          "py-2 text-6xl underline group-hover:decoration-2 group-hover:decoration-stone-600 group-hover:underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-stone-500",
        authorClass: "pt-2 text-3xl text-stone-400",
        verses:
          "text-blood-animation text-black p-1 rounded text-[1.6rem] transition-ease-in-out hover:scale-105 duration-300 tracking-wide",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-12 bg-gradient-to-bl from-rose-950 via-stone-950 to-rose-900 slide-in-fwd-right",
        titleClass:
          "h-max flex items-center pt-5 pb-3 px-16 mb-8 text-5xl text-rose-400 bg-gradient-to-r from-stone-950 via-stone-900 to-rose-950 rounded-tl rounded-br rounded-full shadow-md shadow-black",
        poemButton:
          "w-max p-2 mt-4 text-blood-animation bg-gradient-to-b from-rose-950 from-30% to-black shadow-sm shadow-black rounded-br-full transition ease-in-out duration-300 absolute top-[30%] right-[15%] hover:-translate-x-5",
        verses:
          "w-max py-1 px-10 text-rose-200 leading-relaxed tracking-wide text-[1.57rem] hover:text-rose-400 rounded-full hover:bg-gradient-to-r hover:from-stone-950 hover:via-stone-700 hover:to-stone-900 transition-ease-in-out duration-300",
        authorClass: "pt-1 px-2 text-2xl text-rose-300",
      },
    },
  },
  dickinson: {
    sylph: {
      mainClass:
        "w-full flex flex-col items-start pt-8 pb-20 px-40 text-black  overflow-hidden bg-gradient-to-r from-rose-100 via-sky-100 to-indigo-100",
      title: "A Voice for an Age",
      titleClass:
        "flex items-center py-2 px-16 text-5xl bg-gradient-to-r from-white to-sky-200 rounded-tl rounded-br rounded-full shadow-sm shadow-neutral-600",
      musicPlayer: {
        class:
          "w-[15rem] h-[2.5rem] flex justify-end py-3 pl-8 pr-8 gap-5 text-neutral-900 mt-4 bg-gradient-to-l from-white from-30% to-indigo-200 shadow-sm shadow-black rounded-bl-full hover:-translate-x-2 transition duration-500 ease-in-out",
        buttonClass: "hover:text-rose-600",
      },
      themeButton:
        "w-[15rem] p-3 pl-6 text-lg text-neutral-900 hover:text-neutral-100 mt-4 bg-gradient-to-r from-white from-30% to-indigo-200 shadow-sm shadow-black hover:bg-gradient-to-r hover:from-cyan-700 hover:to-emerald-200  rounded-br-full hover:translate-x-2 transition ease-in-out duration-500 group",
      poemCard: {
        class:
          "w-[28rem] h-[28rem] relative px-20 flex justify-center items-center border-b rounded-full bg-white shadow-lg shadow-rose-100 hover:bg-gradient-to-b from-black via-neutral-900 to-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:text-rose-300 transition duration-300 group cursor-pointer",
        iconRight:
          "w-24 h-24 absolute top-10 right-[-1%] flex justify-center items-center rounded-full group-hover:opacity-[0.87] group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300",
        iconLeft:
          "w-24 h-24 absolute top-10 left-[-1%] flex justify-center items-center rounded-full group-hover:opacity-[0.87]  group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300",
        iconBottom:
          "w-24 h-24 absolute bottom-[-11%] flex justify-center items-center rounded-full group-hover:opacity-[0.87]  group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300",
        titleClass:
          "w-full flex justify-center items-center text-3xl group-hover:underline group-hover:underline-offset-4 decoration-2 decoration-dotted slide-in-fwd-center",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-12 bg-gradient-to-t from-rose-200 to-indigo-200 slide-in-fwd-right",
        titleClass:
          "py-6 px-28 mb-8 text-5xl bg-gradient-to-r from-white to-sky-100 rounded-bl rounded-tr rounded-full",
        poemButton:
          "w-max p-2 mt-4 bg-gradient-to-r from-white from-30% to-indigo-200 shadow-sm shadow-black rounded-br-full transition ease-in-out duration-300 absolute top-[30%] right-[15%] hover:-translate-x-5",
        verses:
          "w-max py-1 px-10 text-amber-700 leading-relaxed tracking-wide text-[1.57rem] hover:text-neutral-900 rounded-full hover:bg-gradient-to-r hover:from-sky-100 hover:via-rose-100 hover:to-sky-100 transition-ease-in-out duration-300",
        authorClass: "pt-1 px-2 text-2xl text-neutral-900",
      },
    },
    elegy: {
      mainClass:
        "w-full flex flex-col items-start pt-8 pb-20 px-40 text-black  overflow-hidden bg-gradient-to-r from-black via-cyan-950 to-white",
      title: "Moves to the Infinite",
      titleClass:
        "text-aqua-title-animation flex items-center py-2 px-16 text-5xl text-neutral-100 bg-gradient-to-r from-black via-cyan-500 to-teal-950 rounded-tl rounded-br rounded-full shadow-sm shadow-neutral-600",
      musicPlayer: {
        class:
          "w-[15rem] h-[2.5rem] flex justify-end py-3 pl-8 pr-8 gap-5 text-neutral-100 mt-4 bg-gradient-to-l from-cyan-700 from-30% to-emerald-200 shadow-sm shadow-black rounded-bl-full hover:-translate-x-2 transition duration-500 ease-in-out",
        buttonClass: "hover:text-green-400",
      },
      themeButton:
        "w-[15rem] p-3 pl-6 mt-4 text-lg text-neutral-100 hover:text-neutral-900 bg-gradient-to-r from-cyan-700 from-30% to-emerald-200 shadow-sm shadow-black hover:bg-gradient-to-r hover:from-white hover:to-indigo-200 rounded-br-full hover:translate-x-2 transition ease-in-out duration-500 group",
      poemCard: {
        class:
          "w-[28rem] h-[28rem] bg-moon relative px-20 flex justify-center items-center border-b rounded-full bg-white shadow-lg shadow-teal-200 hover:bg-gradient-to-b from-black via-cyan-900 to-cyan-200 hover:shadow-lg hover:shadow-cyan-300 hover:text-emerald-300 transition duration-300 group cursor-pointer",
        iconRight:
          "w-24 h-24 absolute top-10 right-[-1%] flex justify-center items-center rounded-full group-hover:opacity-[0.87] group-hover:bg-gradient-to-b group-hover:from-cyan-950 group-hover:via-teal-100 group-hover:to-cyan-700 group-shadow-md cursor-pointer transition duration-300 rotate-circular",
        iconLeft:
          "w-24 h-24 absolute top-10 left-[-1%] flex justify-center items-center rounded-full group-hover:opacity-[0.87]  group-hover:bg-gradient-to-b group-hover:from-cyan-950 group-hover:via-teal-100 group-hover:to-cyan-700 group-shadow-md cursor-pointer transition duration-300 rotate-circular",
        iconBottom:
          "w-24 h-24 absolute bottom-[-11%] flex justify-center items-center rounded-full group-hover:opacity-[0.87]  group-hover:bg-gradient-to-b group-hover:from-cyan-950 group-hover:via-teal-100 group-hover:to-cyan-700 group-shadow-md cursor-pointer transition duration-300 rotate-circular",
        titleClass:
          "w-full flex justify-center items-center text-3xl group-hover:underline group-hover:underline-offset-4 decoration-2 decoration-dotted slide-in-fwd-center",
      },
      fullPoem: {
        class:
          "w-full h-full flex flex-col items-center pt-8 pb-12 bg-gradient-to-br from-black to-cyan-900 slide-in-fwd-right",
        titleClass:
          "py-6 px-28 mb-8 text-5xl text-neutral-100 bg-gradient-to-r from-black via-cyan-600 to-teal-900 rounded-bl rounded-tr rounded-full",
        poemButton:
          "w-max p-2 mt-4 bg-gradient-to-r text-neutral-100 from-cyan-800 to-teal-900 shadow-sm shadow-black rounded-br-full transition ease-in-out duration-300 absolute top-[30%] right-[15%] hover:-translate-x-5",
        verses:
          "w-max py-1 px-10 text-green-200 leading-relaxed tracking-wide text-[1.57rem] hover:text-teal-200 rounded-full hover:bg-gradient-to-r hover:from-cyan-200 hover:via-cyan-800 hover:to-cyan-200 transition-ease-in-out duration-300",
        authorClass: "pt-1 px-2 text-2xl text-neutral-100",
      },
    },
  },
}

export default mainProps
