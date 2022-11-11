import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Footer from "./Footer";
import MenuItems from "./MenuItems";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function Sidebar(prop: SideBarProps) {
  const { activeMenu } = prop;

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <>
      <section className='sidebar'>
        <div className='content pt-50 pb-30 ps-30'>
          <Profile />
          <div className='menus'>
            <MenuItems
              title='Overview'
              linkHref='/member'
              icon='ic-menu-overview'
              active={activeMenu === "overview"}
            />
            <MenuItems
              title='Transactions'
              linkHref='member/transactions'
              icon='ic-menu-transactions'
              active={activeMenu === "transactions"}
            />
            <MenuItems
              title='Messages'
              linkHref='/member'
              icon='ic-menu-messages'
            />
            <MenuItems title='Card' linkHref='/member' icon='ic-menu-card' />
            <MenuItems
              title='Rewards'
              linkHref='/member'
              icon='ic-menu-rewards'
            />
            <MenuItems
              title='Settings'
              linkHref='/member/edit-profile'
              icon='ic-menu-settings'
              active={activeMenu === "settings"}
            />
            <MenuItems
              title='Log Out'
              icon='ic-menu-logout'
              onClick={onLogout}
            />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
