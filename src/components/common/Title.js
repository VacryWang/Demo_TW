export default function Title({title}) {
    return (
        <div>
            <div className={"flex mt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40"}>
                <span className={"text-7xl m-auto text-white font-bold"}>
                    {title}
                </span>
            </div>
        </div>
    )
}