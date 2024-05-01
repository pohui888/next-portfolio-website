// validation of email
export const validateString = (
  value: unknown, // the value can be in any form, object, or string event pdf. So we set it as "unkown" instead of "any" for percise.
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  // we only allow the email sent as string
  return true;
};

// error handling of email
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  // Dealing with diffrent type of error
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
