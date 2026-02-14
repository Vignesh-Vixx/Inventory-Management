
export enum UserRole {
  SUPER_ADMIN = 'Super Admin',
  ADMIN = 'Admin',
  TECHNICAL_TEAM = 'Technical Team',
  STORE_KEEPER = 'Store Keeper'
}

export enum RequestStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  ISSUED = 'Issued',
  PARTIALLY_ISSUED = 'Partially Issued',
  CONFIRMED = 'Confirmed'
}

export enum Priority {
  NORMAL = 'Normal',
  URGENT = 'Urgent'
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  department: string;
}

export interface InventoryItem {
  id: string;
  sNo: number;
  category: string;
  itemCode: string;
  classification: string;
  storageLocation: string;
  itemName: string; // Descriptions
  uom: string;
  minStockReq: number;
  openingStock: number;
  issuedStock: number;
  receivedStock: number;
  returnedQty: number;
  currentStock: number;
  finalPhysicalStock: number;
  stockStatus: string;
}

export interface InventoryRequest {
  id: string;
  requestId: string;
  userId: string;
  userName: string;
  department: string;
  itemId: string;
  itemName: string;
  requestedQty: number;
  approvedQty: number;
  issuedQty: number;
  status: RequestStatus;
  priority: Priority;
  reason: string;
  requiredDate: string;
  createdAt: string;
  rejectionReason?: string;
  // Requester Confirmation Fields
  requesterImage?: string;
  requesterNotes?: string;
  confirmedAt?: string;
}

export interface Issue {
  id: string;
  requestId: string;
  issuedQty: number;
  issueDate: string;
  issuedBy: string;
  remarks: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  module: string;
  timestamp: string;
}
