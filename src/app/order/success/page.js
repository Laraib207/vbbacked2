import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering to avoid static issues with search params

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
