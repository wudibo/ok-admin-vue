import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld as any, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

test('testa', () => {
  class Log {
    print(msg: string) {
      return msg
    }
  }

  const log = new Log()
  expect(log.print('Start')).toBe('Start')
  // expect(log.print('Start')).toBe('Start1')
})
