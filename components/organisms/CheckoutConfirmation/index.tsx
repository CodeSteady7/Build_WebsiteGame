import React, { useState } from "react";
import { toast } from "react-toastify";
import { setCheckOut } from "../../../services/player";
import { useRouter } from "next/router";
export default function CheckoutConfirmation() {
  const [checkbox, setCheckBox] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    const dataItem = localStorage.getItem("data-item");
    const dataTopUp = localStorage.getItem("data-topup");

    const setDataItem = JSON.parse(dataItem!);
    const setDataTopUp = JSON.parse(dataTopUp!);

    if (!checkbox) {
      toast.error("Pastikan anda telah melakukan pembayaran");
    }

    const data = {
      accountUser: setDataTopUp.verifyID,
      name: setDataTopUp.bankAccountName,
      nominal: setDataTopUp.nominalItem._id,
      voucher: setDataItem._id,
      payment: setDataTopUp.paymentItem.payment._id,
      bank: setDataTopUp.paymentItem.bank._id,
    };

    const response = await setCheckOut(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Checkout Berhasil");
      router.push("/complete-checkout");
    }
  };
  return (
    <>
      <label className='checkbox-label text-lg color-palette-1'>
        I have transferred the money
        <input
          type='checkbox'
          checked={checkbox}
          onChange={() => setCheckBox(!checkbox)}
        />
        <span className='checkmark'></span>
      </label>
      <div className='d-md-block d-flex flex-column w-100 pt-50'>
        <button
          className='btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg'
          type='button'
          onClick={() => onSubmit()}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
