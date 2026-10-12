import ProductSection from "./_components/ProductSection";
import TechnicalDetails from "./_components/TechnicalDetails";
import CustomerReviews from "./_components/CustomerReviews";
import RelatedProducts from "./_components/RelatedProducts";

export default function SyprinProductDetailPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ProductSection />
      <TechnicalDetails />
      <CustomerReviews />
      <RelatedProducts />
    </main>
  );
}
