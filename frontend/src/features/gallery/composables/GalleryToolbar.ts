import { type ParseSearchQuery } from "../type";

export const parseSearchQuery = (search:string):ParseSearchQuery =>{
  const tokens = search.trim().split(/\s+/)
  const tag: string[] = []
  const words: string[] = []

  for (const token of tokens) {
    if (token.startsWith("#") && token.length > 1) {
      tag.push(token.slice(1))
    } else {
      words.push(token)
    }
  }

  return {
    tag,
    word: words.join(" ")
  }
}

