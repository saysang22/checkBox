interface ChangeType {
    label: string,
    status: boolean,
    setStatus: Function,
    data: {
        id: number,
        name: string,
        label: string,
        age: number,
        value: number,
        check: boolean
    }[],

    setData: Function,
    setCheckList: Function,
}

const ChangeCheck = ({label, data, setData, setCheckList, status, setStatus} :ChangeType) => {

    function test(e :any){
        console.log(e.target.checked)
        let copy = [...data];

        copy.map((a) => {
            return (
                a.check = e.target.checked
            )
        })

        setData(copy)
        setStatus(e.target.checked)

        let check2 = copy.filter((a) => {
            return (
                a.check === true ? a : null
            )
        })
        setCheckList(check2);

    }

    return (
        <label>
            <input type="checkbox" checked={status} onChange={(e) => {test(e)}}/>
            {label}
        </label>
    )
}

export default ChangeCheck;