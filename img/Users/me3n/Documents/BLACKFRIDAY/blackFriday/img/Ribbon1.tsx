import React from "react";

const SvgRibbon1 = props => (
	<svg width={256} height={1095} {...props}>
		<g fill="none" fillRule="evenodd">
			<path fill="#EA2633" d="M0 0h256v1095L128.835 910.219 0 1095z" />
			<g fill="#FFF" fontFamily="Lato-Black, Lato" fontSize={100} fontWeight={700}>
				<text transform="translate(29 64)">
					<tspan x={0.1} y={99}>
						{`78%`}
					</tspan>
					<tspan x={2.5} y={219} fontFamily="Lato-Regular, Lato" fontWeight="normal">
						{`OFF`}
					</tspan>
				</text>
				<text opacity={0.187} transform="translate(29 64)">
					<tspan x={0.1} y={377}>
						{`78%`}
					</tspan>
					<tspan x={2.5} y={497} fontFamily="Lato-Regular, Lato" fontWeight="normal">
						{`OFF`}
					</tspan>
				</text>
				<text opacity={0.056} transform="translate(29 64)">
					<tspan x={0.1} y={682}>
						{`78%`}
					</tspan>
					<tspan x={2.5} y={802} fontFamily="Lato-Regular, Lato" fontWeight="normal">
						{`OFF`}
					</tspan>
				</text>
			</g>
		</g>
	</svg>
);

export default SvgRibbon1;
