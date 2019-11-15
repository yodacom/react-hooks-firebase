import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function useTimes() {
  const [times, setTimes] = useState([])

  useEffect(() => {
    // todo: we need an unsubscribe callback not for youtube subscribers
    const unsubscribe = firebase
      .firestore()
      .collection('times')
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setTimes(newTimes)
      })
    return () => unsubscribe()
  }, [])

  return times
}

const TimesList = () => {
  const times = useTimes()

  return (
    <div>
      <h2>Times List</h2>
      <div>
        <label>Sort by</label>{''}
        <select>
        <option>Time (fastest first)</option>
        <option>Time (slowest first) </option>
        <option disabled >------</option>
        <option>Title(a-z)</option>
        <option>Title(z-a)</option>

        </select>
      </div>
      <ol>
        {times.map((time) =>
        <li key={time.id}>
          <div className="time-entry">
            {time.title}
              <code className="time"> {time.time_seconds} seconds </code>
          </div>
        </li>

    )}

      </ol>
    </div>
  )
}

export default TimesList;