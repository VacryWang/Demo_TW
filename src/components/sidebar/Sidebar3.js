export default function Sidebar3(){
    return(
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-16"}>
                <div className={"text-center font-bold"}>Sidebar 3 :</div>
            </div>

            <div className="grid grid-cols-4 h-40 overflow-y-scroll mb-16 max-w-[50rem] mx-auto" id="scrollspy-scrollable-parent-2">
                <div className=" col-span-1">
                    <h2 className=" text-xl font-bold dark:text-white ">Scroll Spy</h2>

                    <ul className=" sticky top-0" data-hs-scrollspy="#scrollspy-2" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2">
                        <li data-hs-scrollspy-group>
                            <a href="#item-1" className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 focus:outline-none focus:text-blue-600 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active">Item 1</a>
                            <ul>
                                <li className="ms-4">
                                    <a href="#item-1-1" className="group flex items-center gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        Item 1-1
                                    </a>
                                </li>
                                <li className="ms-4">
                                    <a href="#item-1-2" className="group flex items-center gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        Item 1-2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#item-2" className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 focus:outline-none focus:text-blue-600 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">Item 2</a>
                        </li>
                        <li data-hs-scrollspy-group>
                            <a href="#item-3" className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 focus:outline-none focus:text-blue-600 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">Item 3</a>
                            <ul>
                                <li className="ms-4">
                                    <a href="#item-3-1" className="group flex items-center gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        Item 3-1
                                    </a>
                                </li>
                                <li className="ms-4">
                                    <a href="#item-3-2" className="group flex items-center gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        Item 3-2
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="col-span-3">
                    <div id="scrollspy-2" className="space-y-4">
                        <div id="item-1">
                            <h3 className="text-lg font-semibold dark:text-white">Item 1</h3>
                            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        </div>

                        <div id="item-1-1">
                            <h3 className="text-lg font-semibold dark:text-white">Item 1-1</h3>
                            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        </div>

                        <div id="item-1-2">
                            <h3 className="text-lg font-semibold dark:text-white">Item 1-2</h3>
                            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        </div>

                        <div id="item-2">
                            <h3 className="text-lg font-semibold dark:text-white">Item 2</h3>
                            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        </div>

                        <div id="item-3">
                            <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
                            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        </div>

                        <div id="item-3-1">
                            <h3 class="text-lg font-semibold dark:text-white">Item 3-1</h3>
                            <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        </div>

                        <div id="item-3-2">
                            <h3 class="text-lg font-semibold dark:text-white">Item 3-2</h3>
                            <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}