import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFSpareParts = DisplayAll => {
    const doc = new jsPDF();

    const tabColum =["customer","cakeType","size","flavour","sugar","quantity","cakeText","paymentType","cakeImage"];
    const tableRows = [];

    DisplayAll.forEach(all => {
        const DesignData = [
            all.customer,
            all.cakeType,
            all.size,
            all.flavour,
            all.sugar,
            all.quantity,
            all.cakeText,
            all.paymentType,
            all.cakeImage


        ];
        tableRows.push(DesignData);
        
    });
    doc.autoTable(tabColum,tableRows,{startY:20});
    doc.text("More Details about Accepted Orders",40,15);
    doc.save('OrderDetails.pdf');
};

export default generatePDFSpareParts;