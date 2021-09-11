import $ from "taro-axios";
/**
 * 获取天气信息
 * @param {number} cityCode
 * @returns
 */
export default function getWeather(cityCode='河北省') {
    const key = "9c49ff55128adf0fc7480c2978dbcbce",
        city = cityCode;
    return $.get(
        `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=${key}`
    );
}