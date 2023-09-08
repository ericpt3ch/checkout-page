import VisaLogoSVGComponent from "./VisaLogoSVG";
import BankCardSVGComponent from "./BankCard";

function VisaCard() {
  return (
    <div className="visa-card-container">
      <input type="radio" className="visa-radio-button" />
      <div className="flex-column-content">
        <div className="flex-content-row-gap16">
            <VisaLogoSVGComponent width={48} height={48} />
            <div className="flex-column-content">
                <div className="subtitle-text">Visa - 9999</div>
                <div>User Name | exp. 00/11</div>
                <div className="flex-content-row">
                    <button className="blue-link-button">Edit</button>
                    |
                    <button className="blue-link-button">Delete</button>
                </div>
            </div>
        </div>
        <div>
            <div className="description-text">Security Code</div>
            <div className="flex-content-row-gap16">
                <input type="number" />
                <div className="flex-content-row content-align-item-center">
                    <BankCardSVGComponent width={36} height={36} />
                    <span>3-digits on back of card</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default VisaCard;
