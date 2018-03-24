export interface Language {
  _id: string
  name: string
  code: string
  desc: string
}

export interface LanguageDetail extends Language {
  creator: string
  create_date: string
  update_date: string
}