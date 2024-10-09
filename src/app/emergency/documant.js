// Documents.js (or wherever you're displaying the documents)
import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Import the Modal component

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch documents from your API
    const fetchDocuments = async () => {
      try {
        const response = await fetch("/api/your-endpoint-to-fetch-documents");
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div>
      <h1>Your Documents</h1>
      <ul>
        {documents.map((document) => (
          <li
            key={document.id}
            onClick={() => handleDocumentClick(document)} // Handle click
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            {document.title}
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        document={selectedDocument}
      />
    </div>
  );
};

export default Documents;
