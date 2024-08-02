export function Card(props) {
    return (
        <section className={ `relative w-[360px] h-[300px] rounded-lg ${props.bg}  overflow-hidden`}>
            <picture className={"absolute top-0 left-0 w-full h-full overflow-y-hidden"}>
                <img src={props.img} alt="Cardimages" className={`w-full ${props.height} object-cover `} />
            </picture>
            <p className={`absolute ${props.right} top-[40%] rotate-90 text-3xl lilita  drop-shadow-md shadow-black tracking-widest uppercase ${props.color}`}>{props.title}</p>

        </section>
    )
}