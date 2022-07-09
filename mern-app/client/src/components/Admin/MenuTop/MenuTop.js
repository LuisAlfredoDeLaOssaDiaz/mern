import React from "react";
import { Button } from "antd";
import LuisLogo from "../../../assets/img/png/logo-white.png";
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined } from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop(props) {

  const {toggleCollapsed, collapsed} = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={LuisLogo}
          alt="Luis De La Ossa"
        />

        <div className="menu-top__left__div">
          <Button
            className="menu-top__left__div__button__MenuUnfoldOutlined"
            type=""
            onClick={toggleCollapsed}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>

        <div className="menu-top__right__div">
          <Button
            className="menu-top__right__div__button__PoweroffOutlined"
            onClick={(_) => console.log("Off")}
          >
            <PoweroffOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
}
