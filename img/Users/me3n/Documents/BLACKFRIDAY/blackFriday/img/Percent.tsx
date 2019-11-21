import React from "react";

const SvgPercent = props => (
    <svg width={1828} height={1118} xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
        <defs>
            <rect id="b" x={251} y={646} width={451.1} height={111.8} rx={55.9} />
            <filter
                x="-10.8%"
                y="-39.8%"
                width="121.5%"
                height="186.8%"
                filterUnits="objectBoundingBox"
                id="a"
            >
                <feOffset dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
                <feMorphology radius={9.1} in="SourceAlpha" result="shadowInner" />
                <feOffset dy={4} in="shadowInner" result="shadowInner" />
                <feComposite
                    in="shadowOffsetOuter1"
                    in2="shadowInner"
                    operator="out"
                    result="shadowOffsetOuter1"
                />
                <feGaussianBlur
                    stdDeviation={15.5}
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                />
                <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0992980072 0"
                    in="shadowBlurOuter1"
                />
            </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path fill="#45B449" d="M0 15h1447V0H0zM1447 0h381v1118l-189.257-119.406L1447 1118z" />
            <text
                fontFamily="Lato-Black, Lato"
                fontSize={100}
                fontWeight={700}
                fill="#FFF"
                transform="translate(1447)"
            >
                <tspan x={43.45} y={200}>
                    {`Yearly`}
                </tspan>
            </text>
            <g fill="#FFF">
                <text
                    fontFamily="Lato-Black, Lato"
                    fontSize={81}
                    fontWeight={700}
                    transform="translate(1476 528)"
                >
                    <tspan x={4.362} y={80}>
                        {`Monthly`}
                    </tspan>
                </text>
                <text
                    fontFamily="Lato-Regular, Lato"
                    fontSize={100}
                    transform="translate(1476 528)"
                >
                    <tspan x={34.4} y={211}>
                        {`$5.99`}
                    </tspan>
                    <tspan x={0.098} y={331} fontSize={63}>
                        {`user/month`}
                    </tspan>
                </text>
            </g>
            <text
                fontFamily="Lato-Regular, Lato"
                fontSize={100}
                fill="#FFF"
                transform="translate(1447)"
            >
                <tspan x={63.4} y={335}>
                    {`$4.49`}
                </tspan>
                <tspan x={29.098} y={455} fontSize={63}>
                    {`user/month`}
                </tspan>
            </text>
            <g>
                <text
                    fontFamily="Lato-Regular, Lato"
                    fontSize={154}
                    fill="#FFF"
                    transform="translate(247 143)"
                >
                    <tspan x={19.272} y={152}>
                        {`Business Plan`}
                    </tspan>
                    <tspan x={164.456} y={337} fontFamily="Lato-Bold, Lato" fontWeight="bold">
                        {`34% OFF`}
                    </tspan>
                </text>
                <text
                    fontFamily="Lato-Regular, Lato"
                    fontSize={48}
                    fill="#4C4C4C"
                    transform="translate(247 143)"
                >
                    <tspan x={82.368} y={472}>
                        {`Get our regular Business Plan with a`}
                    </tspan>
                    <tspan x={264.528} y={533}>
                        {`fantastic discount!`}
                    </tspan>
                </text>
                <g transform="translate(247 143)">
                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                    <rect
                        stroke="#CD1D5F"
                        strokeWidth={9.1}
                        strokeLinejoin="square"
                        x={255.55}
                        y={650.55}
                        width={442}
                        height={102.7}
                        rx={51.35}
                    />
                </g>
                <text
                    fill="#FFF"
                    fontFamily="Helvetica"
                    fontSize={46.41}
                    transform="translate(247 143)"
                >
                    <tspan x={357.885} y={718.3}>
                        {`Get it soon!`}
                    </tspan>
                </text>
            </g>
        </g>
    </svg>
);

export default SvgPercent;
