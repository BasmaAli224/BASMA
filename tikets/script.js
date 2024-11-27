// ملف script.js

function searchFlights() {
  // جمع بيانات النموذج
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const departureDate = document.getElementById("departure-date").value;
  const returnDate = document.getElementById("return-date").value;
  const passengers = document.getElementById("passengers").value;

  // التحقق من ملء الحقول
  if (!from || !to || !departureDate || !passengers) {
    alert("يرجى ملء جميع الحقول المطلوبة.");
    return;
  }

  // عرض نتائج البحث كعينة
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
        <h3>نتائج البحث:</h3>
        <p><strong>من:</strong> ${from}</p>
        <p><strong>إلى:</strong> ${to}</p>
        <p><strong>تاريخ المغادرة:</strong> ${departureDate}</p>
        <p><strong>تاريخ العودة:</strong> ${returnDate || "لا يوجد"}</p>
        <p><strong>عدد الركاب:</strong> ${passengers}</p>
        <p><em>هذه فقط عينة لعرض البيانات المدخلة. يمكن استبدال هذا الجزء بواجهة عرض الرحلات الفعلية.</em></p>
    `;
}
