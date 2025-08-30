import { useState } from "react";
import { ContactFormData, ApiResponse } from "@/types/contact";
import { getEmailTranslation } from "@/translation/email";

export function useContactForm(locale: string = "en") {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const submitForm = async (
    data: Omit<ContactFormData, "locale">
  ): Promise<ApiResponse> => {
    setIsLoading(true);
    setResponse(null);

    try {
      // Tambahkan locale ke data
      const formDataWithLocale: ContactFormData = {
        ...data,
        locale,
      };

      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithLocale),
      });

      const result: ApiResponse = await res.json();
      setResponse(result);
      return result;
    } catch (error) {
      const translations = getEmailTranslation(locale);
      const errorResponse: ApiResponse = {
        success: false,
        message: translations.apiMessages.networkError,
      };
      setResponse(errorResponse);
      return errorResponse;
    } finally {
      setIsLoading(false);
    }
  };

  const clearResponse = () => setResponse(null);

  return {
    submitForm,
    isLoading,
    response,
    clearResponse,
  };
}
