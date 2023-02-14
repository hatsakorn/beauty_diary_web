import { useContext } from "react";
import { ReserveContext } from "../contexts/ReservationCentext";

export default function useReserve () {
    return useContext(ReserveContext)
}