import grocery from "../../assests/groceryV1.png"
const Grocery = (() => {
    return (
        <div className="w-screen flex-col h-1/4 flex justify-center items-center">
            <img src={grocery} className="w-[30vw]" />
            <h1 className="text-lg font-semibold">Sit Tight! We’re Coming Soon!</h1>
        </div>
    )
})
export default Grocery;