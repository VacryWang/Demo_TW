export default function Table2() {
    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Table 2 :</div>
            </div>
            <div className="mt-20 lg:mt-16 max-w-[80rem] mx-auto mb-16">
                <div className="lg:text-center mb-10 lg:mb-20">
                    <h3 className="text-2xl font-semibold dark:text-white">Compare plans</h3>
                </div>
                <div className="space-y-24 lg:hidden">
                    <section>
                        <div className="px-4 mb-4">
                            <h2 className="text-lg leading-6 font-medium text-gray-800">Free</h2>
                        </div>
                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Financial data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                On-chain data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Network growth</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Average token age consumed</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Exchange flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Transaction volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total circulation (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">ETH gas used</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Social data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Dev activity</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Topic search</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Relative social dominance</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total social volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <div className="px-4 mb-4">
                            <h2 className="text-lg leading-6 font-medium text-gray-800">Startup</h2>
                        </div>
                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Financial data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                On-chain data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Network growth</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Average token age consumed</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Exchange flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Transaction volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total circulation (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">ETH gas used</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Social data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Dev activity</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Topic search</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Relative social dominance</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total social volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <div className="px-4 mb-4">
                            <h2 className="text-lg leading-6 font-medium text-gray-800">Team</h2>
                        </div>
                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Financial data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                On-chain data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Network growth</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Average token age consumed</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Exchange flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Transaction volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total circulation (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">ETH gas used</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Social data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Dev activity</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Topic search</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Relative social dominance</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total social volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                    <span className="sr-only">No</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <div className="px-4 mb-4">
                            <h2 className="text-lg leading-6 font-medium text-gray-800">Enterprise</h2>
                        </div>
                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Financial data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                On-chain data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Network growth</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Average token age consumed</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Exchange flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Transaction volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total circulation (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">ETH gas used</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="w-full">
                            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                                Social data
                            </caption>
                            <thead>
                            <tr>
                                <th className="sr-only" scope="col">Feature</th>
                                <th className="sr-only" scope="col">Included</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Dev activity</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Topic search</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Relative social dominance</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-200 dark:border-gray-700">
                                <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total social volume</th>
                                <td className="py-5 pe-4">
                                    <svg className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="sr-only">Yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>

                <div className="hidden lg:block">
                    <table className="w-full h-px">
                        <caption className="sr-only">
                            Pricing plan comparison
                        </caption>
                        <thead className="sticky top-0 inset-x-0 bg-white dark:bg-slate-900">
                        <tr>
                            <th className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start" scope="col">
                                <span className="sr-only">Feature by</span>
                                <span className="dark:text-white">Plans</span>
                            </th>

                            <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Free</th>
                            <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Startup</th>
                            <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Team</th>
                            <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Enterprise</th>
                        </tr>
                        </thead>
                        <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <tr>
                            <th className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white" colSpan="5" scope="colgroup">Financial data</th>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Open/High/Low/Close</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Price-volume difference indicator</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Not included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white" colSpan="5" scope="colgroup">On-chain data</th>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Network growth</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Average token age consumed</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Not included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Exchange flow</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Not included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Not included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Transaction volume</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Total circulation (beta)</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Not included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Not included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">ETH gas used</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Not included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white" colSpan="5" scope="colgroup">Social data</th>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Dev activity</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Topic search</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Relative social dominance</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>

                        <tr>
                            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400" scope="row">Relative social dominance</th>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Free</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Startup</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                                <span className="sr-only">Included in Team</span>
                            </td>

                            <td className="py-5 px-6">
                                <svg className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="sr-only">Included in Enterprise</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}