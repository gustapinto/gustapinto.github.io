export interface JobHistorySchema {
  role: string
  date: string
  description: string | JSX.Element
}

export interface JobSchema {
  company: string
  link: string,
  history: Array<JobHistorySchema>
  icons: Array<JSX.Element>
}
