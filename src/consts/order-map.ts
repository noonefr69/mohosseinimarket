export const statusMap = {
  pending: { label: "در انتظار پرداخت", variant: "secondary" },
  paid: { label: "پرداخت شده", variant: "default" },
  shipped: { label: "ارسال شده", variant: "default" },
  delivered: { label: "تحویل داده شده", variant: "default" },
  cancelled: { label: "لغو شده", variant: "destructive" },
} as const;
