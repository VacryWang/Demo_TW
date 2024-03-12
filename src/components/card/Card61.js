export default function Card61(){
    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Card 61 :</div>
            </div>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer stories</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/*<div class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">*/}
                    <div className="group bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
                        <div class="aspect-w-16 aspect-h-10">
                            <img class="w-full object-cover rounded-xl opacity-60" src="https://dummyimage.com/400x240" alt=" Description"/>
                        </div>
                        <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
                            Unity’s inside sales team drives 80% of its revenue with Preline.
                        </h3>
                        <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Learn more
                            <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </p>
                    </div>

                    <div class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
                        <div class="aspect-w-16 aspect-h-10">
                            <img class="w-full object-cover rounded-xl opacity-60" src="https://dummyimage.com/400x240" alt=" Description"/>
                        </div>
                        <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
                            Living Spaces creates a unified experience across the customer journey.
                        </h3>
                        <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Learn more
                            <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </p>
                    </div>

                    <div class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
                        <div class="aspect-w-16 aspect-h-10">
                            <img class="w-full object-cover rounded-xl opacity-60" src="https://dummyimage.com/400x240" alt=" Description"/>
                        </div>
                        <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
                            Atlassian powers sales and support at scale with Preline.
                        </h3>
                        <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Learn more
                            <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}