import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { airbnbCollection } from "../lib/controller";
import { NewAirbnbType } from "../types/airbnb";
import Information from "./Information";

function HomePage() {
  const [airbnbs, setAirbnbs] = useState<NewAirbnbType[]>([]);

  useEffect(
    () =>
      onSnapshot(airbnbCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setAirbnbs(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  console.log(airbnbs);
  return (
    <div className="card">
      <h2 className="title">All Airbnbs</h2>
      {airbnbs && airbnbs.length ? (
        <>
          {airbnbs?.map((airbnb) => (
            <Information key={airbnb.id} data={airbnb} />
          ))}
        </>
      ) : (
        <h2 className="no-airbnbs">
          There are no Airbnbs. Please add a new one.
        </h2>
      )}
    </div>
  );
}

export default HomePage;
