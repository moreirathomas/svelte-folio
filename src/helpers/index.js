import { languages } from "./constants"

export const getColorForLanguage = (language) => {
  const matchingLanguage = languages.find((lang) => lang.name === language)
  return matchingLanguage?.color || "#fff"
}

export const defaultDescriptionIfNotExists = (description) => {
  return description != null ? description : "No description provided"
}

export const getImageSource = (name) => {
  return `./images/${name}.png`
}
