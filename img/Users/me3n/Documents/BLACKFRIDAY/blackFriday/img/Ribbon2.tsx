import React from "react";

const SvgRibbon2 = props => (
	<svg width={381} height={1323} {...props}>
		<g fill="none" fillRule="evenodd">
			<path fill="#45B449" d="M0 0h381v1323l-189.257-141.3L0 1323z" />
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
		</g>
	</svg>
);

export default SvgRibbon2;
