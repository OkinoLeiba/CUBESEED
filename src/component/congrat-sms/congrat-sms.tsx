import React, { useContext } from "react";
import CongratSMS from "@/styles/congrat-sms.module.scss";
import Image from "next/image";
import PopUp from "@/assets/Group 1000001020.png";
import Button from "../button/button";
import Link from "next/link";

export default function CongratulationSms() {
  return (
    <div className={CongratSMS.congratsContainer}>
      <div className={CongratSMS.circlCon}>
        <div className={CongratSMS.circle}></div>
      </div>
      <div className={CongratSMS.popImg}>
        <Image src={PopUp} alt="pop-up" height={160} />
      </div>
      <div className={CongratSMS.text}>
        <p>Your waybill has been sent to [farmer name] for approval!</p>
        <p>Your waybill status has been set to pending.</p>
      </div>
      <div className={CongratSMS.btnWrapper}>
        <Button className={CongratSMS.close}>close</Button>

        <Link href="/viewgrn">
          <Button className={CongratSMS.view}>View Waybill</Button>
        </Link>
      </div>
    </div>
  );
}
