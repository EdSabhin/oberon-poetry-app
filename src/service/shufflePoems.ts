import { Poem } from "@/pages/ShakespearesDen"

function shufflePoems(poems: Poem[]): Poem[] {
  return poems.slice().sort(() => Math.random() - 0.5)
}

export default shufflePoems
