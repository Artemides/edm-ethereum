import { useCallback } from "react";
import { bytesToString, isHex, toBytes, toHex } from "viem";
import { InputBase } from "./input-base";
import { CommonInputProps } from "./utils";

export const BytesInput = ({
  value,
  onChange,
  name,
  placeholder,
  disabled,
}: CommonInputProps) => {
  const convertStringToBytes = useCallback(() => {
    onChange(
      isHex(value) ? bytesToString(toBytes(value)) : toHex(toBytes(value))
    );
  }, [onChange, value]);

  return (
    <InputBase
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      suffix={
        <div
          className="self-center cursor-pointer text-xl font-semibold px-4 text-accent"
          onClick={convertStringToBytes}
        >
          #
        </div>
      }
    />
  );
};
