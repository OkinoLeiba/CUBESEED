import DashboardSidePanelStyle from "@/styles/DashboardSidePanel.module.scss"
import DashboardSidePanelButtonContainerStyle from "@/styles/DashboardSidePanelButtonContainer.module.scss"
import cubeseed from "../../assets/icons/cubeseed.png"
import Home from "../../assets/icons/home.jpg"

import Image from "next/image"

const DashboardSidePanel = () => {
  return (
    <div className={DashboardSidePanelStyle.DashboardSidePanel}>
      <div>
        <Image src={cubeseed} width={90} height={90} alt="cubeseed logo" />
      </div>
      <div className={DashboardSidePanelStyle.divider}></div>
      <h1 className={DashboardSidePanelStyle.title}>Hello User,</h1>

      <div
        className={
          DashboardSidePanelButtonContainerStyle.DashboardSidePanelButtonContainer
        }
      >
        <div className={DashboardSidePanelButtonContainerStyle.MainButtons}>
          <button className={DashboardSidePanelButtonContainerStyle.button}>
            <div className={DashboardSidePanelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePanelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Home
            </div>
            100+
          </button>
          <button className={DashboardSidePanelButtonContainerStyle.button}>
            <div className={DashboardSidePanelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePanelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Farm Planner
            </div>
            100+
          </button>
          <button className={DashboardSidePanelButtonContainerStyle.button}>
            <div className={DashboardSidePanelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePanelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Purchase Orders
            </div>
            100+
          </button>
          <button className={DashboardSidePanelButtonContainerStyle.button}>
            <div className={DashboardSidePanelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePanelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Profile
            </div>
            100+
          </button>
        </div>

        <div
          className={
            DashboardSidePanelButtonContainerStyle.SupportSettingsButtons
          }
        >
          <button className={DashboardSidePanelButtonContainerStyle.button}>
            {" "}
            <div className={DashboardSidePanelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePanelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Support
            </div>
          </button>

          <button className={DashboardSidePanelButtonContainerStyle.button}>
            {" "}
            <div className={DashboardSidePanelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePanelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Settings
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidePanel
