import * as React from 'react';
import * as C from '@supreme-palm-tree/lib-ant-components';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export const LayoutWithSider: React.FC<{ stickyHeader?: boolean }> = ({ children }) => {
  const screen = useBreakpoint();
  const [isMenuCollapsed, setIsMenuCollapsed] = React.useState(!screen.lg);

  function toggleMenu() {
    setIsMenuCollapsed((prev) => !prev);
  }

  return (
    <C.Layout style={{ minHeight: '100vh' }}>
      <MainSider isMenuCollapsed={isMenuCollapsed} setIsMenuCollapsed={setIsMenuCollapsed} />
      <C.Layout>
        <MainHeader isMenuCollapsed={isMenuCollapsed} toggleMenu={toggleMenu} />
        <C.Layout.Content>
          <div style={{ margin: '24px 50px' }}>{children}</div>{' '}
        </C.Layout.Content>
        <C.Layout.Footer>footer</C.Layout.Footer>
      </C.Layout>
    </C.Layout>
  );
};

const MainHeader = ({ isMenuCollapsed, toggleMenu }: { isMenuCollapsed: boolean; toggleMenu: () => void }) => (
  <C.Layout.Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
    }}>
    <C.Row gutter={8}>
      <C.Col flex={1}>
        <MenuToggle isMenuCollapsed={isMenuCollapsed} toggleMenu={toggleMenu} />
      </C.Col>
      <C.Col>
        <C.Space>
          <NotificationsPopover />
          <ProfilePopover />
        </C.Space>
      </C.Col>
    </C.Row>
  </C.Layout.Header>
);


const MainSider = ({
  isMenuCollapsed,
  setIsMenuCollapsed,
}: {
  isMenuCollapsed: boolean;
  setIsMenuCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const screen = useBreakpoint();
  function expandMenu() {
    setIsMenuCollapsed(false);
  }

  function collapseMenu() {
    setIsMenuCollapsed(true);
  }

  const mainSiderProps: {
    breakpoint?: Breakpoint;
    collapsedWidth: number;
    onBreakpoint: () => void;
  } = screen.lg
    ? {
        breakpoint: 'lg',
        collapsedWidth: 88,
        onBreakpoint: expandMenu,
      }
    : {
        breakpoint: 'sm',
        collapsedWidth: 0,
        onBreakpoint: collapseMenu,
      };
  return (
    <C.Layout.Sider {...mainSiderProps} collapsed={isMenuCollapsed} trigger={null}>
      <C.Row
        gutter={[16, 16]}
        style={{
          flexDirection: 'column',
          minHeight: '100%',
        }}>
        <C.Col flex={1} span={24}>
          <div
            style={{
              height: 64,
              padding: '12px 24px',
            }}>
            <Logo />
          </div>
          <C.Menu items={items} mode="inline" theme="dark" />
        </C.Col>
        <C.Col span={24}>
          <div
            style={{
              padding: 24,
            }}>
            <C.Button block type="primary">
              Logout
            </C.Button>
          </div>
        </C.Col>
      </C.Row>
    </C.Layout.Sider>
  );
};

const Logo = () => (
  <div
    style={{
      backgroundColor: '#ffffff50',
      width: '100%',
      height: '100%',
    }}
  />
);

const NotificationsPopover = () => (
  <C.Popover content={<span>Content for the popover</span>} trigger="click">
    <C.Tooltip title="Notifications">
      <C.Button aria-label="notifications" shape="circle" type="primary">
        N
      </C.Button>
    </C.Tooltip>
  </C.Popover>
);

const ProfilePopover = () => (
  <C.Popover content={<span>Content for the popover</span>} trigger="click">
    <C.Tooltip title="Profile">
      <C.Button aria-label="profile" shape="circle" type="primary">
        P
      </C.Button>
    </C.Tooltip>
  </C.Popover>
);

const MenuToggle = ({ isMenuCollapsed, toggleMenu }: { isMenuCollapsed: boolean; toggleMenu: () => void }) => (
  <C.Tooltip title="Menu">
    <C.Button
      aria-label={isMenuCollapsed ? 'Expand menu' : 'Collapse menu'}
      shape="circle"
      type="primary"
      onClick={toggleMenu}>
      M
    </C.Button>
  </C.Tooltip>
);

type MenuItem = Required<C.MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', null, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', null, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', null, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
