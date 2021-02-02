import React from "react";
import { Layout, Menu, Tree, Dropdown } from "antd";
const { Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const initTreeDate = [
  {
    title: "Expand to load",
    key: "0"
  },
  {
    title: "Expand to load",
    key: "1"
  },
  {
    title: "Tree Node",
    key: "2",
    isLeaf: true
  }
];

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    } else if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children)
      };
    }

    return node;
  });
}

const SideTreeMenu = () => {
  const [treeData, setTreeData] = React.useState(initTreeDate);

  function onLoadData({ key, children }) {
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }

      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            {
              title: "Child Node",
              key: `${key}-0`
            },
            {
              title: "Child Node",
              key: `${key}-1`,
              isLeaf: true
            }
          ])
        );
        resolve();
      }, 1000);
    });
  }

  return (
    <Sider
      className="site-layout-background"
      style={{
        padding: "16px 0",
        borderRight: "1px solid #eee"
      }}
    >
      <Menu>
        <Tree
          showLine
          loadData={onLoadData}
          treeData={treeData}
          titleRender={(nodeData) => {
            return (
              <Dropdown overlay={menu} trigger={["contextMenu"]}>
                <div>{`${nodeData.title}-Hey`}</div>
              </Dropdown>
            );
          }}
        />
      </Menu>
    </Sider>
  );
};

export default SideTreeMenu;
