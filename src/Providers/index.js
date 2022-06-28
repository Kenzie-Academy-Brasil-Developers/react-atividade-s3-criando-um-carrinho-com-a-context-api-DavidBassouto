import { CartProvider } from "./cart";
import { CatalogueProvider } from "./catalogue";

export const Providers = ({ children }) => {
  return (
    <CatalogueProvider>
      <CartProvider>{children}</CartProvider>
    </CatalogueProvider>
  );
};
