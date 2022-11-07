interface test {
    name: string,
    label: string
}

const Radio = ({name, label} :test) => {
    return(
        <label>
        <input type="radio" name={name}/>
        {label}
        </label>
    )
}

export default Radio;