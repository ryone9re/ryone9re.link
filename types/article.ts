export type Id = {
  id: string
}

export type Article = {
  id: number
  createdAt: string
  updateAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
}

export type CmsResponse = {
  contents: Article[]
  totalCount: number
  offset: number
  limit: number
}

export type CmsIdResponse = {
  contents: Id[]
  totalCount: number
  offset: number
  limit: number
}

export type PaginationReq = {
  totalCount: number
  path: number
}
