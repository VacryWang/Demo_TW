export default function Header3(){
    return(
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-16"}>
                <div className={"text-center font-bold"}>Header 3 :</div>
            </div>
            <div class="bg-white/[.6] backdrop-blur-lg dark:bg-slate-900/[.6] sticky top-0">
                <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
                        <div class="flex items-center gap-x-3 md:gap-x-5">
                            <img class="flex-shrink-0 size-10 md:size-14 w-40 h-40 rounded-xl"  src="https://dummyimage.com/50x50" alt="Des"/>

                            <div class="grow">
                                <p class="md:text-xl text-gray-800 font-semibold dark:text-gray-200">
                                    Get started today.
                                </p>
                                <p class="text-sm md:text-base text-gray-800 dark:text-gray-200">
                                    Sign up to get unlimited updates.
                                </p>
                            </div>
                        </div>

                        <div class="text-center sm:text-start flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
                            <div class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Free trial
                            </div>
                            <div class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Buy now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="w-full" src="https://dummyimage.com/1000x600&text=Blured_Background" alt="Description"/>
        </div>
    )
}