import { ReactComponent as TopArrowIcon } from "../assets/icon/arrow-up.svg";

function TotalCard() {
  return (
    <div className="checkout-item" id="total">
      <div className="flex-content-between-item total-container-header">
        <div className="title-text">Total</div>
        <div className="flex-content-row content-align-item-center">
          <div className="title-text">$549.11</div>
          <TopArrowIcon width={16} height={16} />
        </div>
      </div>

      <div>
        <div className="flex-column-content">
          <div className="flex-column-content-gap8">
            <div className="subtitle-text">Tickets</div>
            <div className="flex-content-between-item">
              <div className="description-text">
                Resale Tickets: $229.00 X 2
              </div>
              <div className="description-text">$458.00</div>
            </div>
          </div>
          <div className="flex-column-content-gap8">
            <div className="subtitle-text">Notes From Seller</div>
            <div className="description-text">
              xfr XFER Proof of at least one dose of COVID-19 vaccination for
              ages 5 to 11 and guests ages 12 and up will be required to show
              proof of two COVID-19 vaccine doses or one dose of the Johnson &
              Johnson vaccine. Masks must be worn.
            </div>
          </div>
          <div className="flex-column-content-gap8">
            <div className="subtitle-text">Fees</div>
            <div>
              <div className="flex-content-between-item">
                <div className="description-text">Services Fee: $44.08 X 2</div>
                <div className="description-text">$88.16</div>
              </div>
              <div className="flex-content-between-item">
                <div className="description-text">Order Processing Fee</div>
                <div className="description-text">$2.95</div>
              </div>
            </div>
          </div>
          <div className="flex-column-content-gap8">
            <div className="subtitle-text">Delivery</div>
            <div className="flex-content-between-item">
              <div className="description-text">Mobile Entry</div>
              <div className="description-text">Free</div>
            </div>
          </div>
          <div className="cancel-order-container">
            <button className="blue-link-button">Cancel Order</button>
          </div>
          <div className="subtitle-text">*All Sales Final - No Refunds</div>
          <div className="subtitle-text">
            <input type="checkbox" />I have read and agree to the current{" "}
            <a href="/" className="button-link">
              Terms of Use
            </a>
          </div>
          <button className="green-button">Place Order</button>
          <div className="subdescription-text">
            *Exceptions may apply, see our Terms of Use
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalCard;
