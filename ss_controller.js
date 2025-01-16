const SS_ID = PropertiesService.getScriptProperties().getProperty("SS_ID");

const subject_ss = SpreadsheetSQL.open(SS_ID, "subject");
const attend_ss = SpreadsheetSQL.open(SS_ID, "attend");
const onetime_ss = SpreadsheetSQL.open(SS_ID, "onetime");

function subject_controller(contents) {
  let subject = contents.Subject;
  let time = contents.Time;

  let create_serial = function () {
    let serial = Utilities.getUuid();
    return serial;
  };

  let result = subject_ss.insertRows([
    { Subject: subject, Time: time, Serial: create_serial(), date: get_time() },
  ]);

  return result;
}

function attend_controller(contents) {
  let userID = contents.userID;
  let serial = contents.Serial;
  let time = contents.Time;

  let result = attend_ss.insertRows([
    { userID: userID, Serial: serial, Time: time },
  ]);

  return result;
}
