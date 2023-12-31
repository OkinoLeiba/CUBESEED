import { useState } from "react";
import Link from "next/link";

import AccountVerifiedStyles from "@/styles/AccountVerified.module.scss";
import verifiedCheck from "../../assets/icons/verifiedCheck.svg";

const AccountVerified = () => {
  const [customerName, setCustomerName] = useState("John Doe");
  return (
    <div className={AccountVerifiedStyles.verifiedContainer}>
      <div className={AccountVerifiedStyles.circle}></div>
      <h2 className={AccountVerifiedStyles.verifiedTitle}>
        Your Account Was Approved
      </h2>
      <img src={verifiedCheck.src} alt="" />
      <div className={AccountVerifiedStyles.messageContainer}>
        <p>Dear {`${customerName},`}</p>
        <p>
          Congrats your certification was successfully verified! We are happy to
          have you here. We recommend to set up your profile to start connecting
          with investors.
        </p>
      </div>
      <Link href={""}>
        <button className={AccountVerifiedStyles.setUpProfile}>
          Set up Profile
        </button>
      </Link>
    </div>
  );
};

export default AccountVerified;
