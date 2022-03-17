import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box,Button,Center,Heading} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import Tree from "./Tree"

export default function App(user_id) {
  const [group,setGroup] = useState([])
  const [page,setPage] = useState("Home")
  const [info,setInfo] = useState("")
  useEffect(() => {
    axios.get(`http://127.0.0.1:8010/folders/${user_id}`)
      .then((res) => {
        setGroup(res.data.folder_list)
      })
      .catch((err) => {console.log("foldersAPI err:",err)})
    if (info !== ""){
      if (info[0].children == null){setPage("Set")}
      else if (Array.isArray(info[0].children)){setPage("Tree")}
    }
  },[info])

  function ClickFile(folder_id){
    axios.get(`http://127.0.0.1:8010/contents/${folder_id}`)
      .then((res) => {
        setInfo(res.data.contents)
      })
      .catch((err) => {console.log("contentsAPI err:",err)})
  }

  
  if (page == "Home"){
    return (
      <Box>
        <Box
        width="100%"
        height="80px"
        position="fixed"
        bg="#319795"
        padding="0 20px"
        box-sizeing="border-box"
        zIndex="sticky"
        >
          <Heading float="left" color="white">Bookmark</Heading>
        </Box>
        <Box align='center' py="90px" maxWidth="1500px" margin="auto">
        <ReactSortable
        list={group}
        setList={setGroup}
        animation={150}
        onChange={(order, sortable, evt) => {}}
        onEnd={evt => {}}
        align='center' justify='center'
        >
          {group.map((g) => 
          <Box display="inline-block" padding="10px">
            <Center onClick={() => ClickFile(g.id)} bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px' _hover={{bg:'#A0AEC0',cursor:'pointer'}}>
              {g.title}
            </Center>
          </Box>)}
        </ReactSortable>
        </Box>
      </Box>
    )
  }
  else if (page == "Set") {
    console.log(info)
    return(
    <Box>
      <Box>集合です</Box>
      <Button onClick={()=>{setPage("Home")}}>戻る</Button>
    </Box>
    )
  }
  else if (page == "Tree") {
    const info_base = {
      "type": "tree",
      "contents": [
        {
          "id": "056c6f03-6ee3-485c-80a4-63882dce359a",
          "info": {
            "url": "https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/",
            "image": "https://kotsukotsu.work/media/kotsu2to-icon.png",
            "description": "ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。",
            "title": "[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する",
            "comment": "説明文"
          },
          "children": [
            {
              "id": "480f30f8-a376-4b59-8ab3-75cb12e323f1",
              "info": {
                "url": "https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/",
                "image": "https://kotsukotsu.work/media/kotsu2to-icon.png",
                "description": "ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。",
                "title": "[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する",
                "comment": "説明文"
              },
              "children": [
                {
                  "id": "9d6cfd2f-a71f-4830-bba7-a74982b28810",
                  "info": {
                    "url": "https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/",
                    "image": "https://kotsukotsu.work/media/kotsu2to-icon.png",
                    "description": "ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。",
                    "title": "[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する",
                    "comment": "説明文"
                  },
                  "children": []
                },
                {
                  "id": "90fd9cc4-1fc5-4915-9a16-58761357fe47",
                  "info": {
                    "url": "https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/",
                    "image": "https://kotsukotsu.work/media/kotsu2to-icon.png",
                    "description": "ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。",
                    "title": "[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する",
                    "comment": "説明文"
                  },
                  "children": []
                }
              ]
            },
            {
              "id": "969b8f65-3234-4c1a-a9c1-dbbd1e41f27a",
              "info": {
                "url": "https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/",
                "image": "https://kotsukotsu.work/media/kotsu2to-icon.png",
                "description": "ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。",
                "title": "[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する",
                "comment": "説明文"
              },
              "children": []
            }
          ]
        }
      ]
    }
    return(
    <Box>
      <Box><Tree graph = {info_base.contents} setGraph = {setInfo}/></Box>
      <Button onClick={()=>{setPage("Home")}}>戻る</Button>
    </Box>
    )
  }
}
