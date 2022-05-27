//Create a function to convert milliseconds to required timestamp format
export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "numeric",
    year: "numeric",
  });
};

//DEEP DIVE
//Create a function to show time difference between time of comment and current time.
export const formatTimestampDeepDive = (timestamp) => {
  //Step1: Set up current time for comparison and time variables
  const currentTimestamp = new Date();
  const currentTime = currentTimestamp.getTime();
  //variables
  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  const oneMonth = 2629800000;
  const oneYear = oneDay * 365;

  //Step 2: Calculate time distance and convert it into readable time.
  const commentTime = timestamp;

  const distance = currentTime - commentTime;
  const distanceYear = Math.floor(distance / oneYear);
  const distanceMonth = Math.floor((distance % oneYear) / oneMonth);
  const distanceWeek = Math.floor((distance % oneMonth) / oneWeek);
  const distanceDay = Math.floor((distance % oneWeek) / oneDay);
  const distanceHour = Math.floor((distance % oneDay) / oneHour);
  const distanceMinute = Math.floor((distance % oneHour) / oneMinute);
  //Step 3: Set up conditions to format timestamp.
  if (distanceYear === 1) {
    return `${distanceYear} year ago`;
  } else if (distanceYear > 1) {
    return `${distanceYear} years ago`;
  } else if (distanceYear < 1) {
    if (distanceMonth === 1) {
      return `${distanceMonth} month ago`;
    } else if (distanceMonth > 1) {
      return `${distanceMonth} months ago`;
    } else if (distanceMonth < 1) {
      if (distanceWeek === 1) {
        return `${distanceWeek} week ago`;
      } else if (distanceWeek > 1) {
        return `${distanceWeek} weeks ago`;
      } else if (distanceWeek < 1) {
        if (distanceDay === 1) {
          return `${distanceDay} day ago`;
        } else if (distanceDay > 1) {
          return `${distanceDay} days ago`;
        } else if (distanceDay < 1) {
          if (distanceHour === 1) {
            return `${distanceHour} hour ago`;
          } else if (distanceHour > 1) {
            return `${distanceHour} hours ago`;
          } else if (distanceHour < 1) {
            if (distanceMinute === 1) {
              return `${distanceMinute} minute ago`;
            } else if (distanceMinute > 1) {
              return `${distanceMinute} minutes ago`;
            } else if (distanceMinute < 1) {
              return `A few seconds ago`;
            }
          }
        }
      }
    }
  }
};
