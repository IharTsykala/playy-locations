import { createGlobalStyle, css } from 'styled-components'
import { resetStyles } from './resets'
import { keyCurve } from './keys'

export const GlobalStyle = createGlobalStyle`
  ${resetStyles}
  :root {
  --white: #fff;
	--light: #f4f4f4;
	--dark: #252422;
  --accent: #f9cdcd;
	--midGrey: #5e5e5e;
	--grey: #191918;
	--whiteSmoke: #eaeaea;
	--black: #000;
	--background-color: #f4f4f4;
	--text-color: #252422;
	--rem-base: 62.5%;
	--font-size-small: 1.1rem;
	--font-size-body: 1.4rem;
	--font-size-large: 1.8rem;
	--line-height-small: 1.14;
	--line-height-body: 1.4;
	--line-height-large: 1.45;
	--font-weight-regular: 300;
	--font-weight-medium: 400;
	--font-weight-bold: 700;
	--font-family: 'SctoGroteskA', sans-serif;
	--letter-spacing: -0.01em;
	--font-size-h1: 4rem;
	--font-size-h2: 2.4rem;
	--font-size-h3: 2.2rem;
	--font-size-h4: 2rem;
	--font-size-h5: 1.8rem;
	--font-size-h6: 1.6rem;
	--line-height-h1: 0.9;
	--line-height-h2: 1.1;
	--line-height-h3: 1.1;
	--line-height-h4: 1.2;
	--line-height-h5: 1.1;
	--line-height-h6: 1.1;
	--font-weight-h1: var(--font-weight-bold);
	--font-weight-h2: var(--font-weight-bold);
	--font-weight-h3: var(--font-weight-medium);
	--font-weight-h4: var(--font-weight-bold);
	--font-weight-h5: var(--font-weight-bold);
	--font-weight-h6: var(--font-weight-medium);
	--letter-spacing-h1: -0.05em;
	--letter-spacing-h2: -0.05em;
	--letter-spacing-h3: -0.035em;
	--letter-spacing-h4: -0.02em;
	--letter-spacing-h5: -0.02em;
	--letter-spacing-h6: -0.02em;
	--z-noise: 1;
	--z-section: 5;
	--z-header: 10;
	--z-overlay: 90;
	--z-menu: 100;
	--bottom-panel: 1000;
	--grid-width: 100vw;
	--grid-height: 100vh;
	--grid-padding: 5.4vw;
	--grid-column-count: 6;
	--grid-gutter: 1.6rem;
	--header-height: calc(5rem + 5vw);
	--sticky-top: 80;
	--bottom-panel-height: 0rem;
	--pages-section: 12.5vw;
	--caseStudies-section: 14rem;
	--services-section: 8rem;
	--blog-section: 10.4vw;
	--thinking-section: 12.5vw;
	--pages-meta-bar: 6rem;
	--caseStudies-meta-bar: 6rem;
	--services-meta-bar: 6rem;
	--pages-intro-small: 6rem;
	--pages-intro-large: 6rem;
  --info-height: 15rem;

}
  ${keyCurve}
@media only screen and (min-width: 2160px) {
	:root {
		--rem-base: 82.5%;
	}
}
@media only screen and (min-width: 1280px) {
	:root {
		--font-size-small: 1.4rem;
		--font-size-body: 1.8rem;
		--font-size-large: 2.2rem;
	}
}
@media only screen and (min-width: 480px) {
	:root {
		--font-size-h1: 4.6rem;
	}
}
@media only screen and (min-width: 1024px) {
	:root {
		--font-size-h1: 6.25vw;
	}
}
@media only screen and (min-width: 1280px) {
	:root {
		--font-size-h2: 4.2rem;
		--font-size-h3: 3.8rem;
		--font-size-h4: 2.8rem;
		--font-size-h5: 2.2rem;
		--font-size-h6: 2.2rem;
		--grid-padding: 8rem;
		--grid-column-count: 12;
		--grid-gutter: 2rem;
		--header-height: 12.6rem;
		--pages-section: 12.5vw;
		--caseStudies-section: 18.2vw;
		--services-section: 10.4vw;
		--blog-section: 10.4vw;
		--thinking-section: 12.5vw;
		--pages-meta-bar: 8.5rem;
		--caseStudies-meta-bar: 8.5rem;
		--services-meta-bar: 8.5rem;
		--pages-intro-small: 4.1vw;
		--pages-intro-large: 7.8vw;
	}
}
@media print {
	* {
		background: transparent !important;
		color: #000 !important;
		box-shadow: none !important;
		text-shadow: none !important;
	}
	a,
	a:visited {
		text-decoration: underline;
	}
	a[href]:after {
		content: ' (' attr(href) ')';
	}
	abbr[title]:after {
		content: ' (' attr(title) ')';
	}
	.ir a:after,
	a[href^='#']:after,
	a[href^='javascript:']:after {
		content: '';
	}
	blockquote,
	pre {
		border: 0.1rem solid #999;
		page-break-inside: avoid;
	}
	thead {
		display: table-header-group;
	}
	img,
	tr {
		page-break-inside: avoid;
	}
	img {
		max-width: 100% !important;
	}
	h2,
	h3,
	p {
		orphans: 3;
		widows: 3;
	}
	h2,
	h3 {
		page-break-after: avoid;
	}
}
html {
	box-sizing: border-box;
	-webkit-text-size-adjust: 100%;
	-webkit-font-smoothing: subpixel-antialiased;
	-ms-text-size-adjust: 100%;
  scroll-behavior: smooth;
}
*,
:after,
:before {
	box-sizing: inherit;
	/* -webkit-backface-visibility: inherit; */
	backface-visibility: inherit;
}
html {
	font-size: var(--rem-base);
	font-variant-ligatures: normal;
	-webkit-font-smoothing: antialiased;
  }
body {
	font-size: var(--font-size-body);
	line-height: var(--line-height-body);
	font-weight: var(--font-weight-medium);
	font-family: var(--font-family);
	letter-spacing: var(--letter-spacing);
  overscroll-behavior-y: none;
}
b,
strong {
	font-weight: var(--font-weight-bold);
}
i {
	font-style: italic;
}
sup {
	margin-left: 0.1rem;
	font-size: 50%;
	vertical-align: super;
}

html {
	backface-visibility: hidden;
  	transition: color 1s var(--ease-in-out-soft), background-color 0.65s var(--ease-in-out-soft);

}
html.is-fading body {
	transition: color 1s var(--ease-in-out-soft), background-color 0.65s var(--ease-in-out-soft);
}

body {
	background-color: var(--background-color);
	color: var(--text-color);
	will-change: background-color, color;
  transition: color 1s var(--ease-in-out-soft), background-color 0.65s var(--ease-in-out-soft);
}
a,
button {
	color: inherit;
}
figure svg {
	width: 100%;
	height: 100%;
	fill: currentColor;
	display: block;
}
img {
	display: block;
	max-width: 100%;
	height: auto;
}
button,
button:focus,
input:focus {
	outline: none;
  border: none;
}
input:-webkit-autofill,
input:-webkit-autofill:active,
input:-webkit-autofill:focus,
input:-webkit-autofill:hover {
	transition-delay: 9999s;
}
main {
	position: relative;
}
.hidden {
    transform: translateY(calc(-1 * var(--header-height)));
    transition: transform 0.65s var(--ease-in-out-soft);
  }
::-moz-selection {
  -webkit-text-fill-color: var(--white);
  background-color: currentColor;
}
::selection {
  -webkit-text-fill-color: var(--white);
  background-color: currentColor;
}
`
