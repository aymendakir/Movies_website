import {Card} from "./Card.jsx";
import action from "../../../image/Cardimages/1705497184_La-star-de-Reacher-Alan-Ritchson-revele-le-premier-apercu.png"
import drama from "../../../image/Cardimages/39406243_2101176366811858_6863318225308876800_n.jpg"
import horror from "../../../image/Cardimages/Freddy_Krueger2.png"
import animation from "../../../image/Cardimages/Po.png"

export function Genre() {
    return (
        <section
            className={"relative mix-blend-multiply w-[100%] max-h-[70vh] mx-auto overflow-hidden "} dir={"rtl"}>
            <div
                className={"absolute mix-blend-multiply top-0 left-0 w-full h-full bg-white z-0"}></div>

            <div className={ " w-[90%] mx-auto mt-16 z-10 relative space-y-8 "}>
                <p className={"capitalize text-4xl font-bold text-black "}>حسب النوع</p>
                <div className={"flex items-center justify-center space-x-8 gap-8"}>

    <Card img={action} title={"action"} bg={"bg-purple-700"} color={"text-red-500"} height={"h-[100%]"} right={"-right-10"} id={"28"}/>


                <Card img={drama} title={"drama"} bg={"bg-purple-700"} color={"text-purple-700"} height={"h-[100%]"} right={"-right-10"} id={"18"} />
                    <Card img={horror} title={"horror"} bg={"bg-purple-700"} color={"text-yellow-500"} height={"90%"} right={"-right-10"} id={"27"}/>
                    <Card img={animation} title={"animation"} bg={"bg-purple-700"} color={"text-pink-600"} height={"90%"}right={"-right-[5rem]"} id={"16"} />
                 </div>

            </div>
        </section>

    )
}