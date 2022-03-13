import React,{useState} from "react";
import {Box} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import Content from "./Content"

export default function Set() {
    const info = {
        url:"https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/",
        image:"https://kotsukotsu.work/media/kotsu2to-icon.png",
        description:"ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。",
        title:"[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する",
        comment:"説明文"
      }
    const [group,setGroup] = useState([info,info,info,info,info,info,info])
    return (
    <Box align='center' py="70px">
    <ReactSortable
    list={group}
    setList={setGroup}
    animation={150}
    onChange={(order, sortable, evt) => {}}
    onEnd={evt => {}}
    >
        {group.map((bookmark) => <Box display="inline-block" padding='10px' margin='auto'>
          {Content(bookmark)}
        </Box>)}
    </ReactSortable>
    </Box>
    );
}

