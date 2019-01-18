import React from "react";
import styled from "styled-components";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

const CollapseBtn = styled.button`
  border: 0;
  border-radius: 50%;
  background-color: #056cc2;
  height: 27px;
  width: 27px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const CollapseToggleBtn = ({collapsed, onSidebarCollapseToggle}) => {
    return (
        <CollapseBtn
            type="button"
            title="Sidebar collapse toggle"
            onClick={() => {
                onSidebarCollapseToggle();
            }}
        >
            {collapsed ? <ChevronRight/> : <ChevronLeft/>}
        </CollapseBtn>
    );
};

export default CollapseToggleBtn;
