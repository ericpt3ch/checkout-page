import { ReactComponent as CheckMarkIcon } from "../assets/icon/checkmark.svg";

function DeliveryCard() {
  return (
    <div className="checkout-item" id="delivery">
      <div className="flex-content-start">
        <div className="title-text">Delivery</div>
        <CheckMarkIcon width={24} height={24} className="checkmark-icon"/>
      </div>
      <div className="subtitle-text">Mobile Entry - Free</div>
      <div className="description-text">
        Tickets Available by Sun Apr 3, 2022
        <br />
        These mobile tickets will be transfered directly to you from a trusted
        seller. We'll email you instructions on how to accept them on the
        original ticket provider's mobile app.
      </div>
    </div>
  );
}

export default DeliveryCard;
