import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./HomePage.css";
import { Button, Dropdown, Space, Avatar } from "antd";
import { KeyOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

function HomePage() {
  const items = [
    {
      key: "1",
      label: (
        <Link to={"/profile"}>
          <UserOutlined style={{ margin: "0 5px 0 0" }} />
          Thông tin cá nhân
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link>
          <KeyOutlined style={{ margin: "0 5px 0 0" }} />
          Đổi mật khẩu
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link>
          <LogoutOutlined style={{ margin: "0 5px 0 0" }} />
          Đăng xuất
        </Link>
      ),
    },
  ];

  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  return (
    <div className='nav'>
      <div className='nav-item'>
        <NavLink>LOGO</NavLink>
        <NavLink>Trang chủ</NavLink>
        <NavLink>Sản phẩm</NavLink>
      </div>
      <div className='nav-item' style={{ lineHeight: "50px" }}>
        <NavLink>Giới thiệu</NavLink>
        <NavLink>Liên hệ</NavLink>
        {userLogin ? (
          <>
            <Dropdown
              menu={{
                items,
              }}
              placement='bottom'
              arrow
            >
              <Button>
                <Space
                  direction='vertical'
                  size={16}
                  style={{ margin: "0 10px 0 0" }}
                >
                  <img
                    src={userLogin.image}
                    alt='avatar'
                    height={26}
                    width={26}
                  />
                </Space>
                {userLogin.userName}
              </Button>
            </Dropdown>
          </>
        ) : (
          <>
            <NavLink>Đăng ký</NavLink>
            <NavLink to={"/login"}>Đăng nhập</NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
