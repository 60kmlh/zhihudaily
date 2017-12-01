export function proxyImg(url) {
  return 'https://images.weserv.nl/?url=' + url.replace('http://', '').replace('https://', '')
}
export function toggleCollect(id) {
  if(!window.localStorage) return
  if(!window.localStorage.getItem('collection')) window.localStorage.setItem('collection', [])
  if(window.localStorage.getItem('collection').indexOf(id) === -1) {
    window.localStorage.setItem('collection', Array.slice(window.localStorage.getItem('collection')).push(id))
  }else{return}
}