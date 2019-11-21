import React from "react";

const SvgPremium = props => (
    <svg width={1837} height={1323} xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
        <defs>
            <rect id="b" x={0} y={0} width={451.1} height={111.8} rx={55.9} />
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
            <path fill="#45B449" d="M381 15h1456V0H381zM0 0h381v1323l-189.257-141.3L0 1323z" />
            <text fontFamily="Lato-Black, Lato" fontSize={100} fontWeight={700} fill="#FFF">
                <tspan x={43.45} y={200}>
                    {`Yearly`}
                </tspan>
            </text>
            <g fill="#FFF">
                <text
                    fontFamily="Lato-Black, Lato"
                    fontSize={81}
                    fontWeight={700}
                    transform="translate(29 528)"
                >
                    <tspan x={4.362} y={80}>
                        {`Monthly`}
                    </tspan>
                </text>
                <text fontFamily="Lato-Regular, Lato" fontSize={100} transform="translate(29 528)">
                    <tspan x={34.4} y={211}>
                        {`$9.99`}
                    </tspan>
                    <tspan x={0.098} y={331} fontSize={63}>
                        {`user/month`}
                    </tspan>
                </text>
            </g>
            <text fontFamily="Lato-Regular, Lato" fontSize={100} fill="#FFF">
                <tspan x={63.4} y={335}>
                    {`$8.99`}
                </tspan>
                <tspan x={29.098} y={455} fontSize={63}>
                    {`user/month`}
                </tspan>
            </text>
            <text
                fontFamily="Lato-Regular, Lato"
                fontSize={125}
                fill="#FFF"
                transform="translate(475 68)"
            >
                <tspan x={0.188} y={123}>
                    {`Business Premium Plan`}
                </tspan>
            </text>
            <text
                fontFamily="Lato-Regular, Lato"
                fontSize={48}
                fill="#4C4C4C"
                transform="translate(475 68)"
            >
                <tspan x={102.752} y={208}>
                    {`A brand new Business plan that includes Enterprise`}
                </tspan>
                <tspan x={167.408} y={269}>
                    {`Only features only available for Black Friday!`}
                </tspan>
            </text>
            <text
                fontFamily="Lato-Regular, Lato"
                fontSize={31}
                fill="#4C4C4C"
                transform="translate(476 488)"
            >
                <tspan x={61.48} y={101.74}>
                    {`Add cutting edge security to your system by utilizing a secretly generated`}
                </tspan>
                <tspan x={61.48} y={152.74}>
                    {`code to login that changes every 30 seconds!`}
                </tspan>
            </text>
            <path
                d="M497.64 515.741L477.898 496 476 497.898l18.792 18.793L476 535.483l1.898 1.898 19.742-19.741a1.34 1.34 0 0 0 0-1.899z"
                fill="#EA1E6A"
            />
            <path
                d="M488.637 496l-1.898 1.898 18.792 18.793-18.792 18.792 1.898 1.898 19.741-19.741a1.34 1.34 0 0 0 0-1.899L488.637 496z"
                fill="#EF8F23"
            />
            <text
                fontFamily="Lato-Regular, Lato"
                fontSize={47}
                fill="#FFF"
                transform="translate(476 488)"
            >
                <tspan x={61.74} y={46.74}>
                    {`Two-Factor Authentication`}
                </tspan>
            </text>
            <g>
                <text
                    fontFamily="Lato-Bold, Lato"
                    fontSize={31}
                    fontWeight="bold"
                    fill="#4C4C4C"
                    transform="translate(475 687)"
                >
                    <tspan x={61.74} y={101}>
                        {`Take Project’s to the next level by adding status updates, setting a delivery`}
                    </tspan>
                    <tspan x={61.74} y={152}>
                        {`date, and generating in-depth reports.`}
                    </tspan>
                </text>
                <path
                    d="M496.64 714.002l-19.742-19.742-1.898 1.898 18.792 18.793L475 733.743l1.898 1.898L496.64 715.9a1.34 1.34 0 0 0 0-1.898z"
                    fill="#EA1E6A"
                />
                <path
                    d="M487.637 694.26l-1.898 1.898 18.792 18.793-18.792 18.792 1.898 1.898 19.741-19.741a1.34 1.34 0 0 0 0-1.898l-19.741-19.742z"
                    fill="#EF8F23"
                />
                <text
                    fontFamily="Lato-Bold, Lato"
                    fontSize={47}
                    fontWeight="bold"
                    fill="#FFF"
                    transform="translate(475 687)"
                >
                    <tspan x={61.74} y={46}>
                        {`Project Overview`}
                    </tspan>
                </text>
            </g>
            <g>
                <text
                    fontFamily="Lato-Bold, Lato"
                    fontSize={31}
                    fontWeight="bold"
                    fill="#4C4C4C"
                    transform="translate(475 885)"
                >
                    <tspan x={61.74} y={101}>
                        {`Make Freedcamp truly yours! Customize the sytem with your company's`}
                    </tspan>
                    <tspan x={61.74} y={152}>
                        {`branding.`}
                    </tspan>
                </text>
                <path
                    d="M496.64 912.002l-19.742-19.742-1.898 1.898 18.792 18.793L475 931.743l1.898 1.898L496.64 913.9a1.34 1.34 0 0 0 0-1.898z"
                    fill="#EA1E6A"
                />
                <path
                    d="M487.637 892.26l-1.898 1.898 18.792 18.793-18.792 18.792 1.898 1.898 19.741-19.741a1.34 1.34 0 0 0 0-1.898l-19.741-19.742z"
                    fill="#EF8F23"
                />
                <text
                    fontFamily="Lato-Bold, Lato"
                    fontSize={47}
                    fontWeight="bold"
                    fill="#FFF"
                    transform="translate(475 885)"
                >
                    <tspan x={61.74} y={46}>
                        {`White Label`}
                    </tspan>
                </text>
            </g>
            <text
                fontFamily="Lato-Bold, Lato"
                fontSize={55}
                fontWeight="bold"
                fill="#CD1D5F"
                transform="translate(475 68)"
            >
                <tspan x={0.349} y={382}>
                    {`Includes:`}
                </tspan>
            </text>
            <g>
                <g transform="translate(803 1143)">
                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                    <rect
                        stroke="#CD1D5F"
                        strokeWidth={9.1}
                        strokeLinejoin="square"
                        x={4.55}
                        y={4.55}
                        width={442}
                        height={102.7}
                        rx={51.35}
                    />
                </g>
                <text
                    fill="#FFF"
                    fontFamily="Helvetica"
                    fontSize={46.41}
                    transform="translate(803 1143)"
                >
                    <tspan x={106.885} y={72.3}>
                        {`Get it soon!`}
                    </tspan>
                </text>
            </g>
        </g>
    </svg>
);

export default SvgPremium;
