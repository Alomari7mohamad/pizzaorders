document.getElementById("pizza-form").addEventListener("submit", function (event) {
    event.preventDefault(); // منع إرسال النموذج

    // استرداد المعلومات من النموذج
    const size = document.querySelector('input[name="size"]:checked').value;

    // استرداد الإضافات وكمياتها
    const extras = Array.from(
        document.querySelectorAll('input[name="extra"]:checked')
    )
    .map((extra) => {
        const quantitySelect = extra.nextElementSibling; // الحصول على السليكت التالي
        const quantity = quantitySelect.value; // استرداد الكمية
        return `${extra.value} (كمية: ${quantity})`;
    })
    .join(", ");

    const pieces = document.querySelector('input[name="pieces"]:checked').value;
    const crust = document.querySelector('input[name="crust"]:checked').value;
    const notes = document.querySelector('textarea[name="notes"]').value;

    // إنشاء نص الطلب بدون معلومات الزبون
    const orderDetails = `
       
        <p><strong>حجم البيتزا:</strong> ${size}</p>
        <p><strong>الإضافات:</strong> ${extras}</p>
        <p><strong>عدد القطع:</strong> ${pieces}</p>
        <p><strong>نوع العجينة:</strong> ${crust}</p>
        <p><strong>ملاحظات:</strong> ${notes}</p>
    `;

    // إضافة الطلب إلى التخزين المحلي
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(orders));

    // إعادة توجيه المستخدم إلى الصفحة الرئيسية
    window.location.href = "/html/home.html"; // تأكد من تعديل المسار حسب احتياجاتك
});
