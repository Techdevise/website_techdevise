const path = require('path');
const fs = require('fs');

const uploadPdf = async (pdfFile) => {
  return new Promise((resolve, reject) => {
    if (!pdfFile) {
      return reject(new Error("No file provided"));
    }

    if (pdfFile.mimetype !== 'application/pdf') {
      return reject(new Error("Only PDF files are allowed"));
    }

    const uploadDir = path.join(__dirname, '..', 'public', 'pdfs');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `job_${Date.now()}_${pdfFile.name}`;
    const filePath = path.join(uploadDir, fileName);

    pdfFile.mv(filePath, (err) => {
      if (err) return reject(err);
      resolve(`/pdfs/${fileName}`);
    });
  });
};

module.exports = uploadPdf;
