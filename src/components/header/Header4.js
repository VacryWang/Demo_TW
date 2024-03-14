export default function Header4(){
    return(
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mt-16 mb-16"}>
                <div className={"text-center font-bold"}>Header 4 :</div>
            </div>
            <div class="bg-gradient-to-r from-purple-600 to-blue-400">
                <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
                        <div class="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
                            <p class="me-5 inline-block text-sm font-semibold text-white">
                                Ready to get started?
                            </p>
                            <div class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Sign up
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
                                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                Watch demo
                            </div>
                            <span class="inline-block border-e border-white/[.3] w-px h-5 mx-2"></span>
                            <div class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
                                Explore what's new
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}