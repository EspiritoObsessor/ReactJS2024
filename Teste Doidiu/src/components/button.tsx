export interface UserProps {
    name: string;
    age: number;
    gender: string;
    email: string;
    saudar: any;
}

const Button = (props: UserProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <p>{props.gender}</p>
            <a href={props.email}>{props.email}</a>

            <button onClick={props.saudar}>OIE</button>
        </div>
    )
}

export default Button;