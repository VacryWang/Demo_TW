export default function Table4(){
    return(
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Table 4 :</div>
            </div>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                            <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                    <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                        Cryptocurrency Prices by Market Cap
                                    </h2>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">
                                        The global cryptocurrency market cap today is $1.09 Trillion, a <span class="text-green-500">0.5%</span> change in the last 24 hours.
                                    </p>
                                </div>

                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-slate-800">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    #
                  </span>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap min-w-40">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Coin
                  </span>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Price
                  </span>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    1h
                  </span>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    24h
                  </span>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    7d
                  </span>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    24h Volume
                  </span>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start whitespace-nowrap">
                  <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Mkt Cap
                  </span>
                                        </th>

                                    </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">1</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0.004 0 63.993 64"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/><path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#fff"/></svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">Bitcoin</span>
                                                <span class="text-xs text-gray-500">BTC</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$26,869.14</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.1%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.3%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-3.8%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$15,438,433,675</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$524,007,508,943</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">2</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" height="2500" viewBox="420.1 80.7 1079.8 1758.6" width="983"><path d="m959.8 80.7-539.7 895.6 539.7-245.3z" fill="#8a92b2"/><path d="m959.8 731-539.7 245.3 539.7 319.1zm539.8 245.3-539.8-895.6v650.3z" fill="#62688f"/><path d="m959.8 1295.4 539.8-319.1-539.8-245.3z" fill="#454a75"/><path d="m420.1 1078.7 539.7 760.6v-441.7z" fill="#8a92b2"/><path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f"/></svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">Ethereum</span>
                                                <span class="text-xs text-gray-500">ETH</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$1,546.77</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.2%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.1%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-5.7%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$6,591,963,010</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$185,955,678,121</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">3</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5497 0H38.4507C39.1165 0 39.7315 0.356142 40.0635 0.933924L48.1922 15.0798C48.6137 15.8134 48.4885 16.7393 47.8872 17.3342L25.5127 39.4708C24.7879 40.1879 23.622 40.1879 22.8972 39.4708L0.552922 17.3641C-0.0623286 16.7554 -0.177538 15.8025 0.274888 15.0643L8.96384 0.888538C9.30224 0.336459 9.90273 0 10.5497 0ZM34.8482 6.31565V10.2848H26.9003V13.0367C32.4824 13.3308 36.6704 14.5386 36.7015 15.9863L36.7013 19.0044C36.6702 20.4521 32.4824 21.6599 26.9003 21.954V28.7075H21.6228V21.954C16.0407 21.6599 11.8527 20.4521 11.8217 19.0044L11.8218 15.9863C11.8529 14.5386 16.0407 13.3308 21.6228 13.0367V10.2848H13.6749V6.31565H34.8482ZM24.2616 19.8806C30.2186 19.8806 35.1977 18.8593 36.4162 17.4954C35.3829 16.3388 31.6453 15.4285 26.9003 15.1785V18.0598C26.0499 18.1046 25.167 18.1282 24.2616 18.1282C23.3561 18.1282 22.4733 18.1046 21.6228 18.0598V15.1785C16.8778 15.4285 13.1402 16.3388 12.1069 17.4954C13.3254 18.8593 18.3045 19.8806 24.2616 19.8806Z" fill="#009393"/>
                                                </svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">Tether</span>
                                                <span class="text-xs text-gray-500">USDT</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$0.999970</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.0%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.0%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.1%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$19,869,550,292</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$83,526,487,241</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">4</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                     viewBox="0 0 2496 2496" xml="preserve">
                      <g>
                        <path d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248
                          S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"/>
                          <path d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3
                          l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4
                          L1084.3,821.4z"/>
                          <path d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6
                          l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918
                          L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578
                          L1809.2,1578z"/>
                          <polygon points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  "/>
                          <path d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4
                          L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6
                          l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"/>
                      </g>
                    </svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">BNB</span>
                                                <span class="text-xs text-gray-500">BNB</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$206.10</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.1%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.2%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-3.5%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$274,816,679</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$31,733,331,578</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">5</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" width="2500" height="2500" viewBox="0 0 2500 2500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1250 2500C1940.36 2500 2500 1940.36 2500 1250C2500 559.644 1940.36 0 1250 0C559.644 0 0 559.644 0 1250C0 1940.36 559.644 2500 1250 2500Z" fill="black"/><path d="M1820.4 549.8H2053.6L1568.1 1053.2C1392.3 1235.5 1107.3 1235.5 931.9 1053.2L446.3 549.8H679.5L1048.2 932.2C1159.7 1047.5 1340 1047.5 1451.2 932.2L1820.4 549.8ZM676.6 1950.2H443.3L931.9 1443.4C1107.71261.1 1392.7 1261.1 1568.5 1443.4L2057.1 1950.2H1823.8L1452 1564.4C1340.5 1449.1 1160.2 1449.1 1049 1564.4L676.6 1950.2Z" fill="white"/></svg>
                                                    <span class="font-semibold text-sm text-gray-800 dark:text-white">XRP</span>
                                                    <span class="text-xs text-gray-500">XRP</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$0.484377</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.0%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.6%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-7.3%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$559,515,333</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$25,878,334,217</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">6</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
                                                    <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca"/>
                                                    <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
                                                    <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
                                                </svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">USDC</span>
                                                <span class="text-xs text-gray-500">USDC</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$1.00</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.1%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.0%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.0%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$4,007,517,282</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$25,115,962,449</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">7</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>tron</title><g id="tron"><path class="cls-1" d="M61.55,19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82,3.82,0,0,0-1.11-.62l0,0C41.56,7,3.63-.09,2.89,0a1.4,1.4,0,0,0-.58.22L2.12.37a2.23,2.23,0,0,0-.52.84l-.05.13v.71l0,.11C5.82,14.05,22.68,53,26,62.14c.2.62.58,1.8,1.29,1.86h.16c.38,0,2-2.14,2-2.14S58.41,26.74,61.34,23a9.46,9.46,0,0,0,1-1.48A2.41,2.41,0,0,0,61.55,19.28ZM36.88,23.37,49.24,13.12l7.25,6.68Zm-4.8-.67L10.8,5.26l34.43,6.35ZM34,27.27l21.78-3.51-24.9,30ZM7.91,7,30.3,26,27.06,53.78Z"/></g></svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">Tron</span>
                                                <span class="text-xs text-gray-500">TRX</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$1,546.64</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.2%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.0%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-5.7%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$2,882,655</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$13,629,792,526</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">8</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0.004 0 63.993 64"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/><path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#fff"/></svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">Solana</span>
                                                <span class="text-xs text-gray-500">SOL</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$22.11</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.1%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">3.6%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-6.7%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$317,711,493</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$9,153,498,199</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">9</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                     viewBox="0 0 375 346.5" xml="preserve">
                                                    <g id="Layer_2_1_">
                        <g id="Layer_1-2">
                          <path class="st0" d="M102.8,172c-0.8,13.9,9.9,25.8,23.8,26.6c0.5,0,1,0,1.5,0c14,0,25.3-11.3,25.2-25.3c0-14-11.3-25.3-25.3-25.2
                            C114.6,148.1,103.5,158.6,102.8,172z"/>
                            <path class="st0" d="M8.6,165.5c-4.5-0.3-8.4,3.2-8.6,7.7s3.2,8.4,7.7,8.6c4.5,0.3,8.3-3.2,8.6-7.7
                            C16.6,169.6,13.1,165.8,8.6,165.5C8.6,165.5,8.6,165.5,8.6,165.5z"/>
                            <path class="st0" d="M101.2,25.4c4-2,5.6-7,3.6-11c-2-4-7-5.6-11-3.6c-4,2-5.6,6.9-3.6,10.9C92.2,25.8,97.1,27.5,101.2,25.4
                            C101.1,25.4,101.2,25.4,101.2,25.4z"/>
                            <path class="st0" d="M126.8,70.1c6.2-3.1,8.7-10.7,5.6-16.9s-10.7-8.7-16.9-5.6c-6.2,3.1-8.7,10.7-5.6,16.9
                            C113,70.7,120.6,73.2,126.8,70.1z"/>
                            <path class="st0" d="M40.6,100.8c4.8,3.1,11.2,1.8,14.4-3c3.1-4.8,1.8-11.2-3-14.4c-4.8-3.1-11.2-1.8-14.4,3c0,0,0,0,0,0
                            C34.4,91.2,35.8,97.7,40.6,100.8z"/>
                            <path class="st0" d="M55.9,161c-7-0.4-12.9,4.9-13.3,11.9s4.9,12.9,11.9,13.3c7,0.4,12.9-4.9,13.3-11.9c0,0,0,0,0,0
                            C68.2,167.4,62.9,161.4,55.9,161z"/>
                            <path class="st0" d="M42,245.7c-5.1,2.6-7.2,8.8-4.6,14c2.6,5.1,8.8,7.2,14,4.6c5.1-2.6,7.2-8.8,4.6-14c0,0,0,0,0,0
                            C53.4,245.2,47.1,243.1,42,245.7C42,245.7,42,245.7,42,245.7z"/>
                            <path class="st0" d="M91,134.9c6.9,4.5,16.1,2.6,20.5-4.3c4.5-6.9,2.6-16.1-4.3-20.5c-6.9-4.5-16.1-2.6-20.5,4.3
                            C82.2,121.2,84.1,130.4,91,134.9C91,134.9,91,134.9,91,134.9z"/>
                            <path class="st0" d="M246.5,69.1c5.8,3.8,13.7,2.2,17.5-3.6s2.2-13.7-3.6-17.5c-5.8-3.8-13.7-2.2-17.5,3.6c0,0,0,0,0,0
                            C239,57.5,240.6,65.3,246.5,69.1C246.5,69.1,246.5,69.1,246.5,69.1z"/>
                            <path class="st0" d="M272.3,24.6c3.8,2.5,8.8,1.4,11.3-2.4s1.4-8.8-2.4-11.3c-3.8-2.5-8.8-1.4-11.3,2.3
                            C267.5,17,268.6,22.1,272.3,24.6C272.3,24.6,272.3,24.6,272.3,24.6z"/>
                            <path class="st0" d="M248.4,147.9c-13.9-0.8-25.9,9.9-26.6,23.8c-0.8,13.9,9.9,25.9,23.8,26.6c0.5,0,1,0,1.4,0
                            c13.9,0,25.2-11.3,25.2-25.3C272.3,159.7,261.8,148.6,248.4,147.9L248.4,147.9z"/>
                            <path class="st0" d="M135.1,133.1c4.3,8.5,13,13.9,22.6,13.9c13.9,0,25.2-11.3,25.2-25.3c0-3.9-0.9-7.8-2.7-11.4
                            c-6.3-12.5-21.5-17.5-33.9-11.2C133.8,105.5,128.8,120.7,135.1,133.1L135.1,133.1z"/>
                            <path class="st0" d="M333,100.8c5.1-2.6,7.1-8.9,4.5-14c-2.6-5.1-8.9-7.1-14-4.5c-5.1,2.6-7.1,8.8-4.6,13.9
                            C321.6,101.3,327.8,103.4,333,100.8C333,100.8,333,100.8,333,100.8z"/>
                            <path class="st0" d="M269,108.8c-7.3,3.7-10.3,12.6-6.6,19.9c3.7,7.3,12.6,10.3,19.9,6.6c7.3-3.7,10.3-12.6,6.6-19.9
                            C285.2,108.1,276.3,105.2,269,108.8z"/>
                            <path class="st0" d="M186.5,20.8c5.7,0.3,10.6-4.1,11-9.8s-4.1-10.6-9.8-11c-5.7-0.3-10.6,4-11,9.7
                            C176.4,15.5,180.8,20.4,186.5,20.8C186.5,20.8,186.5,20.8,186.5,20.8z"/>
                            <path class="st0" d="M186.4,86.1c8.2,0.5,15.2-5.8,15.6-14c0.5-8.2-5.8-15.2-14-15.6c-8.2-0.5-15.2,5.8-15.6,14
                            C172,78.7,178.2,85.7,186.4,86.1C186.4,86.1,186.4,86.1,186.4,86.1z"/>
                            <path class="st0" d="M106,237.7c7.3-3.7,10.3-12.6,6.6-19.9c-3.7-7.3-12.6-10.3-19.9-6.6c-7.3,3.7-10.3,12.6-6.6,19.9
                            C89.8,238.4,98.7,241.4,106,237.7z"/>
                            <path class="st0" d="M196,107.8c-7.6,11.7-4.4,27.3,7.3,34.9c11.7,7.6,27.3,4.4,34.9-7.3c7.6-11.7,4.4-27.3-7.3-34.9
                            c-4.1-2.7-8.9-4.1-13.8-4.1C208.6,96.4,200.7,100.7,196,107.8z"/>
                            <path class="st0" d="M239.9,213.4c-6.3-12.5-21.5-17.5-33.9-11.2c-12.5,6.3-17.5,21.5-11.2,33.9c6.3,12.5,21.5,17.5,33.9,11.2
                            c0,0,0,0,0,0c12.4-6.2,17.5-21.2,11.3-33.7C240,213.5,240,213.5,239.9,213.4z"/>
                            <path class="st0" d="M284,211.6c-6.9-4.5-16.1-2.6-20.5,4.3c-4.5,6.9-2.6,16.1,4.3,20.5c6.9,4.5,16.1,2.6,20.5-4.3
                            C292.8,225.3,290.9,216.1,284,211.6C284,211.6,284,211.6,284,211.6z"/>
                            <path class="st0" d="M332.4,173.7c0.4-7-4.9-12.9-11.9-13.3c-7-0.4-12.9,4.9-13.3,11.9c-0.4,7,4.9,12.9,11.9,13.3c0,0,0,0,0,0
                            C326,186,332,180.6,332.4,173.7z"/>
                            <path class="st0" d="M367.3,164.7c-4.5-0.3-8.4,3.2-8.6,7.7s3.2,8.4,7.7,8.6c4.5,0.3,8.3-3.2,8.6-7.7
                            C375.2,168.8,371.8,165,367.3,164.7z"/>
                            <path class="st0" d="M334.4,245.7c-4.8-3.1-11.2-1.8-14.4,3c-3.1,4.8-1.8,11.2,3,14.4c4.8,3.1,11.2,1.8,14.4-3
                            C340.6,255.3,339.2,248.8,334.4,245.7C334.4,245.7,334.4,245.7,334.4,245.7z"/>
                            <path class="st0" d="M102.6,321.9c-3.8-2.5-8.8-1.4-11.3,2.3c-2.5,3.8-1.4,8.8,2.3,11.3c3.8,2.5,8.8,1.4,11.3-2.3c0,0,0,0,0,0
                            C107.5,329.5,106.4,324.4,102.6,321.9z"/>
                            <path class="st0" d="M273.8,321.1c-4,2-5.6,7-3.6,11c2,4,7,5.6,11,3.6c4-2,5.6-6.9,3.6-10.9C282.8,320.7,277.9,319,273.8,321.1
                            C273.9,321.1,273.8,321.1,273.8,321.1z"/>
                            <path class="st0" d="M179,238.7c7.6-11.7,4.4-27.3-7.3-35c-11.7-7.6-27.3-4.4-35,7.3s-4.4,27.3,7.3,35c4.1,2.7,8.9,4.1,13.8,4.1
                            C166.4,250.2,174.3,245.9,179,238.7z"/>
                            <path class="st0" d="M128.5,277.4c-5.8-3.8-13.7-2.2-17.5,3.6c-3.8,5.8-2.2,13.7,3.6,17.5s13.7,2.2,17.5-3.6c0,0,0,0,0,0
                            C136,289.1,134.4,281.2,128.5,277.4z"/>
                            <path class="st0" d="M187.4,325.7c-5.7-0.3-10.6,4.1-11,9.8s4.1,10.6,9.8,11c5.7,0.3,10.6-4,11-9.7
                            C197.5,331,193.1,326.1,187.4,325.7C187.4,325.7,187.4,325.7,187.4,325.7z"/>
                            <path class="st0" d="M187.5,260.4c-8.2-0.5-15.2,5.8-15.6,14c-0.5,8.2,5.8,15.2,14,15.6c8.2,0.4,15.2-5.8,15.6-14
                            C202,267.9,195.7,260.8,187.5,260.4C187.5,260.4,187.5,260.4,187.5,260.4z"/>
                            <path class="st0" d="M248.2,276.4c-6.2,3.2-8.7,10.8-5.5,17c3.2,6.2,10.8,8.7,17,5.5c6.2-3.1,8.7-10.7,5.6-16.9
                            C262.1,275.8,254.5,273.2,248.2,276.4C248.2,276.4,248.2,276.4,248.2,276.4z"/>
                        </g>
                      </g>
                    </svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">Cardano</span>
                                                <span class="text-xs text-gray-500">ADA</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$0.245322</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.3%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.3%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">6.4%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$100,329,073</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$8,551,032,069</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <button type="button" class="flex items-center gap-x-2">
                                                <svg class="flex-shrink-0 size-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="text-sm text-gray-800 dark:text-gray-200">10</span>
                                            </button>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <div class="flex items-center gap-x-3">
                                                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                     viewBox="0 0 38.4 33.5" xml="preserve">
                                                    <g>
                        <path class="st0" d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
                          c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
                          c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                          c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
                          L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                          c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"/>
                      </g>
                    </svg>
                                                <span class="font-semibold text-sm text-gray-800 dark:text-white">Polygon</span>
                                                <span class="text-xs text-gray-500">MATIC</span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$0.058460</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-0.1%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-green-500">0.9%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-red-500">-5.0%</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$181,045,590</span>
                                        </td>
                                        <td class="size-px whitespace-nowrap px-6 py-3">
                                            <span class="text-sm text-gray-800 dark:text-white">$8,258,820,867</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}