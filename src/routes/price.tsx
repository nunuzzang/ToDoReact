import { PriceProps } from "../interface";
import { Box, BoxContainter, MaxBox, MaxContainer, MaxStyle, Percent, PercentBox, Time } from "../component";

function Price({
    coinId,
    ath_price,
    ath_date,
    percent_change_30m,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    percent_change_30d,
    percent_change_1y,
    percent_from_price_ath, }: PriceProps) {

    const percentList = [
        { text: "30분", value: percent_change_30m },
        { text: "1시간", value: percent_change_1h },
        { text: "24시간", value: percent_change_24h },
        { text: "7일", value: percent_change_7d },
        { text: "30일", value: percent_change_30d },
        { text: "1년", value: percent_change_1y },
    ];

    return (
        <div>
            <MaxContainer>
                <MaxBox>
                    <MaxStyle>최고가: ${ath_price?.toFixed(3)}  ({ath_date?.slice(0, 10)})</MaxStyle>
                    <MaxStyle>최고가와 현재 시세의 차이</MaxStyle>
                    <PercentBox percent={percent_from_price_ath}>
                        <Percent>
                            {percent_from_price_ath && percent_from_price_ath > 0
                                ? `To the moon!`
                                : `${percent_from_price_ath}%`}
                        </Percent>
                    </PercentBox>
                </MaxBox>
            </MaxContainer>
            <BoxContainter>{
                percentList.map((item) => (
                    <Box key={item.text}>
                        <Time> {item.text}전과 현재 시세 차이</Time>
                        <PercentBox percent={item.value}>
                            <Percent>
                                {item.value && item.value > 0
                                    ? `+${item.value}%`
                                    : `${item.value}%`}
                            </Percent>
                        </PercentBox>
                    </Box>
                ))}
            </BoxContainter>

        </div>
    );
}

export default Price;