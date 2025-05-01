// types/midtrans.d.ts
interface MidtransSnap {
  pay(token: string, options?: Record<string, any>): void;
}

interface Window {
  snap: MidtransSnap;
}
