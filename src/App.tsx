import React, { useMemo, useState } from 'react';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  // UploadOutlined,
  UserOutlined,
  // VideoCameraOutlined,
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Table } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useGetUserListQuery } from './query/services/usersService';
// import { ItemType } from 'antd/es/menu/hooks/useItems';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items: ItemType[] = [
  {
    key: "1",
    label: "Nav 1",
    icon: <PieChartOutlined />
  },
  {
    key: "2",
    label: "Nav 2",
    icon: <DesktopOutlined />
  },
  {
    key: "3",
    label: "Nav 3",
    icon: <FileOutlined />,
    children: [
      {
        key: "4",
        label: "Nav 4",
        icon: <TeamOutlined />
      },
      {
        key: "5",
        label: "Nav 5",
        icon: <UserOutlined />
      }
    ]
  }
]

  const { data } = useGetUserListQuery({})

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    }

  ]
  
  const tableData = useMemo(() => {
    console.log('data >>', data)
    return data?.map((item) => ({
      key: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
      phone: item.phone
    }))
  }, [data])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Table 
            dataSource={tableData}
            columns={columns}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
