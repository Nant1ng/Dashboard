import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../lib/controller";
import Information from "./Information";

function Details() {
  const { id } = useParams();

  const getAirbnb = doc(firestore, `airbnb/${id}`);

  const [airbnb, setAirbnb] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotelData = async () => {
      const docSnap = await getDoc(getAirbnb);
      if (docSnap.exists()) {
        const newAirbnbObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setAirbnb(newAirbnbObj);
        setIsLoading(false);
      } else {
        // if docSnap.data = undefined
        console.log("No Such Document Exist");
      }
    };
    fetchHotelData();
  }, [getAirbnb]);

  if (isLoading) return <div className="Loading" />;
  return (
    <div className="airbnb-details">
      {Object.keys(airbnb) && Object.keys(airbnb).length ? (
        <Information data={airbnb} detailsPage />
      ) : null}
    </div>
  );
}

export default Details;
