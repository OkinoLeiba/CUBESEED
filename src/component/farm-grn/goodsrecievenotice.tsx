import GoodsReceivedNotice from "@/styles/goodsrecievenotice.module.scss";
import UserCardinfo from "../user-card-info/userCardinfo";
import Button from "../button/button";
import Textarea from "../textarea/textarea";
import { Context } from "@/context/context";
import { useContext } from "react";

const limitNumber = 200;
export default function GoodsReceivedNote() {
  const { inputValue, handleChangeInputValues, handleCongrateMeaasge } =
    useContext(Context);

  return (
    <main className={GoodsReceivedNotice.overallWrapper}>
      <section className={GoodsReceivedNotice.wrappers}>
        <section className={GoodsReceivedNotice.wrapper}>
          <div className={GoodsReceivedNotice.order}>
            Order ID &#62; GRN ID#
          </div>
          <h2 className={GoodsReceivedNotice.title}>Goods Received Notice</h2>
          <div className={GoodsReceivedNotice.info}>
            Confirm that you have received goods or <br />
            services.A copy will be shared.
          </div>

          <p className={GoodsReceivedNotice.addInfo}>Add information</p>

          <div className={GoodsReceivedNotice.checkEl}>
            <span>
              <input type="checkbox" />
              <p> Full Order</p>
            </span>
            <span>
              <input type="checkbox" />
              <p> Partial Order</p>
            </span>
          </div>
        </section>
        <section className={GoodsReceivedNotice.wrapperTwo}>
          <div className={GoodsReceivedNotice.inputHolder}>
            <div className={GoodsReceivedNotice.dates}>
              <label htmlFor="date">Delivery Date</label>
              <input
                type="date"
                name="date"
                placeholder="Today's Date Auto"
                value={inputValue.date}
                onChange={handleChangeInputValues}
              />
            </div>
            <div className={GoodsReceivedNotice.times}>
              <label htmlFor="time">Time of Delivery</label>
              <input
                type="time"
                name="time"
                placeholder="Today's Date Auto"
                value={inputValue.time}
                onChange={handleChangeInputValues}
              />
            </div>
          </div>
          <div className={GoodsReceivedNotice.note}>
            <label htmlFor="">Notes(optional)</label>

            <Textarea limit={limitNumber} />
          </div>
        </section>
        <div className={GoodsReceivedNotice.sentBy}>
          <h3>Sent by</h3>
          <UserCardinfo />
        </div>
      </section>
      <div className={GoodsReceivedNotice.Grnfooter}>
        <Button className={GoodsReceivedNotice.close}>Close</Button>
        <div className={GoodsReceivedNotice.leftBtn}>
          <Button className={GoodsReceivedNotice.save}>Save as Draft</Button>
          <Button
            className={GoodsReceivedNotice.send}
            onClick={handleCongrateMeaasge}
          >
            Send GRN
          </Button>
        </div>
      </div>
    </main>
  );
}
