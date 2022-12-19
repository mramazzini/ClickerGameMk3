import React, { useState } from 'react';
import './ShopTab.css';

function ShopTab() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <div
      className="shop-tab"
      onMouseEnter={() => setIsShopOpen(true)}
      onMouseLeave={() => setIsShopOpen(false)}
    >
      Shop
      {isShopOpen && (
        <div className="shop">
          {/* Add shop content here */}
        </div>
      )}
    </div>
  );
}

export default ShopTab;