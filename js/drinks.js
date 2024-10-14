document
  .getElementById("drinks-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // منع إرسال النموذج

    const drinkOrder = document.getElementById("drinkOrder").value;

    // إضافة الطلب إلى التخزين المحلي
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(`<p>${drinkOrder}</p>`);
    localStorage.setItem("orders", JSON.stringify(orders));

    

    // إعادة توجيه المستخدم إلى الصفحة الرئيسية
    window.location.href = "/html/home.html"; // تأكد من تعديل المسار حسب احتياجاتك
  });
