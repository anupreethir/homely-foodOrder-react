const ShimmerCard = () => {
    return (
        <div className="relative w-[250px] h-[200px] rounded-sm mr-3 shimmer-animation mt-[1%]">
            <div className="absolute bottom-20 m-2 h-[3%] rounded-sm left-0 right-0 w-[60%] p-[2%] bg-white bg-opacity-80  "></div>
            <div className="absolute bottom-16 m-2 h-[3%] rounded-sm left-0 right-0 w-[80%] p-[2%] bg-white bg-opacity-80  "></div>
            <div className="absolute bottom-12 m-2 h-[3%] rounded-sm left-0 right-0 w-[80%] p-[2%] bg-white bg-opacity-80  "></div>
            <div className="absolute bottom-8 m-2 h-[3%] rounded-sm left-0 right-0 w-[70%] p-[2%] bg-white bg-opacity-80  "></div>
        </div>
    )
}
export default ShimmerCard;