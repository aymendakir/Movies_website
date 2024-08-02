import {NavLink} from "react-router-dom";

export function Card(props) {
    return (
        <section className={ `relative sm:w-[360px] sm:h-[300px] rounded-lg ${props.bg}  overflow-hidden w-[110px] h-[110px]` }>
            <NavLink to={`/genre/${props.title}/${props.id}`}>
            <picture className={"absolute top-0 left-0 w-full h-full overflow-y-hidden"}>
                <img src={props.img} alt="Cardimages" className={`w-full ${props.height}    object-cover `} />
            </picture>
            <p className={`absolute ${props.right} top-[40%] rotate-90 text-3xl lilita  drop-shadow-md shadow-black tracking-widest uppercase ${props.color}`}>{props.title}</p>
            </NavLink>
        </section>
    )
}