import './style.scss'
import { defineComponent, ref } from 'vue'
import { useThemeStore, useAdminStore } from '@/stores/index'
import { NSwitch, NIcon } from 'naive-ui'
import { Sunny, Moon } from '@vicons/ionicons5'
export default defineComponent({
  name: 'SetDark',
  setup() {
    const themeStore = useThemeStore()
    const adminStore = useAdminStore()
    const isDarkTheme = ref(themeStore.isDarkThemeGetter)

    return {
      isDarkTheme,
      handleDarkTheme(val: boolean) {
        isDarkTheme.value = val
        themeStore.SET_ISDARKTHEME(val)
        adminStore.SET_LAYCONFIG({
          key: 'sidebarInverted',
          value: false
        })
      }
    }
  },
  render: function () {
    return (
      <div class="set-dark">
        <NSwitch
          railStyle={() => {
            return { background: '#101014' }
          }}
          value={this.isDarkTheme}
          onUpdate:value={this.handleDarkTheme}
          v-slots={{
            checked: () => (
              <NIcon class="set-dark-icon">
                <Moon />
              </NIcon>
            ),
            unchecked: () => (
              <NIcon class="set-dark-icon">
                <Sunny />
              </NIcon>
            )
          }}
        ></NSwitch>
      </div>
    )
  }
})
