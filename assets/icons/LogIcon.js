import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogIcon({size,fill}) {
  return (
    <Svg
      width = {size?size:20}
      height = {size?size:20}
      viewBox="0 0 512 386"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.8 1.3C8.2 7.2 0 18.6 0 34.5 0 45 2.8 51.9 9.9 59.1c7.8 7.7 14.5 10.2 26.1 9.7 13.9-.6 23.3-6.6 29.2-18.6 3-6 3.3-7.5 3.3-15.7 0-7.6-.4-9.8-2.6-14.6C60.2 7.8 49.5.9 35.5.3c-5.1-.2-9.3.2-11.7 1zM132.2 9.6c-15 7.5-18.8 27.2-7.6 40.2 1.9 2.2 5.5 5.1 8.2 6.4l4.7 2.3h356l5.3-2.9c9-5 13.2-12.4 13.2-23.3 0-4.7-.6-7.9-2.1-11C507.3 16 500 9.4 495.1 8c-2.3-.6-65-1-180.7-1h-177l-5.2 2.6zM25 159.5c-6.2 1.7-14.6 7.1-17.7 11.3C1.5 178.6.5 182 .5 193s1 14.4 6.8 22.2c5.8 7.8 20.1 13.6 30.6 12.4 12-1.4 23.4-9.6 28.4-20.4 3.1-6.7 3.1-21.7 0-28.4-7-15.3-25.2-23.7-41.3-19.3zM137 167.9c-4.5 1.4-8.4 3.9-11.6 7.3-5.4 5.7-6.9 9.5-6.9 17.8 0 5.4.6 8.5 1.9 11 2.5 4.9 7.4 9.8 12.1 12.3l4 2.2 176.9.3c119.8.1 178-.1 180.7-.8 14.8-4 22.5-22.7 15.2-37.1-3.1-6-9.2-11.2-15.1-12.9-4.4-1.2-353.2-1.3-357.2-.1zM21 319.2c-3.6 1.4-7.4 4-11.1 7.7-7.1 7.2-9.9 14-9.9 24.6 0 13.8 6.1 24 18.2 30.6 5.9 3.2 6.9 3.4 15.8 3.4 8.2 0 10.3-.4 15.2-2.7 7-3.2 13.3-9.6 16.7-16.8 2.2-4.7 2.6-6.9 2.6-14.5 0-8.2-.3-9.7-3.3-15.7-3.6-7.3-8.7-12.4-16.1-16-6.8-3.3-20.6-3.6-28.1-.6zM136.8 328.4c-22.4 6-25.4 37.6-4.6 48l5.2 2.6h177c115.7 0 178.4-.4 180.7-1 4.9-1.4 12.2-8 14.8-13.3 1.5-3.1 2.1-6.3 2.1-11 0-10.9-4.2-18.3-13.2-23.3l-5.3-2.9-176-.2c-139.4-.1-177 .1-180.7 1.1z"
        fill={fill?fill:"#000000"}
      />
    </Svg>
  )
}

export default LogIcon

