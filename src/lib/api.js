var path = process.env.NODE_ENV === 'production'?'https://news-at.zhihu.com':''

export const latestAPI = path + '/api/4/news/latest'
export const beforeAPI = path + 'api/4/news/before/'