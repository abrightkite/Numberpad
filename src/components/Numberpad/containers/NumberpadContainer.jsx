import React, { useEffect, useState } from "react";
import Numberpad from "../Numberpad";

const NumberpadContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const onButtonPressed = (n) => {
    if (phoneNumber.length === 13) return;
    setPhoneNumber(phoneNumber + n);
  };

  const onClearButtonPressed = () => {
    setPhoneNumber("");
  };
  const onRemoveButtonPressed = () => {
    if (phoneNumber.length !== 0) {
      setPhoneNumber(phoneNumber.slice(0, -1));
    }
  };

  useEffect(() => {
    if (phoneNumber.length === 4) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{1})/, "$1-$2"));
    }
    if (phoneNumber.length === 9) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{1})(\d{4})/, "$1-$2-$3")
      );
    }
    if (phoneNumber.length === 11) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3")
      );
    }
    if (phoneNumber.length === 12) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      );
    }
    if (phoneNumber.length === 13) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phoneNumber]);

  const [active, setActive] = useState(false);
  useEffect(() => {
    if (phoneNumber.length === 13) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [phoneNumber.length]);

  return (
    <Numberpad
      onButtonPressed={onButtonPressed}
      phoneNumber={phoneNumber}
      onClearButtonPressed={onClearButtonPressed}
      onRemoveButtonPressed={onRemoveButtonPressed}
      active={active}
    />
  );
};

export default NumberpadContainer;
