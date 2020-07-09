import { createGlobalStyle } from "styled-components"

import Fonts from './themes/Fonts'
import Colors from './themes/Colors'

import MuliExtraLight from './assets/fonts/Muli-ExtraLight.ttf'
import MuliLight from './assets/fonts/Muli-Light.ttf'
import MuliRegular from './assets/fonts/Muli-Regular.ttf'
import MuliMedium from './assets/fonts/Muli-Medium.ttf'
import MuliSemiBold from './assets/fonts/Muli-SemiBold.ttf'
import MuliBold from './assets/fonts/Muli-Bold.ttf'
import MuliExtraBold from './assets/fonts/Muli-ExtraBold.ttf'
import MuliBlack from './assets/fonts/Muli-Black.ttf'

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: ${Fonts.extraLight};
        src: url(${MuliExtraLight});
    }

    @font-face {
        font-family: ${Fonts.light};
        src: url(${MuliLight});
    }

    @font-face {
        font-family: ${Fonts.regular};
        src: url(${MuliRegular});
    }

    @font-face {
        font-family: ${Fonts.medium};
        src: url(${MuliMedium});
    }

    @font-face {
        font-family: ${Fonts.semiBold};
        src: url(${MuliSemiBold});
    }

    @font-face {
        font-family: ${Fonts.bold};
        src: url(${MuliBold});
    }

    @font-face {
        font-family: ${Fonts.extraBold};
        src: url(${MuliExtraBold});
    }

    @font-face {
        font-family: ${Fonts.black};
        src: url(${MuliBlack});
    }

    body {
        margin: 0px;
        font-family: ${Fonts.medium};
        background-color: ${Colors.backgroundGray};

        a {
            text-decoration: none;
            font-family: ${Fonts.medium};
        }
        
        button, select, input, textarea {
            font-family: ${Fonts.medium};
            outline: none;
        }

        h1, h2, h3, h4, h5, h6 {
            margin: 0px;
        }
    }
`