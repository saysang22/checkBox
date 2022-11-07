import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Check from '../component/Check'
import { useState } from 'react'
import ChangeCheck from '../component/ChangeCheck';
import Radio from '../component/Radio';

export default function App({ Component, pageProps }: AppProps) {

  const [status, setStatus] = useState(false);
  const [checkList, setCheckList] = useState([]);

  const [data, setData] = useState([
    {
      id: 0,
      name: '짱구',
      age: 0,
      label: 'ZzangGu',
      value: 0,
      check: false
    },
    {
      id: 1,
      name: '짱아',
      label: 'ZzangA',
      age: 1,
      value: 0,
      check: false

    },{
      id: 2,
      name: '네즈코',
      label: 'nezco',
      age: 17,
      value: 0,
      check: false

    },{
      id: 3,
      name: '탄지로',
      label: 'tanziro',
      age: 18,
      value: 0,
      check: true

    },
  ])



  console.log(checkList)
  return <>
  
  {
    data.map((a) => {
      return (
        <div key={a.id}>
        <Check
        a = {a}
        value={a.value}
        name = {a.name}
        age = {a.age}
        id={a.id}
        label = {a.label}
        setData = {setData}
        data = { data }
        setCheckList = {setCheckList}
        check = {a.check}
        setStatus = {setStatus}
        />
        </div>
      )
    })
  }
  
  <ChangeCheck label = '전체' data = {data} setData = {setData} setCheckList = {setCheckList} status={status} setStatus = {setStatus}/>
  {/* {
    data.map((a) => {
      return (
        <div key={a.id}>
        <Radio name='test' label = {a.label}/>
        </div>
      )
    })
  } */}
    {/* {
    data.map((a) => {
      return (
        <div key={a.id}>
        <Radio name='test2' label={a.name}/>
        </div>
      )
    })
  }
 */}
  <Component {...pageProps} />
  </>
}
