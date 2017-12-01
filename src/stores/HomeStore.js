import { observable, action, runInAction } from 'mobx'
import { latestAPI, beforeAPI } from '@/lib/api'

let loading = false
var date = new Date()
date = new Date(date.getTime() + 1000*60*60*24)


function dayNext() {
  var nextDay = date.getTime() - 1000*60*60*24
  date = new Date(nextDay)
  return date
}

class HomeStore {
    @observable top_stories
    @observable stories

    constructor() {
      this.top_stories  = []
      this.stories = []
    }

    @action get_home_list() {
      axios.get(latestAPI).then(
        res => {
          runInAction(() => {
            this.top_stories = res.data.top_stories
            this.stories = [res.data]
          })
        }
        /*另一种写法*/
        // action('a',res => {
        //   this.top_stories = res.data.date
        // })
      )
    }
    /*另一种写法*/
    // async get_home_list() {
    //   let {data} = await axios.get(latestAPI)
    //   runInAction(() => {
    //     this.topList = data.date
    //   })
    // }

    @action add_home_list() {
      if(loading) return
      loading = true
      dayNext()
      axios.get(
        beforeAPI + 
        '/' + 
        date.getFullYear() + 
        (date.getMonth()+1) + 
        (date.getDate().toString().length<2 ? '0'+date.getDate() : date.getDate())
        ).then((res) => {
        loading = false
        runInAction(() => {
          this.stories = [...this.stories, res.data]
        })
      })
    }
}

export default HomeStore
