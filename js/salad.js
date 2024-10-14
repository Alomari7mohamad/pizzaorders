let orders = JSON.parse(localStorage.getItem("orders")) || [];

document
  .getElementById("salad-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const extras = [];
    const extraOptions = document.querySelectorAll(
      'input[name="extra"]:checked'
    );
    extraOptions.forEach((option) => {
      extras.push(option.value);
    });

    const orderDetails = `سلطة مع: ${extras.join(", ")}`;
    orders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(orders));
    

    // إعادة توجيه المستخدم إلى الصفحة الرئيسية
    window.location.href = "/html/home.html"; // تأكد من تعديل المسار حسب احتياجاتك
  });
