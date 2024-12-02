import { useQuery } from "react-query";
import { fetchCoinHistroy } from "../api";
import ApexCharts from "react-apexcharts";
import { ChartProps, IHistorical } from "../interface";

function Chart({ coinId, isDark }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistroy(coinId), {
        refetchInterval: 10000,
    })

    return (
        <div>{
            isLoading ?
                "Loading chart..." :
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
                        theme: {
                            mode: isDark ? "dark" : "light"
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                            animations: {
                                enabled: true,
                                speed: 800,
                                animateGradually: {
                                    enabled: true,
                                    delay: 150,
                                },
                                dynamicAnimation: {
                                    enabled: true,
                                    speed: 350,
                                }
                            }
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

                    }}
                />
        }
        </div>
    );
}

export default Chart;