import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

import { AddAirbnbType } from "../types/airbnb";
import { app } from "./Firebase";

export const firestore = getFirestore(app);

export const airbnbCollection = collection(firestore, "airbnb");

export const addAirbnb = async (airbnbData: AddAirbnbType) => {
  await addDoc(airbnbCollection, { ...airbnbData });
};

export const deleteAirbnb = async (
  id: string | undefined,
  navigate: NavigateFunction
) => {
  const document = doc(firestore, `airbnb/${id}`);
  await deleteDoc(document);
  navigate("/");
};

export const editAirbnb = async (id: string | undefined, docData: any) => {
  const getAirbnb = doc(firestore, `airbnb/${id}`);
  await setDoc(getAirbnb, docData, { merge: true });
};
