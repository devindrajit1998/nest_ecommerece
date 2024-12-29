import React, { useState } from "react";

function CouponCard() {
    const [buttonText, setButtonText] = useState("Click to Copy");
    const couponCode = "SAVE20";

    const copyCoupon = () => {
        navigator.clipboard
            .writeText(couponCode)
            .then(() => {
                setButtonText("Copied!");
                setTimeout(() => setButtonText("Click to Copy"), 2000);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <div className="coupon-card">
            <div className="coupon-header">Special Offer</div>
            <div className="coupon-code" id="couponCode">
                {couponCode}
            </div>
            <div className="coupon-description">
                Get 20% off on your next purchase. Click below to copy the coupon code.
            </div>
            <button className="copy-btn" onClick={copyCoupon}>
                {buttonText}
            </button>
        </div>
    );
}

export default CouponCard;
