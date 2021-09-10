import { defineComponent } from 'vue'
import iconRender from './IconRender'
const pathD =
  'M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75zm-5.75 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5z'

export default defineComponent({
  name: 'LockClosed',
  render() {
    const icon = iconRender(pathD)
    return icon
  }
})
