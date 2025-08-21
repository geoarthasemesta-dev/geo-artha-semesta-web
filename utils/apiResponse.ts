// utils/apiResponse.ts
import { NextResponse } from "next/server";

export interface ApiResponse<T = unknown> {
  status: boolean;
  statusCode: number;
  message: string;
  data?: T;
}

export function successResponse<T>(
  data: T,
  message = "Success",
  statusCode = 200
) {
  const response: ApiResponse<T> = {
    status: true,
    statusCode,
    message,
    data,
  };
  return NextResponse.json(response, { status: statusCode });
}

export function errorResponse(message = "Error", statusCode = 400) {
  const response: ApiResponse = {
    status: false,
    statusCode,
    message,
  };
  return NextResponse.json(response, { status: statusCode });
}
