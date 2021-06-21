import {BookOutline as BookIcon, PersonOutline as PersonIcon, WineOutline as WineIcon} from "@vicons/ionicons5";
import {Component} from "@vue/runtime-core";
import {h} from "vue";
import {NIcon} from "naive-ui";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

export default [
  {
    label: 'home',
    key: '/home',
    icon: renderIcon(BookIcon),
  },
  {
    label: 'user',
    key: '/user',
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]