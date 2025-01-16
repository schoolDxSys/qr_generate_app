const SS_ID = "1vb8vN0QSsBK0tUtQx6oEVMT6qxYYsSNo18aE5f8Kwn8";

const subject_ss = SpreadSheetsSQL.open(SS_ID, "subject");
const attend_ss = SpreadSheetsSQL.open(SS_ID, "attend");
const onetime_ss = SpreadSheetsSQL.open(SS_ID, "onetime");

function subject_controller(contents) {
  let subject = contents.Subject;
  let time = contents.Time;

  let create_serial = function () {
    let serial = Utilities.getUuid();
    return serial;
  };

  let result = subject_ss.insertRows([
    { subjectName: subject, serial: create_serial(), date: get_time() },
  ]);

  return result;
}

function attend_controller(contents) {
  let userID = contents.userID;
  let serial = contents.serial;
  let time = contents.Time;

  let result = attend_ss.insertRows([
    { userID: userID, Serial: serial, Time: time },
  ]);

  return result;
}
