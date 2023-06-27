import moment from "moment";

 const convertDateStringToDate = (dateString: string|Date) => {
  return moment(dateString, "YYYY-MM-DD HH:mm:ss.SSS").toDate();

 
}

export default convertDateStringToDate