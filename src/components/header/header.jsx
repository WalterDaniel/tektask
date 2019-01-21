import React from "react";
import styled from "styled-components";
import Icon from "../icon/icon";
import IconText from "../icon/icon-text";
import { Button } from "react-bootstrap";
import { DateInterval } from "../../__mock__/data/mock-data";
import MembersWrapper from "../members/members-wrapper";

const Header = styled.header`
  background-color: #24282a;
  padding: 0 2.3em;
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
    padding: 8px;
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

const BlueGrade = styled.span`
  margin-left: 10px;
  color: #4887cb;

  svg {
    font-size: 1.1em;
  }
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
            <BlueGrade>
              <Icon icon={"GradeOutlined"} />
            </BlueGrade>
          </PageTitleWrapper>
          <div>
            <PageSubtitle>
              <IconText iconName={"EventAvailable"} text={DateInterval()} />
            </PageSubtitle>
          </div>
        </div>

        <div>
          <MembersWrapper joined={true} />
        </div>

        <div>
          <Button variant="primary" size="sm">
            ADD MEMBER
          </Button>
        </div>

        <div>
          <Icon icon={"MoreHoriz"} />
        </div>
      </HeaderSection>

      <HeaderSection>
        <div>
          <Button variant="primary" size="sm">
            Add Project
          </Button>
        </div>

        <div>
          <Icon icon={"NotificationsNone"} />
        </div>
      </HeaderSection>
    </Header>
  );
};
