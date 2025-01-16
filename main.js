// 科目登録 {"Subject":"数学","Time":"2025-12-01 00:00:00.000","Status":"subject"}
// 出席登録 {"userID":"{userid}","Serial":"{serial}","Time":"2025-12-01 00:00:00.000","Status":"attend"}

function doPost(e) {
  let contents = e.postData.getDataAsString();

  let params = JSON.parse(contents);
  let status = params.Status;

  console.log(status);

  if (status === "subject") {
    subject_controller(params);
  } else if (status === "attend") {
    attend_controller(params);
  } else {
    console.log("Error: Invalid status");
  }
}

function test() {
  let contents = JSON.stringify({
    postData: {
      Subject: "数学",
      Time: "2025-12-01 00:00:00.000",
      Status: "subject",
    },
  });

  main(contents);
}
