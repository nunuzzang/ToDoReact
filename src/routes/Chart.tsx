import { useQuery } from "react-query";
import { fetchCoinHistroy } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistroy(coinId), {
        // refetchInterval: 10000,
    })

    return (
        <div>{
            isLoading ?
                "Loading chart..." :
                /*  <ApexCharts
                     type="line"
                     series={[
                         {
                             name: "Price",
                             data: data?.map((price) => parseFloat(price.close)) ?? [],
                             // data가 null이나 undefined가 아닐 경우, data의 각 요소에 대해 price.close를 parseFloat로 변환한 배열을 생성
                         },
                     ]}
                     options={{
                         theme: {
                             mode: "dark",
                         },
                         chart: {
                             height: 300,
                             width: 500,
                             toolbar: {
                                 show: false,
                             },
                             background: "transparent"
                         },
                         grid: {
                             show: false,
                         },
                         stroke: {
                             curve: "smooth",
                             width: 4,
                         },
                         yaxis: {
                             show: false,
                         },
                         xaxis: {
                             labels: { show: false, },
                             axisTicks: { show: false },
                             axisBorder: { show: false },
                             type: "datetime",
                             categories: data?.map((price) => new Date(price.time_close * 1000).toISOString())
                             //메소드는 JavaScript에서 Date 객체의 메소드로, 날짜와 시간을 ISO 8601 형식의 문자열로 변환하여 반환
                         },
                         fill: {
                             type: "gradient",
                             gradient: {
                                 gradientToColors: ["#0be881"], stops: [0, 100]
                             },
                         },
                         colors: ["#0fbcf9"],
                         tooltip: {
                             y: {
                                 formatter: (value) => `$${value.toFixed(3)}`,
                             }
                         }
                     }}
                 /> */
                <ApexCharts
                    type="candlestick"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => {
                                const date = new Date(price.time_open * 1000);
                                const month = (date.getMonth() + 1)
                                    .toString()
                                    .padStart(2, "0");
                                const day = date.getDate().toString().padStart(2, "0");
                                return {
                                    x: `${month}-${day}`,
                                    y: [(price.open), (price.high), (price.low), (price.close)],
                                };
                            }) ?? [],
                        },
                    ]}
                    options={{
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: {
                            show: false,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            type: "category",
                            labels: {
                                formatter: (value) => {
                                    return value;
                                },
                            },

                        },
                        tooltip: {

                        }

                    }}
                />
        }
        </div>
    );
}

export default Chart;

// [`${parseFloat(price.open)}`, `${parseFloat(price.high)}`, `${parseFloat(price.low)}`, `${parseFloat(price.close)}`],