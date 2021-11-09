import ypRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return ypRequest.post({
    url: url,
    data: queryInfo
  })
}
