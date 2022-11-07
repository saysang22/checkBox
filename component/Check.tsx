import { useEffect } from "react";

interface DataType  {
    id: number,
    name: string,
    age: number,
    label: string,
    value: number,
    setData: Function,
    setCheckList: Function,
    check: boolean,
    setStatus: Function,
    data: any,
    a: {
        id: number,
        name: string,
        label: string,
        age: number,
        value: number
    },
}


const Check = ({name, age, label, setData, data, a, setCheckList, check, setStatus} :DataType ) => {
    
    function testEv(check :boolean) :void{
        let total_checked = 0
        let copy = [...data];
        copy[a.id].check= !check ;
        setData(copy);

        // if(value === 0){
        //     // let test = copy[a.id].value = 0; 
        //     copy[a.id].value = 1; 
        //     setData(copy)
        //     // console.log('체크성공', copy)
        // }else if(value === 1){
        //     // console.log(copy)
        //     copy[a.id].value = 0;
        //     setData(copy)
        //     // console.log('체크해제', copy)
        // }

        let check2 = copy.filter((a) => {
            a.check === true ? total_checked++ : total_checked;
            return (
                a.check === true ? a : null
            )
        })
        setCheckList(check2)
        console.log(copy.length, total_checked)
        setStatus(copy.length === total_checked)
        // console.log(check2)
    }

    return (
        <>
        <label>
            <input type="checkbox" name={label} checked={check} onChange={() => {testEv(check)}}/>
            {name} {age}
        </label>
        </>
    )
}

export default Check