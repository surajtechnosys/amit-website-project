import {
  Status,
} from "../generated/prisma/enums";

export const APP_NAME = process.env.NEXT_APP_APP_NAME ?? "Asset Management System";
export const APP_DESCRIPTION = process.env.NEXT_APP_DESCRIPTION ?? "Asset Management System";
export const SERVER_URL = process.env.NEXT_APP_SERVER_URL ?? "http://localhost:3000";

export const roleDefaultValues = {
  name: "",
  description: "",
  status: Status.INACTIVE,
};

export const userDefaultValues = {
  name: "",
  email: "",
  image: "",
  password: "",
  status: Status.ACTIVE,
};

export const bannerDefaultValues = {
  title: "",
  description: "",
  image: "",
  status: Status.ACTIVE,
};
export const enquiryDefaultValues = {
  fullName: "",
  email: "",
  companyName: "",
  subject: "",
  message: "",
  phoneNumber: ""
}
