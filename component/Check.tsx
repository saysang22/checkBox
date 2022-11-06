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
    data: any,
    a: {
        id: number,
        name: string,
        label: string,
        age: number,
        value: number
    },
}


const Check = ({name, age, label, setData, data, a, setCheckList, check} :DataType ) => {
    
    function testEv(check :boolean) :void{
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
            return (
                a.check === true ? a : null
            )
        })
        setCheckList(check2)
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