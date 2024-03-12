export default function Card57() {
    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Card 57 :</div>
            </div>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Insights</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with insights from industry experts.</p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl opacity-50" src="https://dummyimage.com/400x240" alt="Description"/>
        <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          Sponsored
        </span>
                        </div>

                        <div class="mt-7">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                                Studio by Preline
                            </h3>
                            <p class="mt-3 text-gray-800 dark:text-gray-200">
                                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                            </p>
                            <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </p>
                        </div>
                    </div>

                    <div class="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl opacity-50" src="https://dummyimage.com/400x240" alt="Description"/>
                        </div>

                        <div class="mt-7">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                                Onsite
                            </h3>
                            <p class="mt-3 text-gray-800 dark:text-gray-200">
                                Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
                            </p>
                            <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </p>
                        </div>
                    </div>

                    <div class="group relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg transition opacity-50 bg-[url('https://dummyimage.com/460x500')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="flex-auto p-4 md:p-6">
                            <h3 className="text-xl text-black"><span className="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>
                            {/*<h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>*/}
                        </div>
                        <div className="pt-0 p-4 md:p-6">
                            {/*<div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">*/}
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-black">
                                Visit the site
                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}