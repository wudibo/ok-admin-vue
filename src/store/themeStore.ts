import theme, { ThemeType } from '@/setting/theme'
import { defineStore } from 'pinia'
export default defineStore('themeStore', {
  state: () => ({
    isDarkTheme: theme.isDarkTheme, // 是否是暗夜主题
    appTheme: theme.appTheme, // 当前主题色
    appThemeList: theme.appThemeList // 主题色列表
  }),
  actions: {
    SET_APPTHEME(theme: ThemeType) {
      this.appTheme = theme
    },
    SET_ISDARKTHEME(isDarkTheme: boolean) {
      this.isDarkTheme = isDarkTheme
    }
  },
  getters: {
    isDarkThemeGetter: (state) => {
      return state.isDarkTheme
    },
    appThemeGetter(): ThemeType {
      return this.appTheme
    },
    appThemeListGetter(): typeof theme.appThemeList {
      return this.appThemeList
    }
  }
})
