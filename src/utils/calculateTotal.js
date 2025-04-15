export const calculateTotal = (bill, visitors, tip) => {
  const billValue = parseFloat(bill);
  const visitorsValue = parseInt(visitors);

  if (
    isNaN(billValue) ||
    isNaN(visitorsValue) ||
    visitorsValue <= 0 ||
    billValue < 0
  ) {
    return [
      { name: "tip", description: "Tip Amount", value: 0 },
      { name: "total", description: "Total", value: 0 },
    ];
  }

  const tipAmount =
    Math.round((((billValue / 100) * tip) / visitorsValue) * 100) / 100;
  const totalAmount =
    Math.round((billValue / visitorsValue + tipAmount) * 100) / 100;

  return [
    { name: "tip", description: "Tip Amount", value: tipAmount },
    { name: "total", description: "Total", value: totalAmount },
  ];
};
