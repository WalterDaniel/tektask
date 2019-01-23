import React from "react";
import styled from "styled-components";
import Icon from "../icon/icon";
import IconText from "../icon/icon-text";
import { Button } from "react-bootstrap";
import { DateInterval } from "../../__mock__/data/mock-data";
import MembersWrapper from "../members/members-wrapper";
import ProfileSettings from "../members/profile-settings";
import ColoredIcon from "../icon/colored-icon";

const Header = styled.header`
  background-color: #24282a;
  padding: 0 2em;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a9abab;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    padding: 9px;
  }
`;

const StyledColoredIcon = styled(ColoredIcon)`
  margin-left: 10px;

  svg {
    font-size: 1.1em;
  }
`;

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PageTitle = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.3em;
  align-items: center;
`;

const PageSubtitle = styled.span`
  color: #a9abab;
  font-size: 0.8em;
  font-family: unset;
  font-weight: bold;

  svg {
    font-size: 0.9em;
  }
`;

export default ({ pageTitle }) => {
  return (
    <Header>
      <HeaderSection>
        <div>
          <PageTitleWrapper>
            <PageTitle> {pageTitle} </PageTitle>
            <StyledColoredIcon
                colorName={"#4887CB"}
                iconName={"StarBorderRounded"}
              />
          </PageTitleWrapper>
          <div>
            <PageSubtitle>
              <IconText
                iconName={"EventAvailableRounded"}
                text={DateInterval()}
              />
            </PageSubtitle>
          </div>
        </div>

        <MembersWrapper joined={true} />

        <div>
          <Button variant="primary" size="sm">
            ADD MEMBER
          </Button>
        </div>

        <div>
          <Icon icon={"MoreHorizRounded"} />
        </div>
      </HeaderSection>

      <HeaderSection>
        <div>
          <Button variant="primary" size="sm">
            ADD PROJECT
          </Button>
        </div>

        <div>
          <Icon icon={"NotificationsNoneRounded"} />
        </div>

        <ProfileSettings />
      </HeaderSection>
    </Header>
  );
};
