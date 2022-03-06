import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Box } from '@chakra-ui/react';
import Content from './Content';

class TreeContent extends React.Component {
  render() {
    if (this.props.node.children.length == 0) {
      return <TreeNode label={Content(this.props.node.info)}></TreeNode>;
    } else {
      return (
        <TreeNode label={Content(this.props.node.info)}>
          {this.props.node.children.map((child) => (
            <TreeContent node={child} />
          ))}
        </TreeNode>
      );
    }
  }
}

class DrawTree extends React.Component {
  render() {
    const info = {
      url: 'https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/',
      image: 'https://kotsukotsu.work/media/kotsu2to-icon.png',
      description:
        'ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。',
      title:
        '[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する',
      comment: '説明文',
    };
    const graph = {
      info: info,
      children: [
        {
          info: info,
          children: [
            { info: info, children: [] },
            { info: info, children: [] },
          ],
        },
        {
          info: info,
          children: [
            { info: info, children: [] },
            { info: info, children: [{ info: info, children: [] }] },
          ],
        },
      ],
    };
    return (
      <Box py="70px">
        <Tree label={Content(graph.info)}>
          {graph.children.map((child) => (
            <TreeContent node={child} />
          ))}
        </Tree>
      </Box>
    );
  }
}

export default DrawTree