import { Checkbox, Input } from "antd";
import styled from "styled-components";
const { TextArea } = Input;

export const TitleText = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`


export const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.3rem;
    }
`

export const AppButtons = styled.button`
    border-radius: 100px;
    font-size: 1.5rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    padding: 1rem 2rem;
    cursor : pointer;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
`

export const Buttons = styled.button`
    border-radius: 100px;
    font-size: 22px;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
`

export const ExploreButton = styled(AppButtons)`
    background: ${({ theme }) => theme.colors.secondary};
    margin-left: 1rem;
`

export const IconButton = styled.div`
    margin: auto 0.5rem;
`

export const AppInput = styled(Input)`
        `

export const AppTextArea = styled(TextArea)`
`

export const AppCheckBox = styled(Checkbox)`
    border: 1px solid #5726b0 !important;
    background: transparent !important;
    height: 50px;
    border-radius: 10px !important;
`



export const PageHeaderText = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
`

export const PageCategory = styled.h5`
    color: ${({ theme }) => theme.colors.green};
    font-size: 1.25rem;
    line-height: 1.35;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 3rem;

    &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 30px;
        background-color: #D1D1D6;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const PageHeroText = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3.5rem;
    line-height: 1.1;
    text-align: center;
    font-weight: bold;

    @media only screen and (max-width: 991.98px) {
        font-size: 2.75rem;
    }

    @media only screen and (max-width: 767.98px) {
        font-size: 2.25rem;
    }
`

export const PageHeaderBlackText = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
`

export const HeaderText = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    white-space:nowrap;
`

export const MuteText = styled.span`
    color: ${({ theme }) => theme.colors.white};
`

export const DangerText = styled.span`
    color: ${({ theme }) => theme.colors.danger || "#EE2D2D"};
`

export const YellowText = styled.span`
    color: ${({ theme }) => theme.colors.yellow};
`

export const SuccessText = styled.span`
    color: ${({ theme }) => theme.colors.success};
`

export const ActiveText = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`

export const AccentText = styled.span`
    color: ${({ theme }) => theme.colors.accent};
`
export const ColorText = styled.span`
    color: ${({ color }) => color || 'black'};
`

export const BoldText = styled.span`
    font-weight : bold;
`

export const PopupHeader = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 15px;
`

export const Border = styled.div`
    height : 1px;
    background: ${({ theme }) => theme.colors.primary} !important;
    margin : 2em 0;
`;

export const BoldHeaderText = styled(PageHeaderText)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Box = styled.div`
    border : 0.5px solid;
    border-color: ${({ theme }) => theme.colors.black};
    border-radius : 5px;
    padding : 1em;
`

export const BoxText = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
`

export const BoxSecondaryText = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.black};
    font-weight : bold;
`;

export const ShadowBox = styled.div`
    background: ${({ theme }) => theme.colors.white} !important;
    box-shadow: 0 2px 15px  rgba(57,57,72,0.05);
    border-radius: 5px;
    padding : 1.3em;
`

export const OnboardShadowBox = styled.div`
    box-shadow: 0px 5px 25px rgba(57, 57, 72, 0.05);
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: all 0.2s linear;
    padding : 1.3em;

    &:hover {
        box-shadow: 0px 5px 25px rgba(57, 57, 72, 0.2);
    }
`

const CommonStyleHeadeBar = styled.div`
    border-bottom: 0.5px solid;
    border-color: ${({ theme }) => theme.colors.grey}; 
    position: fixed;
    top: 0;
    z-index: ${({ zIndex }) => zIndex ? zIndex : '1000'};
    transition: all 0.2s;
    background: ${({ darkBackground,theme }) => darkBackground ? theme.colors.box : 'inherit'};
    height : 67px;
    &.po-headerbar {
        .label-mb-0 label{
            margin-bottom:0 !important;
        }
        .po-pi-box input{
            @media (max-width:1390px){
                font-size: 0.9rem;
                padding: 0.6rem;
            }
        }
    }
`

export const StyledHeaderBar = styled(CommonStyleHeadeBar)`
    padding: 14px 5px;
    width: calc(100% -  250px);
    left:  265px;
    &:row{
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
`;

const StyledMobileHeaderBar = styled(CommonStyleHeadeBar)`
    left: 0px;
    width: 100%;
    padding: 14px 0;
    border-bottom: 0px !important;
    &.row{
        margin-right: 0px !important;
        margin-left: 0px !important;
    }
    &.border-down{
        border-bottom:1px solid ${({ theme }) => theme.colors.grey} !important;
    }
`

export const MobileShadowCard = styled.div`
    box-shadow: 0px 5px 25px rgba(57, 57, 72, 0.05);
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.white} !important;
    background-color:  ${({ theme }) => theme.colors.white} !important;
    `

export const HeaderBar = ({ children,className,zIndex,darkBackground, ...rest }) => (
    <StyledHeaderBar darkBackground={darkBackground} zIndex={zIndex} className={className} {...rest} >
        {children}
    </StyledHeaderBar>
)

export const MobileHeaderBar = ({ children,className,zIndex,darkBackground }) => (
    <StyledMobileHeaderBar darkBackground={darkBackground} zIndex={zIndex} className={className} >
        {children}
    </StyledMobileHeaderBar>
)

export const MobileDashboardHeader = styled.div`
    background: ${({ theme }) => theme.colors.white} !important;
    background-color: ${({ theme }) => theme.colors.white} !important;
`

export const GuestHeaderBar = styled(StyledHeaderBar)`
    width: 100%;
    left: 16px;
`

export const BodyContainer = styled.div`
    padding : 15px 20px;
    padding-top: 82px;
`

export const FlexRow = styled.div`
  display : flex;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
`;


export const JustifyBetweenRow = styled(FlexRow)`
  justify-content: space-between;
`;


export const MobileBodyContainer = styled.div`
`

const LabelInputField = styled(Input)({
    maxWidth: ({ maxWidth }) => maxWidth ? `${maxWidth}px` : '100%'
})

export const SuffixInputField = styled(LabelInputField)`
    max-width: 60px;
    input{
        border-right: 0 !important;
    }
    input:focus{
        border-right: 0;
    }
    input:focus + .label{
        border: 1px solid #85b7d9;
    }
    .label{
        border-left: 0 !important;
        color: #ACADB6 !important;
    }
`

export const ScrollMobile = styled.div`
.secondary  {
 width:100% !important;
 ::-webkit-scrollbar{
 display: none;
 }
}
`

export const ScrollDeskTop = styled.div`
 .secondary {
     overflow:hidden !important;
 }
`

export const BlurBackground = styled.div`
    height: 100vh;
    position: absolute;
    width: 83vw;
    left: 0;
    background-color: ${({ theme }) => theme.colors.box};
    opacity: 0.5;
    z-index: 11;
`

export const DetailSubHeader = styled.span`
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: left;
    padding-inline: 0px;
    font-size: 14px;
    width: 50%;
`;

export const DetailSubHeaderValue = styled.span`
    font-weight : bold;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-inline: 0px;
    font-size: 14px;
    font-weight: 500;
    width: 50%;
`;

