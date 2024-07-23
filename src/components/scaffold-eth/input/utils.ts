// Treat any dot-separated string as a potential ENS name
const ensRegex = /.+\..+/;
export const isENS = (address = "") => ensRegex.test(address);

export const SIGNED_NUMBER_REGEX = /^-?\d+\.?\d*$/;
export const UNSIGNED_NUMBER_REGEX = /^\.?\d+\.?\d*$/;

export type CommonInputProps<T = string> = {
  value: T;
  onChange: (newValue: T) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
};
