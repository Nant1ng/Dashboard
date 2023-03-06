import { addDoc, collection, getFirestore } from "firebase/firestore";
import { AddAirbnbType } from "../types/airbnb";
import { app } from "./Firebase";

export const firestore = getFirestore(app);

export const airbnbCollection = collection(firestore, "airbnb");

export const addAirbnb = async (airbnbData: AddAirbnbType) => {
  const newAirbnb = await addDoc(airbnbCollection, { ...airbnbData });
};


