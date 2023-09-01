import { IconButton } from "@elements/Common";
import { FacebookLogo,InstagramLogo } from "phosphor-react";
import styled from "styled-components";

const FooterWrapper = styled.div`
    background : ${({ theme }) => theme.colors.primary};
    padding:2vh;
    .row{
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.4rem;
        place-content: center;
    }
`

const CopyRightContent = styled.p`
    text-align : right;
    padding: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`
const Link = styled.div`
    a{
        color: white;
        font-size: 1.4rem;
    }
`
const FooterContent = styled.div`
    margin:10px
`

const FooterTitles = styled.div`
    @media screen and (max-width: 768px) {
        margin-top: 2rem;
    }
`

const PageMenu = styled.div`
    @media screen and (min-width: 768px) {
        div{
            place-content: initial !important;
        }
    }
`

const Logo = styled.img`
    height: 50px;
    cursor: pointer;
`

export const Footer = ({ handleClick }) => {
    return (
        <FooterWrapper>
            <FooterContent className="row">
                <PageMenu className="col-lg-3 col-md-6 col-sm-12">
                    <Link className="row">
                        <a onClick={() => handleClick("aboutus")}>About Us</a>
                    </Link>
                    <Link className="row">
                        <a onClick={() => handleClick("services")}>Service</a>
                    </Link>
                    <Link className="row">
                        <a onClick={() => handleClick("contact")}>Contact</a>
                    </Link>
                </PageMenu>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <FooterTitles className="row">Social Media</FooterTitles>
                    <div className="row">
                        <IconButton>
                            <a href="https://www.facebook.com/profile.php?id=100084752051362" target={"_blank"}>
                                <FacebookLogo size={30} color="#f5f5f5" weight="bold" />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://instagram.com/expand_digitalmarketing" target={"_blank"}>
                                <InstagramLogo size={30} weight="bold" color="#f5f5f5" />
                            </a>
                        </IconButton>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <FooterTitles className="row">Address</FooterTitles>
                    <div className="row">Long Island, New York.</div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <FooterTitles className="row">Contact no.</FooterTitles>
                    <div className="row">+1 (516) 800-4738</div>
                </div>
            </FooterContent>
            <CopyRightContent className="mb-0">
                © <Logo alt="Logo" src="/white-logo.png" />
            </CopyRightContent>
        </FooterWrapper>

    )
}