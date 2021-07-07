import { h, Component } from 'vue';
import { NIcon } from 'naive-ui';
import {
  ArrowBackOutline,
  ArrowForwardOutline,
  Close,
  CloseCircleSharp,
  ArrowDownCircleOutline
} from '@vicons/ionicons5';
const menuIcon = (icon: Component) =>
  h(NIcon, null, {
    default: () => h(icon)
  });
/**tag菜单 */
export const menuOptions = [
  {
    label: '关闭左侧',
    key: 'closeLeft',
    icon: () => menuIcon(ArrowBackOutline)
  },
  {
    label: '关闭右侧',
    key: 'closeRight',
    icon: () => menuIcon(ArrowForwardOutline)
  },
  {
    label: '关闭其他',
    key: 'closeOther',
    icon: () => menuIcon(Close)
  },
  {
    label: '关闭全部',
    key: 'closeAll',
    icon: () => menuIcon(CloseCircleSharp)
  },
  {
    label: '关闭当前',
    key: 'closeThis',
    icon: () => menuIcon(ArrowDownCircleOutline)
  }
];
