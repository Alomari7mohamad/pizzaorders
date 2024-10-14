const printButton = document.getElementById("print-button");


function printOrders() {
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (name === "") {
    alert("يرجى إدخال اسم الزبون قبل الطباعة.");
    return;
  }

  if (orders.length === 0) {
    alert("لا توجد طلبات للطباعة.");
    return;
  }

  const printWindow = window.open("", "_blank");
  const ordersList = orders.map((order) => `<li>${order}</li>`).join("");
  printWindow.document.write(`
        <html>
        <head>
            
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { text-align: center; }
                ul { list-style-type: none; padding: 0; }
            </style>
        </head>
        <body>
            <h1>تفاصيل الزبون</h1>
            <p><strong>اسم الزبون:</strong> ${name}</p>
            <p><strong>رقم الهاتف:</strong> ${phone}</p>
            <h1>تفاصيل الطلب</h1>
            <ul>${ordersList}</ul>
        </body>
        </html>
    `);
  printWindow.document.close();
  printWindow.print();
  printWindow.close();

  // يمكنك حذف الطلبات بعد الطباعة إذا كنت ترغب في ذلك
  localStorage.removeItem("orders");
}
