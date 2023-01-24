import React, { ReactNode } from "react";
import "./Banner.css";

interface Props {
	header?: string;
	children?: ReactNode;
	titleStyles?: object;
	backgroundStyles?: object;
}

const Banner: React.FC<Props> = ({ header, backgroundStyles, titleStyles, ...props }) => {
	return (
		<div className="banner__root">
			<header className="banner__header" style={backgroundStyles}>
				<div className="banner__toolbar" id="back-to-top-anchor">
					<div className="banner__title" style={titleStyles}>
						{header ? header : props.children}
					</div>
				</div>
			</header>
		</div>
	);
};

Banner.defaultProps = {
	children: (
		<p>
			Celebrate the New Year with the <b> Gnosis Builders 2023 NFT! </b>{" "}
			Minting{" "}
			<a
				href="https://nft.gnosis.builders/"
				target="_blank"
				rel="noreferrer noopener"
			>
				{" "}
				now live
			</a>
			.
		</p>
	),
};

export default Banner;
