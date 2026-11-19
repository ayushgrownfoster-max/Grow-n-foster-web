import type { Metadata } from "next";
import ShopifyEcommercePage from "./ShopifyEcommerceClient";

export const metadata: Metadata = {
  title: "Minimalist E-Commerce Store Case Study | Grow 'n' Foster",
  description:
    "High-converting, customized Shopify storefront with slide-out cart drawers and retention marketing loops boosting conversion rate to 4.2%.",
  alternates: {
    canonical: "https://www.grownfoster.com/portfolio/shopify-ecommerce",
  },
  openGraph: {
    title: "Minimalist E-Commerce Store Case Study | Grow 'n' Foster",
    description:
      "High-converting, customized Shopify storefront with slide-out cart drawers and retention marketing loops boosting conversion rate to 4.2%.",
    url: "https://www.grownfoster.com/portfolio/shopify-ecommerce",
    type: "website",
  },
};

export default function Page() {
  return <ShopifyEcommercePage />;
}
