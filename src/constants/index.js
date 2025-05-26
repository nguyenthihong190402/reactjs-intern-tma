
const MODEL_OPTIONS = [
  { label: "Hyundai Elantra 2023", value: "Hyundai Elantra 2023" },
  { label: "Hyundai Tucson 2024", value: "Hyundai Tucson 2024" },
  { label: "Hyundai Santa Fe 2023", value: "Hyundai Santa Fe 2023" },
  { label: "Hyundai Ioniq 5 2024", value: "Hyundai Ioniq 5 2024" },
  { label: "Hyundai Palisade 2024", value: "Hyundai Palisade 2024" },
];

const TYPE_OPTIONS = [
  { label: "Oil Change", value: "Oil Change" },
  { label: "Battery Replacement", value: "Battery Replacement" },
  { label: "Brake Inspection", value: "Brake Inspection" },
  { label: "Software Update", value: "Software Update" },
  { label: "AC Repair", value: "AC Repair" },
];

const CENTER_OPTIONS = [
  { label: "RISKTASKERX Ho Chi Minh", value: "Ho_Chi_Minh" },
  { label: "RISKTASKERX Ha Noi", value: "Ha_Noi" },
  { label: "RISKTASKERX Quy Nhon", value: "Quy_Nhon" },
];


const STATUS_OPTIONS = [
  { label: "Active", value: true },
  { label: "Inactive", value: false },
];


const PURCHASE_LIST = [
  { title: "Car Model", dataIndex: "carModel", width: 150},
  { title: "VIN", dataIndex: "vehicleIdentificationNumber",  width: 150 },
  { title: "Price", dataIndex: "price",  width: 150 },
  { title: "Payment options", dataIndex: "paymentOption",  width: 150 },
  { title: "Purchase date", dataIndex: "purchaseDate",  width: 150 },
];
const WARRANTY_LIST = [
  { title: "Car Model", dataIndex: "carModel" },
  { title: "License Plate", dataIndex: "licensePlate" },
  { title: "Service Type", dataIndex: "serviceType" },
  { title: "Service Center", dataIndex: "serviceCenter" },
  { title: "Service Date", dataIndex: "serviceDate" },
  { title: "Service Cost", dataIndex: "serviceCost" },
  
];
const DEPARTMENT_LIST = [
  { label: "Customer", value: "Customer" },
  { label: "Operations", value: "Operations" },
  { label: "Sales", value: "Sales" },
  { label: "IT", value: "IT" },
];

const ROLE_LIST = [
  { label: "Customer Manager", value: "Customer Manager" },
  { label: "Operations Manager", value: "Operations Manager" },
  { label: "Sales Manager", value: "Sales Manager" },
  { label: "System Admin", value: "System Admin" },
];


export default {
  MODEL_OPTIONS,
  TYPE_OPTIONS,
  CENTER_OPTIONS,
  PURCHASE_LIST,
  WARRANTY_LIST,
  DEPARTMENT_LIST,
  ROLE_LIST,
  STATUS_OPTIONS
};
