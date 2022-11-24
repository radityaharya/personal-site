import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import Typewriter from "typewriter-effect";


export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Raditya Harya
			</title>
			<meta name={"description"} content={"raditya's personal site"} />
			<meta property={"og:title"} content={"radityaharya"} />
		</Helmet>
		<Helmet>
			style:{"html, body {height: 100vh;}"}
		</Helmet>
		<Section
			padding="0px 0 0px 0"
			quarkly-title="HeroBlock"
			lg-height="100vh"
			height="100vh"
			justify-content="space-between"
		>
			<Override slot="SectionContent" lg-display="flex" lg-justify-content="space-between" justify-content="space-between" />
			<Section padding="40px 0 40px 0" quarkly-title="Header">
				<Override
					slot="SectionContent"
					flex-direction="row"
					align-items="center"
					display="flex"
					justify-content="space-between"
				/>
				<Box
					empty-border-color="LightGray"
					width="30%"
					align-items="center"
					lg-width="50%"
					empty-min-height="64px"
					empty-border-style="solid"
					display="flex"
					sm-width="70%"
					empty-min-width="64px"
					empty-border-width="1px"
				>
					<Text color="--light" margin="0px 0px 0px 0px" font="--headline3">
						Raditya Harya
					</Text>
				</Box>

			</Section>
			<Text
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--lightD1"
				md-font="--headline4"
				sm-text-align="center"
				font="--headline4"
				text-align="center"
			>
				<Typewriter options={{
					strings: ['Site Under Construction', 'Please Come Back Later'],
					autoStart: true,
					loop: true,
				}} />
			</Text>
			<Section padding="90px 0 90px 0" sm-padding="74px 0 74px 0" quarkly-title="Footer" md-padding="0px 0 0p 0">
				<Override
					slot="SectionContent"
					md-align-items="center"
					flex-direction="row"
					md-flex-direction="column"
					align-content="flex-start"
					align-items="center"
					lg-flex-direction="row"
				/>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					md-justify-content="center"
					md-align-items="center"
					md-padding="10px 10px 10px 10px"
					md-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="33.333%"
					display="flex"
					align-items="flex-start"
					justify-content="center"
				>
					<Link href="https://www.linkedin.com/in/radityaharya" color="--light" font="--base" target="_blank">
						linkedin.com/in/radityaharya
					</Link>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					md-justify-content="center"
					md-align-items="center"
					md-padding="10px 10px 10px 10px"
					md-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="33.333%"
					display="flex"
					justify-content="center"
				>
					<Link href="mailto:contact@radityaharya.me?Hi Raditya." color="--light" font="--base" target="_blank">
						contact@radityaharya.me
					</Link>
				</Box>
				<Box
					md-width="100%"
					empty-min-width="64px"
					empty-border-style="solid"
					width="33.333%"
					md-justify-content="center"
					md-padding="10px 10px 10px 10px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					display="flex"
					md-align-items="center"
					justify-content="center"
				>
					<Link href="https://github.com/radityaharya" color="--light" font="--base" target="_blank">
						github.com/radityaharya
					</Link>
				</Box>
			</Section>
		</Section>
	</Theme>;
});