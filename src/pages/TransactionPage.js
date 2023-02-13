import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as packageApi from "../apis/package-api";
import useAuth from "../hooks/useAuth";

const initialInput = {
  paymentDetail: "complete",
  verfifyImage: ""
};

function TransactionPage() {
  const [input, setInput] = useState(initialInput);
  const [getAllPackage, setGetAllPackage] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState([]);
  const navigate = useNavigate();

  const { authenticatedUser } = useAuth();


  useEffect(() => {
    setInput({ ...initialInput, userId: authenticatedUser?.id })
    const fetchAllPackage = async () => {
      const res = await packageApi.getPackage();
      setGetAllPackage(res.data);
      
    };
    fetchAllPackage();
  }, []);

  const handleChange = (e) => {
    setSelectedPackage({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const payload = {...input}
      payload.verfifyImage = input.verfifyImage ? input.verfifyImage : null
      await packageApi.buyPackage(payload)
      setInput(initialInput)
      navigate('/thank')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="flex justify-center">
            <div className="text-5xl py-6">{authenticatedUser.firstName} {authenticatedUser.lastName} Wallet</div>
            </div>
            <div>
              <select name="packageId" onChange={handleChange}>
                {getAllPackage.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.title} Price:{el.price} get: {el.topup}
                  </option>
                ))}
              </select>
              <div className="my-6">
                <input
                  placeholder="Your description"
                  type="text"
                  name="paymentDetail"
                  value={input.paymentDetail}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-4xl text-center mb-3">
              Choose Your payment
              <div>
                <Link to="/" className="text-2xl block">
                  credit card
                </Link>
                <Link to="/" className="text-2xl block">
                  ShopeePay
                </Link>
                <Link to="/" className="text-2xl block">
                  Truemoney Wallet
                </Link>
                <Link to="/" className="text-2xl block">
                  LinePay
                </Link>
              </div>
            </div>
            <div className="text-2xl">
              <div className="my-4">
                <label htmlFor="verifyImage">upload your payment here</label>
              </div>
              <input
                type="file"
                id="verifyImage"
                name="verifyImage"
                value={input.verfifyImage}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-evenly">
              <button className="my-4 bg-rose-300 px-2 py-3" type="submit">
                Confirm
              </button>
              <button
                className="my-4 bg-rose-300 px-2 py-3"
                onClick={handleClickBack}
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default TransactionPage;
