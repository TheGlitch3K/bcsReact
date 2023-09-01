import { Button as Btn } from 'antd';
import styled from 'styled-components';

const Button = styled(Btn)`
    font-weight: 400 !important;
    &.flex-btn{
        display: flex !important;
        align-items: center !important;
    }
`

export const StyledButton = styled(Button)({
    background: ({ theme }) => theme.colors.primary + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const GreenButton = styled(Button)({
    background: ({ theme }) => theme.colors.green + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const FlatButton = styled(Button)`
    border-radius: 0px !important;
    background: white !important;
    &:hover{
        background: rgba(0,0,0,0.1) !important;
    }
`

export const StyleGreenHoverButton = styled(StyledButton)`
    &:hover {
        background: ${({ theme }) => theme.colors.green} !important;
        color: ${({ theme }) => theme.colors.white} !important;
    }
`

export const BorderButton = styled(Button)({
    background: ({ backColor }) =>
        (backColor ? backColor : "none") + "!important",
    border: "0.5px solid" + " !important",
    borderColor: ({ theme, backColor }) =>
        (backColor ? backColor : theme.colors.grey) + "!important",
    color: ({ theme, color }) =>
        (color ? color : theme.colors.black) +
        "!important",
});

export const HoverBorderButton = styled(BorderButton)`
    &:hover {
        background: ${({ theme }) => theme.colors.black} !important;
        color: ${({ theme }) => theme.colors.white} !important;
    }
`

export const DangerBorderButton = styled(BorderButton)`
    border-color: ${({ theme }) => theme.colors.danger} !important;
    color: ${({ theme }) => theme.colors.danger} !important;

    &:hover {
        background: ${({ theme }) => theme.colors.danger} !important;
        color: ${({ theme }) => theme.colors.white} !important;
    }
`

export const PurpleBorderButton = styled(BorderButton)({
    borderColor: ({ theme }) => theme.colors.purple + ' !important',
    color: ({ theme }) => theme.colors.purple + '!important'
})

export const LightBorderButton = styled(BorderButton)`
    border-color: ${({ theme }) => theme.colors.white} !important;
    color: ${({ theme }) => theme.colors.white} !important;

    &:hover {
        background: ${({ theme }) => theme.colors.white} !important;
        color: ${({ theme }) => theme.colors.black} !important;
    }
`

export const WhiteBackgroundButton = styled(BorderButton)`
    background-color: ${({ theme }) => theme.colors.white} !important;
    color: ${({ theme }) => theme.colors.black} !important;

    &:hover {
        color: ${({ theme }) => theme.colors.white} !important;
        background-color: ${({ theme }) => theme.colors.green} !important;
    }
`

export const DangerButton = styled(Button)({
    background: ({ theme }) => theme.colors.danger + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const MuteButton = styled(Button)({
    background: ({ theme }) => theme.colors.grey + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const AccentButton = styled(Button)({
    background: ({ theme }) => theme.colors.accent + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const SuccessButton = styled(Button)({
    background: ({ theme }) => theme.colors.success + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const PurpleButton = styled(Button)({
    background: ({ theme }) => theme.colors.purple + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const YellowButton = styled(Button)({
    background: ({ theme }) => theme.colors.yellow + ' !important',
    color: ({ theme }) => theme.colors.white + '!important'
})

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.accent};
    cursor :pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const TextLink = styled.a`
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
`;

export const NormalLink = styled.a`
    // color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    ${({disabled, theme}) => disabled && `color: ${theme.colors.grey};`}
    color: ${({isMobile})=>isMobile?"black":""};

    // &:hover {
    //     color: ${({ theme }) => theme.colors.black};
    // }
`;

export const GreyLink = styled.a`
    color: ${({ theme }) => theme.colors.grey};
    cursor :pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.grey};
    }
`;

export const ActiveLink = styled.a`
    font-size: 12px;
    line-height: 14px;
    font-weight: bold;
    cursor : pointer;
    color: ${({ theme }) => theme.colors.primary};
    &:hover, &:focus{
        color: ${({ theme }) => theme.colors.primary};
    }
`;