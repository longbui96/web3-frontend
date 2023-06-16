import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { WalletContext } from "../contexts/wallet";

function MainLayout() {
  const walletContext = useContext(WalletContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!walletContext.walletAddress) {
      navigate('/connect')
    }
  }, [])

  return (
    <div style={{ width: 1200, height: '100%', margin: '0px auto' }}>
      <Outlet />
    </div>
  );
}

export default MainLayout;