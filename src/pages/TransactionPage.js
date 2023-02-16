import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as packageApi from "../apis/package-api";
import * as transactionApi from '../apis/transaction-api'
import * as reserveApi from '../apis/reserve-api'
import useAuth from "../hooks/useAuth";
import useReserve from "../hooks/useReserve";

const initialInput = {
  paymentDetail: "complete",
  verifyImage: ""
};

function TransactionPage() {
  const [input, setInput] = useState(initialInput);
  const [getAllPackage, setGetAllPackage] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);


  const navigate = useNavigate();

  const { authenticatedUser } = useAuth();
  const {isCourse,fetchCourse} = useReserve()

  useEffect(() => {
    fetchCourse()
    setInput({ ...initialInput, userId: authenticatedUser?.id })
    const fetchAllPackage = async () => {
      const res = await packageApi.getPackage();
      setGetAllPackage(res.data);
    };
    const fetchSelectedCourse = async () => {
      const res = await transactionApi.getAllCourse();
      setSelectedCourse(res.data);
      // console.log(res.data)
    };
    fetchAllPackage();
    fetchSelectedCourse()
  }, []);

  const handleChange = (e) => {
    // setSelectedPackage({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input)
  };

  const handleClickBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const payload = {...input}
      payload.verifyImage = input.verifyImage ? input.verifyImage : null
      if(isCourse===true){
      await transactionApi.reserveCourse(payload)
      await reserveApi.updateStatus({id:+payload.reservationId,status:"complete"})
      setInput(initialInput)
      navigate('/thank')
      }else{
      await packageApi.buyPackage(payload)
      setInput(initialInput)
      navigate('/thank')
      }
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
            <div className="text-4xl py-6">Payment</div>
            </div>
            <div>
              {isCourse === true?(
              <>
              <select name="reservationId" onChange={handleChange}>
              <option hidden="hidden">Confirm Your Selected Course</option>
              {selectedCourse.map((el,idx)=>(
              <option key={el.id} value={el.id}>{idx+1}. {el.Course.title} Price:{el.Course.price}</option>
              ))}
              </select>
              </>
              ):(
              <select name="packageId" onChange={handleChange}>
                <option hidden="hidden">Choose Your package</option>
                {getAllPackage.map((el,idx) => (
                  <option key={el.id} value={el.id}>
                    {idx+1}. Price:{el.price} get: {el.topup}
                  </option>
                ))}
              </select>)}
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
