import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Inquire")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
                <a href="https://wa.me/26663411209" target="_blank" rel="noopener noreferrer">
                <Chat>{t(`WhatsApp`)}</Chat>
                </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Contact")}</Title>
              <Para>+27 66 3411 209</Para>
              <Para>(012) 023 4595</Para>
              <Para>info@lsdenterprise.co.za</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Our Branches")}</Language>
              <Para>MAMELDOI</Para>
              <Para>LEBOWAKGOMO</Para>
              <Para>MOKOPANE</Para>
            </Col>
          </Row>
          <Row justify="space-between">
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
