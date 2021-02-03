import {defineComponent, reactive, ref} from 'vue';
import {DesktopOutlined, InboxOutlined, MailOutlined, PieChartOutlined} from "@ant-design/icons-vue";

interface ButtonProps {
    type: 'primary' | 'dashed' | 'link';
}

const HelloTest = defineComponent({
    setup(props: ButtonProps, {slots}) {
        const options = reactive({
            collapsed: false,
            selectedKeys: ['1'],
            openKeys: ['sub1'],
            preOpenKeys: ['sub1'],
        });
        /*const collapsed = ref(false),
            selectedKeys = ref(['1']),
            openKeys = ref(['sub1']),
            preOpenKeys = ref(['sub1']);*/
        return () => (
            <div>
                <a-menu
                    openKeys="{options.openKeys}"
                    selectedKeys="{options.selectedKeys}"
                    inline-collapsed="{options.collapsed}"
                    mode="inline"
                    theme="dark">
                    <a-menu-item key="1">
                        <PieChartOutlined/>
                        <span>Option 1</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <DesktopOutlined/>
                        <span>Option 2</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <InboxOutlined/>
                        <span>Option 3</span>
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <span v-slot='title'><MailOutlined/><span>Navigation One</span></span>
                        <a-menu-item key="5">Option 5</a-menu-item>
                        <a-menu-item key="6">Option 6</a-menu-item>
                        <a-menu-item key="7">Option 7</a-menu-item>
                        <a-menu-item key="8">Option 8</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </div>
        )
    }
})
export default HelloTest;
