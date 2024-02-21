export interface HttpResponseMeta {
  page?: number
  size?: number
  total_count?: number
}

export interface HttpResponse<T> {
  meta: HttpResponseMeta
  message: string
  data: T
}