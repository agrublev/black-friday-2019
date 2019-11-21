import React from "react";

const SvgBullet = props => (
	<svg width={33} height={42} {...props}>
		<g fill="none" fillRule="evenodd">
			<path
				d="M21.64 19.741L1.898 0 0 1.898l18.792 18.793L0 39.483l1.898 1.898L21.64 21.64a1.34 1.34 0 0 0 0-1.899z"
				fill="#EA1E6A"
			/>
			<path
				d="M12.637 0l-1.898 1.898L29.53 20.691 10.739 39.483l1.898 1.898L32.378 21.64a1.34 1.34 0 0 0 0-1.899L12.637 0z"
				fill="#EF8F23"
			/>
		</g>
	</svg>
);

export default SvgBullet;
