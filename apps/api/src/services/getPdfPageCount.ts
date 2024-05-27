import pdf from "pdf-parse";

async function getPdfPageCount(pdfBuffer: Buffer) {
  try {
    const data = await pdf(pdfBuffer);
    return data.numpages;
  } catch (error) {
    console.error("Error getting PDF page count:", error);
    throw error;
  }
}

export default getPdfPageCount;
