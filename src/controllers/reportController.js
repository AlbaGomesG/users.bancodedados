const PDFDocument = require("pdfkit");

const postModel = require("../models/postModel");

const exportPostsPDF = async (req, res) => {
    try {
        const posts = await postModel.getPosts();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=posts.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(25).text("Relatório de Posts", {align: "center"});
        doc.moveDown();

        doc.fontSize(12).text("Id | Content | Image |Localization", {underline: true});
        doc.moveDown();

        posts.forEach((post) => {
            doc.text(
                `${post.id} | ${post.content} | ${post.image} | ${post.localization}`
            );
        });

        doc.end();

    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar PDF!"})
    }
};

module.exports = { exportPostsPDF }