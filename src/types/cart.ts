export interface CartItem {
  slug: string;
  title: string;
  price: number;
  image: string;
  selectedDate?: string;
  selectedType?: string;
  courseLocation?: string;
  courseData?: any; // 전체 코스 데이터
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  updateItem: (slug: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export interface OrderDetails {
  orderNumber: string;
  items: CartItem[];
  totalAmount: number;
  discountAmount?: number;
  finalAmount: number;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  appliedPromo?: string;
  stripeSessionId?: string;
  paymentStatus: string;
  createdAt: string;
}
