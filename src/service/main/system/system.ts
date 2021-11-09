import ypRequest from '@/service'

export function getPageListData(url: string, queryInfo: any) {
  return ypRequest.post({
    url: url,
    data: queryInfo
  })
}
