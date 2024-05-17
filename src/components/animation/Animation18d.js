const DottedButton = () => {
    return (
        <div className={"flex min-h-[200px] items-center justify-center"}>
            <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Hover me
            </button>
        </div>
    );
};

export default DottedButton;