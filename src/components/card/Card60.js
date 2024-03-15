export default function Card60() {
    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Card 60 :</div>
            </div>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="grid lg:grid-cols-2 gap-6">
                    <div class="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                            <img class="size-full absolute top-0 start-0 object-cover opacity-50" src="https://dummyimage.com/460x500" alt="Description"/>
                        </div>

                        <div class="grow">
                            <div class="p-4 flex flex-col h-full sm:p-6">
                                <div class="mb-3">
                                    <p class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                        Business
                                    </p>
                                </div>
                                {/*<h3 class="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">*/}
                                <h3 className="text-lg sm:text-2xl font-semibold text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                    Preline becomes an official Instagram Marketing Partner
                                </h3>
                                <p class="mt-2 text-gray-600 dark:text-gray-400">
                                    Great news we're eager to share.
                                </p>

                                <div class="mt-5 sm:mt-auto">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <img class="size-[46px] rounded-full opacity-50" src="https://dummyimage.com/101x101/" alt="Description"/>
                                        </div>
                                        <div class="ms-2.5 sm:ms-4">
                                            <h4 class="font-semibold text-gray-800 dark:text-gray-200">
                                                Aaron Larsson
                                            </h4>
                                            <p class="text-xs text-gray-500">
                                                Feb 15, 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                            <img class="size-full absolute top-0 start-0 object-cover opacity-50" src="https://dummyimage.com/460x500" alt="Description"/>
                        </div>
                        <div class="grow">
                            <div class="p-4 flex flex-col h-full sm:p-6">
                                <div class="mb-3">
                                    <p class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                        Announcements
                                    </p>
                                </div>
                                <h3 class="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                    Announcing a free plan for small teams
                                </h3>
                                <p class="mt-2 text-gray-600 dark:text-gray-400">
                                    At Wake, our mission has always been focused on bringing openness.
                                </p>

                                <div class="mt-5 sm:mt-auto">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <img class="size-[46px] rounded-full opacity-50" src="https://dummyimage.com/101x101/" alt="Description"/>
                                        </div>
                                        <div class="ms-2.5 sm:ms-4">
                                            <h4 class="font-semibold text-gray-800 dark:text-gray-200">
                                                Hanna Wolfe
                                            </h4>
                                            <p class="text-xs text-gray-500">
                                                Feb 4, 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}