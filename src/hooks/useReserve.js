import { useContext } from "react";
import { ReserveContext } from "../contexts/ReservationContext";

export default function useReserve () {
    return useContext(ReserveContext)
}