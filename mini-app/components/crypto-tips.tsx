'use client';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CryptoTips() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>3 Quick Crypto Trading Tips for Beginners</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal pl-4 space-y-2">
          <li>Start with a small, diversified portfolio to manage risk.</li>
          <li>Use stop‑loss orders to protect gains and limit losses.</li>
          <li>Keep emotions in check—stick to a clear strategy and avoid impulsive trades.</li>
        </ol>
      </CardContent>
    </Card>
  );
}
