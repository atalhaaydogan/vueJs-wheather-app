import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'



export const useWeatherStore = defineStore('weather', {
    state: () => {
      return {
        weathers: useStorage('weathers', []),
        

      }
    },
    
  
  })