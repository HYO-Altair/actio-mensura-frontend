import React, { useEffect } from "react";
import app from "firebase/app";
import "firebase/database";
import Linegraph from "../../components//linegraph/Linegraph";

// set querystring to extract search parameters
const queryString = require("query-string");

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// initialize firebase
app.initializeApp(config);
const db = app.database();

export default function Statistics(props) {
  // hooks
  const [id, setID] = React.useState(null);
  const [serverFound, setServerFound] = React.useState(false);
  const [stats, setStats] = React.useState({});

  useEffect(() => {
    // extract and set server id
    let parsed = queryString.parse(props.location.search);
    setID(parsed.id);
    // check database for server
    db.ref(`servers/${queryString.parse(props.location.search).id}`).once(
      "value",
      (snapshot) => {
        // if found
        if (snapshot.val()) {
          // indicate server was found
          setServerFound(true);
          // track statistics
          db.ref(snapshot.val() + "/days/").on("value", (snapshot) => {
            console.log(snapshot.val());

            if (snapshot.val() !== stats) setStats(snapshot.val());
          });
        } else setServerFound(false);
        return;
      }
    );
  }, []);

  return (
    <div className='body'>
      <div>
        <div className='main-stats'>
          <h1 className='server-heading'>
            SERVER STATS for {id} {"\u00A0"}
            <br />
            server found: {serverFound ? "yes" : "no"} <br />
            <Linegraph stats={stats} />
          </h1>
        </div>
      </div>
    </div>
  );
}
