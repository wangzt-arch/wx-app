import $ from "taro-axios";
/**
 * 实时天气
 */
export default function getWeather(cityCode = '河北省') {
    const key = "9c49ff55128adf0fc7480c2978dbcbce",
        city = cityCode;
    return $.get(
        `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=${key}`
    );
}
/**
 * 天气预报
 */
export function getForecastsWeather(cityCode = '河北省') {
    const params = {
        city: cityCode,
        key: "9c49ff55128adf0fc7480c2978dbcbce",
        extensions: 'all'
    }
    return $.get(
        `https://restapi.amap.com/v3/weather/weatherInfo`, { params }
    );
}