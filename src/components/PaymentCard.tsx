import VisaCard from "./VisaCard";
import { ReactComponent as CheckMarkIcon } from "../assets/icon/checkmark.svg";
import PlusSVGComponent from "./PlusSVG";
import BankCardSVGComponent from "./BankCard";

function PaymentCard() {
  return (
    <div className="checkout-item" id="payment">
      <div className="flex-content-between-item">
        <div className="flex-content-start">
          <div className="title-text">Payment</div>
          <CheckMarkIcon width={24} height={24} className="checkmark-icon" />
        </div>
      </div>

      <div className="subtitle-text content-margin-16">
        Use Credit / Debit Card
      </div>
      <VisaCard />
      <div className="flex-content-row-gap16 content-align-item-center content-margin-16">
        <PlusSVGComponent width={36} height={36} />
        <BankCardSVGComponent width={36} height={36} />
        <div className="subtitle-blue-text">Add New Card</div>
      </div>
      <div className="separator-line" />
      <div className="content-margin-16 flex-column-content-gap8">
        <div className="subtitle-text">Or Pay With</div>
        <div className="description-text">
          By using a digital wallet and continuing past this page, you have read
          and are accepting the{" "}
          <a href="/" className="button-link">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
